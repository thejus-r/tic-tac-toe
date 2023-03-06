import { createPortal } from "react-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useGameStore from "../gameStore";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Cross from "./Cross";
import Circle from "./Circle";
import { ReactElement } from "react";

const alertOverlayVarients: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const alertBoxVarients: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

function Alert() {
  const resetGame = useGameStore((state) => state.resetGame);
  const gameStatus = useGameStore((state) => state.gameStatus);
  return createPortal(
    <AnimatePresence>
      {gameStatus !== "ongoing" && (
        <motion.div
          variants={alertOverlayVarients}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute flex flex-col shadow-2xl justify-center items-center h-screen w-screen top-0 left-0 bg-black/60 backdrop-blur-md text-white"
        >
          <motion.div
            variants={alertBoxVarients}
            className="bg-stone-900  flex w-1/2 max-w-lg flex-col gap-2 p-4 rounded-lg border-2 border-stone-800"
          >
            <div className="p-4">
              <Content />
            </div>
            <button
              onClick={() => resetGame()}
              className="py-2 inline-flex items-center justify-center gap-2 font-medium text-md rounded-lg border-2 border-red-900 bg-red-900/50"
            >
              <ArrowPathIcon className="w-4 h-4 stroke-2" />
              Restart
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Alert;

function Content(): ReactElement | null {
  const gameStatus = useGameStore((state) => state.gameStatus);
  switch (gameStatus) {
    case "O Wins":
      return (
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-4 w-24 h-24 rounded-md bg-stone-800 border-2 border-stone-700">
            <Circle />
          </div>
          <p className="text-xl font-bold">Wins!</p>
        </div>
      );
    case "X wins":
      return (
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-4 w-24 h-24 rounded-md bg-stone-800 border-2 border-stone-700">
            <Cross />
          </div>
          <p className="text-xl font-bold">Wins!</p>
        </div>
      );
    case "Tie":
      return <div className="text-xl text-center font-bold">It's a tie!</div>;
    default:
      return null;
  }
}
