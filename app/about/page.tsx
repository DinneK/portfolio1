'use client'
// import Image from "next/image"
import { drSugiyama } from "../ui/fonts"
// import { SkillsData } from "../../data/tech-stack-data"
import Carousel from "../ui/carousel/carousel"

export default function Page() {
  return (
    // <main className="flex flex-grow items-center p-6 h-screen bg-light">
    <main className="flex flex-grow flex-col lg:flex-row items-center p-6 h-screen bg-light">
      <div className="flex flex-grow flex-col">
        <p className='text-4xl mt-10 md:text-5xl font-bold'>ABOUT</p>
        <div><img className="w-[300px] h-[300px] rounded-lg" src="/selfie.jpg" alt="A picture of me" /></div>
        <p>Opening Line</p>
        <p className="text-1xl mb-6 md:text-2xl md:mr-8">Some other amazing things about me</p>
        <h3>CV</h3>
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className={`${drSugiyama.className} text-[50px]`}>Tech Stack & Tools</h1>
        <div>
          <Carousel />
        </div>
      </div>
    </main>
  )
}