import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconGrid from "./icon-grid";
import { SkillsData } from "../../../data/tech-stack-data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(SkillsData.length / 9))
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(SkillsData.length / 9)) % Math.ceil(SkillsData.length / 9))
  }

  return (
    <div>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconGrid startIndex={currentIndex * 9} />
        </motion.div>
      </AnimatePresence>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Carousel