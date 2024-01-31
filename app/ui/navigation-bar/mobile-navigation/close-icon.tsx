import { motion } from "framer-motion";

export default function CloseIcon() {
  return (
    <motion.div
      variants={{
        open: { rotate: 90 },
        closed: { rotate: 0 },
      }}
      transition={{ duration: 0.2 }}
      style={{ originY: 0.55 }}
    >
      <svg width="40" height="40" viewBox="0 -960 960 960" className="dark:invert">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
      </svg>
    </motion.div>
  )
};