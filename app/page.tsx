import Image from 'next/image'
import Link from 'next/link'
import { drSugiyama } from './ui/fonts';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow lg:flex-row items-center bg-light">
      <div className='flex flex-col flex-grow items-center justify-center'>
        <h2 className='text-4xl md:text-5xl font-bold'>DINNE KOPELEVICH</h2>
        <h3 className='my-1 text-3xl md:text-4xl'>Sofware Developer</h3>
      </div>
      <div className='flex flex-col flex-grow items-center justify-start lg:items-start'>
        <Link
          href={'/projects'}
        >
          <div className={`${drSugiyama.className} my-1 text-8xl md:text-[150px]`}>Projects</div>
        </Link>
        <Link
          href={'/about'}
        >
          <div className={`${drSugiyama.className} my-1 text-8xl md:text-[150px]`}>About</div>
        </Link>
        <Link
          href={'/contact'}
        >
          <div className={`${drSugiyama.className} my-1 text-8xl md:text-[150px]`}>Contact</div>
        </Link>
      </div>
    </main>
  )
}
