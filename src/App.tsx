import Board from "./components/Board";

function App() {
  return (
    <div className="w-full h-screen bg-stone-900 text-stone-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-12">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
export default App;
