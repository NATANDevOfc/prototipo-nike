import { useState, useEffect } from "react";
import ItemCarrinho, { type Item } from "./ItemCarrinho";

function BoxCarrinho() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = () => {
      fetch("http://localhost:3001/api/items")
        .then((response) => {
          if (!response.ok) {
            throw new Error("A resposta da rede não foi boa");
          }
          return response.json();
        })
        .then((data) => {
          setItems(data.items);
        })
        .catch((error) => {
          console.error("Houve um problema ao buscar os itens:", error);
        });
    };

    fetchItems();
  }, []);

  const handleDeleteItem = (id: number) => {
    fetch(`http://localhost:3001/api/items/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha ao deletar o item");
        }
        // Atualiza o estado para remover o item da lista na tela
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Houve um problema ao deletar o item:", error);
      });
  };

  return (
    <div
      className="z-10 w-[1280px] max-w-[90%] h-[720px] max-h-[90%] p-6 border border-black rounded-2xl shadow-3xl flex flex-col items-center"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      <h1 className=" text-white text-4xl mb-15 font-bold">Meu carrinho</h1>
      {items.map((item) => (
        <ItemCarrinho key={item.id} item={item} onDelete={handleDeleteItem} />
      ))}
    </div>
  );
}

export default BoxCarrinho;
