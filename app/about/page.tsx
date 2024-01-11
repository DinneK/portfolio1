'use client'
// import Image from "next/image"
import { drSugiyama } from "../ui/fonts"
// import { SkillsData } from "../../data/tech-stack-data"
import Carousel from "../ui/carousel/carousel"

export default function Page() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-light">
      <div className="flex flex-grow flex-col">
        <div><img className="w-[300px] h-[300px] rounded-lg" src="/selfie.jpg" alt="A picture of me" /></div>
        <h2>Opening Line</h2>
        <h3>Some other amazing things about me</h3>
        <h3>CV</h3>
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className={`${drSugiyama.className} text-[50px]`}>Tech Stack & Tools</h1>
        <div>
          <Carousel />
        </div>
        {/* <div className='grid grid-cols-5 gap-5 max-w-[90%] max-h-[90%]'>
        {SkillsData.map((skill, index) => 
          <Image
            key={index}
            src={`/skill-images${skill.Image}`}
            alt={skill.name}
            width={skill.width}
            height={skill.height}
          />
        )}
        </div> */}
      </div>
    </main>
  )
}