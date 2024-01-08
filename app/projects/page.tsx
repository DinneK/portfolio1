import Image from 'next/image'
import Link from 'next/link'
import { drSugiyama } from '../ui/fonts'

export default function Page() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-gradient-to-b from-fuchsia-300 to-black h-screen">
      <div className='flex flex-col flex-grow items-center'>
        <h2 className='text-[40px] text-white'>PROJECTS</h2>
        <h3 className='text-[30px] text-white text-wrap'>Some fascinating things about my work and projects</h3>
      </div>
      <div className='flex-grow grid grid-rows-4 grid-flow-col gap-20'>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
        <div className='size-36 border-red-400 border-solid border-2'>
          <h1 className='text-white'>Projects</h1>
        </div>
      </div>
    </main>
  )
}