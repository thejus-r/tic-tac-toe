import { motion, AnimatePresence } from "framer-motion";
export default function Cross() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="stroke-green-500"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect />
      <path
        d="M5 27C21.9945 9.66961 26.7477 5.11234 27 5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 5C22.3304 21.9945 26.8877 26.7477 27 27"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
