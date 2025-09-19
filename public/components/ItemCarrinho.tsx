// Definição dos tipos de dados
export interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

interface ItemCarrinhoProps {
  item: Item;
  onDelete: (id: number) => void;
}

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 12H6"
    />
  </svg>
);
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

function ItemCarrinho({ item, onDelete }: ItemCarrinhoProps) {
  return (
    <div className="w-full h-[18%] bg-zinc-800 p-3 rounded-lg flex items-center space-x-4 text-white mb-3 last:mb-0">
      {/* Placeholder para a Imagem do Produto */}
      <div className="w-30 h-16 bg-zinc-700 rounded-md basis-35">
        {/* Exemplo: <img src="/caminho/para/imagem.jpg" alt={item.name} className="w-full h-full object-cover rounded-md" /> */}
        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />}
      </div>

      {/* Informações do Produto e Controles */}
      <div className="flex-1 flex flex-col h-full">
        <div>
          <p className="font- font-sans text-[35px]">{item.name}</p>
          <p className="text-xs text-zinc-400">{item.price}</p>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-3">
        <button className="p-1 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors">
          <MinusIcon />
        </button>
        <span className="text-[12px] border-1 rounded-sm font-bold pt-1 pb-1 pr-2 pl-2">
          {item.quantity}
        </span>
        <button className="p-1 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors">
          <PlusIcon />
        </button>
      </div>

      {/* Botão de Remover */}
      <button
        onClick={() => onDelete(item.id)}
        className="text-zinc-400 hover:text-red-500 transition-colors self-center pr-5"
      >
        <TrashIcon />
      </button>
    </div>
  );
}

export default ItemCarrinho;