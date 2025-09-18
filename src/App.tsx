import "./App.css";
import BoxCarrinho from "../public/components/BoxCarrinho.tsx";

function App() {
  return (
    <>
      <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden">
        {/* Background inclinado */}
        <div
          className="fixed top-0 left-0 h-screen w-screen"
          style={{
            clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
            backgroundColor: "#2d2d2d",
          }}
        />
        <BoxCarrinho />
      </div>
    </>
  );
}

export default App;
