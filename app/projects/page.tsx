// import Image from 'next/image'
// import Link from 'next/link'
// import { drSugiyama } from '../ui/fonts'
import ProjectCard from '../ui/project-card'
import { Projects } from '../../data/project-data'
// import React from 'react'

export default function Page() {
  return (
    // <main className="flex flex-grow items-center p-6 h-screen bg-light">
    <main className="flex flex-grow flex-col md:h-screen lg:flex-row items-center p-6 h-full bg-light dark:bg-dark dark:text-white">
      <div className='flex flex-col flex-grow items-center md:items-start md:basis-1/3'>
        <p className='text-4xl mt-10 md:text-5xl md:mb-4 font-bold'>PROJECTS</p>
        <p className='text-1xl mb-6 md:text-2xl md:mr-8'>Explore my portfolio, a fusion of creativity and expertise, highlighting my proficiency in web development and design. Experience innovation in every project, meticulously crafted with a passion for web development.</p>
      </div>
      {/* <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'> */}
      <div className='grid grid-cols-1 md:basis-2/3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-[100%] max-h-[90%]'>
        {Projects.map((project, index) => 
          <ProjectCard
            key={index}
            title={project.title}
            github={project.github}
            deploy={project.deploy}
            text={project.text}
            image={project.src}
          />
        )}
      </div>
    </main>
  )
}