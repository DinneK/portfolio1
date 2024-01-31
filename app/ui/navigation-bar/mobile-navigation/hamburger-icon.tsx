import { motion } from "framer-motion"

export default function HamburgerIcon() {
  return (
    <motion.div
      variants={{
        open: { rotate: 90 },
        closed: { rotate: 0}
      }}
      transition={{ duration: 0.2 }}
      style={{ originY: 0.55, zIndex: 25 }}
    >
      <svg width="40" height="40" viewBox="0 -960 960 960" className="dark:invert">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </motion.div>
  )
}