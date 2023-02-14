import { motion, Variants, AnimatePresence } from "framer-motion";

const iconVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.75,
  },
};

function Circle() {
  return (
    <motion.svg
      variants={iconVariants}
      width={48}
      height={48}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="stroke-emerald-500"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="12" strokeWidth="5" strokeLinecap="round" />
    </motion.svg>
  );
}

function Cross() {
  return (
    <motion.svg
      variants={iconVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      width={48}
      height={48}
      className="stroke-orange-500"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 27C21.9945 9.66961 26.7477 5.11234 27 5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M5 5C22.3304 21.9945 26.8877 26.7477 27 27"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default function Tile({
  value,
  index,
  handleMove,
}: {
  value: null | "X" | "O";
  index: number;
  handleMove: any;
}) {
  return (
    <motion.button
      disabled={value != null}
      onTap={() => handleMove(index)}
      onClick={() => handleMove(index)}
      className="bg-stone-700 hover:brightness-125 transition-all duration-500 w-20 h-20 rounded-lg flex p-4 justify-center items-center"
    >
      <AnimatePresence>
        {value === "O" ? <Circle /> : value === "X" ? <Cross /> : null}
      </AnimatePresence>
    </motion.button>
  );
}
