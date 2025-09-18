import ItemCarrinho from "./ItemCarrinho";

function BoxCarrinho() {
  return (
    <div
      className="z-10 h-160 w-330 border-1 border-black rounded-2xl shadow-3xl flex justify-center items-center"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      {/* Conteudo principal */}
      <h1 className="absolute top-20 font-bold">Meu carrinho</h1>
      <ItemCarrinho />
    </div>
  );
}

export default BoxCarrinho;
