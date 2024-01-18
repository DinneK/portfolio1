'use client'
// import Image from "next/image"
import { drSugiyama } from "../ui/fonts"
// import { SkillsData } from "../../data/tech-stack-data"
import Carousel from "../ui/carousel/carousel"
// import Link from "next/link"

export default function Page() {
  return (
    // <main className="flex flex-grow items-center p-6 h-screen bg-light">
    <main className="flex flex-grow flex-col md:flex-row items-center p-6 bg-light">
      <div className="flex flex-grow md:w-3/5 flex-col">
        <p className='text-4xl mt-4 mb-6 md:text-5xl font-bold'>ABOUT</p>
        <div><img className="w-[300px] h-[300px] rounded-lg" src="/selfie.jpg" alt="A picture of me" /></div>
        <p className="text-3xl my-6 md:text-4xl">Creative coder with diverse experience and a passion for seamless user experiences.</p>
        
        <p className="text-1xl my-3 md:text-2xl md:mr-8">I am an experienced software developer with a passion for creating intuitive and user-friendly applications. With a background in diverse industries, including commercial production, event production, teaching dance, and bartending, I have gained valuable experience in project management, team collaboration, and problem-solving.</p>
        
        <p className="text-1xl my-3 md:text-2xl md:mr-8">As a software developer, I have a keen eye for UX/UI design and have developed the ability to create applications that are both aesthetically pleasing and easy to use. My diverse skill set and experience working on various teams have given them a unique perspective on software development, and I am adept at identifying and resolving complex problems in my work.</p>
        
        <p className="text-1xl my-3 md:text-2xl md:mr-8">In addition to my technical skills, I am a creative thinker and enjoy taking on new challenges. I am constantly seeking to learn and grow, and am always looking for ways to improve my skills and contribute to the success of a team. With my experience, skills, and passion for software development, I will be a valuable asset to your organization.</p>
        
        <a className="w-1/4 text-center text-gray-900 bg-white border shadow-md focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  href='/cv.pdf' target="_blank"  rel="noopener noreferrer">
          CV
        </a>
      </div>
      <div className="flex flex-grow flex-col md:w-2/5 md:ml-20">
        <p className={`${drSugiyama.className} text-[50px] mt-6`}>Tech Stack & Tools</p>
        <div className="mb-10">
          <Carousel />
        </div>
      </div>
    </main>
  )
}