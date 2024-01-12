// import Image from 'next/image'
// import Link from 'next/link'
// import { drSugiyama } from '../ui/fonts'
import ProjectCard from '../ui/project-card'
import { Projects } from '../../data/project-data'
// import React from 'react'


export default function Page() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-light">
      <div className='flex flex-col flex-grow items-center'>
        <h2 className='text-[40px] text-black'>PROJECTS</h2>
        <h3 className='text-[30px] text-black text-wrap'>Some fascinating things about my work and projects</h3>
      </div>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => 
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        )}
      </div>
    </main>
  )
}