import { motion } from "framer-motion";

export default function Circle() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="stroke-orange-500"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="12" strokeWidth="3" />
    </motion.svg>
  );
}
