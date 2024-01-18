import Image from 'next/image'
import Link from 'next/link'
import { drSugiyama } from './ui/fonts';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow h-screen lg:flex-row items-center bg-light">
      <div className='flex flex-col flex-grow items-center justify-center'>
        <p className='text-4xl mt-10 md:text-5xl font-bold'>DINNE KOPELEVICH</p>
        <p className='text-3xl mb-12 md:text-4xl'>Sofware Developer</p>
      </div>
      <div className='flex flex-col flex-grow items-center justify-start lg:items-start'>
        <Link
          href={'/projects'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px]`}>Projects</div>
        </Link>
        <Link
          href={'/about'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px]`}>About</div>
        </Link>
        <Link
          href={'/contact'}
        >
          <div className={`${drSugiyama.className} text-8xl my-5 md:text-[150px]`}>Contact</div>
        </Link>
      </div>
    </main>
  )
}
