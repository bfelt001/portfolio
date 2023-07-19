import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-row ml-10 md:flex-row max-w-full justify-center items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '> 
        Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll'>
            {/* card */}
            <ExperienceCard />
    

        </div>
        </div>
  )
}