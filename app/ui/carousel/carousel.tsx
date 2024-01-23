import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconGrid from "./icon-grid";
import { SkillsData } from "../../../data/tech-stack-data";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(SkillsData.length / 9))
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(SkillsData.length / 9)) % Math.ceil(SkillsData.length / 9))
  }

  return (
    <div className="flex">
      <button onClick={handlePrevious}>
      <Image
          src="arrows/arrow-back.svg"
          alt="Back arrow"
          width={30}
          height={30}
          className="dark:invert"
      />
      </button>

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

      <button onClick={handleNext}>
      <Image
          src="arrows/arrow-forward.svg"
          alt="Forward arrow"
          width={30}
          height={30}
          className="dark:invert"
      />
      </button>
    </div>
  )
}

export default Carousel