import { createPortal } from "react-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useGameStore from "../gameStore";

function Alert({ context }: { context: string }) {
  const resetGame = useGameStore((state) => state.resetGame);
  return createPortal(
    <div className="absolute flex flex-col justify-center items-center h-screen w-screen top-0 left-0 bg-black/75 backdrop-blur-md text-white">
      <div className="bg-stone-900 flex w-1/2 max-w-lg flex-col gap-2 p-4 rounded-lg border-2 border-stone-800">
        <div className="flex flex-col justify-center items-center">
          <div>X</div>
          <p className="text-2xl font-bold uppercase">{context}</p>
        </div>
        <button
          onClick={() => resetGame()}
          className="py-2 font-medium text-md rounded-lg border-2 border-red-900 bg-red-900/50"
        >
          Restart
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Alert;
