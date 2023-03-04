import useGameStore from "../gameStore";

export default function Updater() {
  const currentPlayer = useGameStore((state) => state.currentPlayer);
  return (
    <div className="p-4 text-xl font-bold">Its {currentPlayer}'s turn</div>
  );
}
