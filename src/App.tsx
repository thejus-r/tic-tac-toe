import { useState } from "react";
import Board from "./components/Board";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-stone-900 text-stone-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-12">Tic Tac Toe</h1>
      <Board />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)} className="p-4 bg-green-800">
        Click to open modal
      </button>
    </div>
  );
}
export default App;
