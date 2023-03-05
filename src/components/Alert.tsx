import { createPortal } from "react-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useGameStore from "../gameStore";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Cross from "./Cross";
import Circle from "./Circle";

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
            <div className="flex flex-col justify-center items-center">
              <div className="w-24 h-24 bg-stone-900 p-4">
                {gameStatus === "X wins" && <Cross />}
                {gameStatus === "O Wins" && <Circle />}
              </div>
              <p>Wins</p>
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
