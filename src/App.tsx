import Button from "./components/base/Button";
import Board from "./components/Board";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";

function App() {
  return (
    <div className="w-full h-screen bg-stone-900 text-stone-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-12">Tic Tac Toe</h1>
      <Board />
      <Modal />
    </div>
  );
}

export default App;
