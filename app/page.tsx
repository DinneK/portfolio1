import Image from 'next/image'
import Link from 'next/link'
import { drSugiyama } from './ui/fonts';

export default function Home() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-gradient-to-b from-fuchsia-300 to-white h-screen">
      <div className='flex flex-col flex-grow items-center'>
        <h2 className='text-[60px]'>DINNE KOPELEVICH</h2>
        <h3 className='text-[55px]'>Sofware Developer</h3>
      </div>
      <div className='flex flex-col flex-grow items-start'>
        <Link
          href={'/projects'}
        >
          <div className={`${drSugiyama.className} text-[150px] text-black-800`}>Projects</div>
        </Link>
        <Link
          href={'/about'}
        >
          <div className={`${drSugiyama.className} text-[150px] text-black-800`}>About</div>
        </Link>
        <Link
          href={'/contact'}
        >
          <div className={`${drSugiyama.className} text-[150px] text-black-800`}>Contact</div>
        </Link>
      </div>
    </main>
  )
}
