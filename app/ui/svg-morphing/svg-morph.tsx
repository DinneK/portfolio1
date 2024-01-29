'use client';
import { interpolate } from 'flubber';
import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'

type pathProps = {
  paths: string[]
}

export default function SVGMorph({paths} : pathProps) {
  const [pathIndex, setPathIndex] = useState(0)
  const progress = useMotionValue(pathIndex)
  // const progress = useMotionValue(0)

  const arrayOfIndex = paths.map((_ : any, i : number) => i)
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a: string, b: string) => interpolate(a, b, {maxSegmentLength: 1})
  })

  // const path = useTransform(progress, [0, 1], paths, {
  //   mixer: (a: string, b: string) => interpolate(a, b, { maxSegmentLength: 1 })
  // })

  useEffect(() => {
    console.log({path})
    const animation = animate(progress, pathIndex, {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.5,
      onComplete: () => {
        if(pathIndex === paths.length -2) {
          progress.set(0)
          setPathIndex(1)
        } else {
          setPathIndex(pathIndex + 1)
        }
      }
    })

    return () => {animation.stop()}
  }, [pathIndex])

  return (
    <motion.path d={path} width={40} height={40}/>
  )
}

// function interpolate(a: unknown, b: unknown, arg2: { maxSegmentLength: number; }): (v: number) => any {
//   throw new Error('Function not implemented.');
// }
