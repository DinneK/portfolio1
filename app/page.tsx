'use client'
import Link from 'next/link'
import { drSugiyama } from './ui/fonts';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className='h-full w-full'
      initial={{ y: "-200hv" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <main className="flex flex-col flex-grow h-screen lg:flex-row items-center bg-light dark:bg-dark">
      <div className='flex flex-col flex-grow items-center justify-center dark:text-white'>
        <p className='text-4xl mt-10 md:text-5xl font-bold'>DINNE KOPELEVICH</p>
        <p className='text-3xl mb-12 md:text-4xl'>Sofware Developer</p>
      </div>
      <div className='flex flex-col flex-grow items-center justify-start lg:items-start dark:text-white'>
        <Link
          href={'/projects'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px] hover:italic`}>Projects</div>
        </Link>
        <Link
          href={'/about'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px] hover:italic`}>About</div>
        </Link>
        <Link
          href={'/contact'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px] hover:italic`}>Contact</div>
        </Link>
      </div>
    </main>
    </motion.div>
  )
}
