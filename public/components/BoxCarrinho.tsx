import ItemCarrinho from "./ItemCarrinho";

function BoxCarrinho() {
  return (
    <div
      className="z-10 w-[1280px] max-w-[90%] h-[720px] p-6 border border-black rounded-2xl shadow-3xl flex flex-col items-center"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      {/* Conteudo principal */}
      <h1 className=" text-white text-4xl mb-15 font-bold">Meu carrinho</h1>
      <ItemCarrinho />
    </div>
  );
}

export default BoxCarrinho;
