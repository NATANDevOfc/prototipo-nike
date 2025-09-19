
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'public', 'components', 'db', 'db.json');

// Endpoint para obter os itens
app.get('/api/items', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ message: 'Error reading database' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint para adicionar um novo item
app.post('/api/items', (req, res) => {
  const newItem = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ message: 'Error reading database' });
    }

    const db = JSON.parse(data);
    newItem.id = db.items.length > 0 ? Math.max(...db.items.map(item => item.id)) + 1 : 1;
    db.items.push(newItem);

    fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to db.json:', err);
        return res.status(500).json({ message: 'Error writing to database' });
      }
      res.status(201).json(newItem);
    });
  });
});

// Endpoint para deletar um item
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ message: 'Error reading database' });
    }

    let db = JSON.parse(data);
    const initialLength = db.items.length;
    db.items = db.items.filter(item => item.id !== parseInt(id));

    if (db.items.length === initialLength) {
      return res.status(404).json({ message: 'Item not found' });
    }

    fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to db.json:', err);
        return res.status(500).json({ message: 'Error writing to database' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
