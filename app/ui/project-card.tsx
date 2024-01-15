'use client'

import React, { useState } from "react"
import { motion } from 'framer-motion'
import { drSugiyama } from "./fonts"

type Props = {
  image: string;
  title: string;
  text: string;
  github: string;
  deploy: string;
}

const ProjectCard = ({ image, title, text, github, deploy} : Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  function handleFlip() {
    if(!isAnimated) {
      setIsFlipped(!isFlipped)
      setIsAnimated(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[385.71px] h-[240px] rounded-md cursor-pointer">
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimated(false)}
        >
         <div
            style={{backgroundImage: `url(projectImages/${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn more ➟
          </div>
        </div> 
        <div
            style={{backgroundImage: `url(projectImages/${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                  <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-70 z-[-1]'/>
                    <div className='flex flex-col justify-items-startgap-20 py-3 z-[30]'>
                    <h1 className={`${drSugiyama.className} text-white text-2xl font-semibold`}>{title}</h1>
                    <a href={`${github}`} target="_blank">Github</a>
                    <a href={`${deploy}`} target="_blank">Deployed Site</a>
                    <p className='text-gray-200 text-[15px]'>
                        {text}
                    </p>
                  </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard