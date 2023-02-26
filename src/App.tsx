import { useState } from "react";
import Alert from "./components/base/Alert";
import Board from "./components/Board";

function App() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="w-full h-screen bg-stone-900 text-stone-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-12">Tic Tac Toe</h1>
      <Board />
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {isOpen && (
        <Alert>
          <Alert.Overlay>
            <Alert.Content setOpen={setOpen} />
          </Alert.Overlay>
        </Alert>
      )}
    </div>
  );
}
export default App;
