import React from 'react'
import Image from 'next/image'
import profilePic2 from './self2.png'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function About({}: Props) {
  return <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '> About</h3>
    
    <motion.img 
      initial={{ x: -200, }}
    transition={{ duration: 1.2, }}
    whileInView={{ x:0 }}
    viewport={{ once:true }}
    src={profilePic2.src} alt="Picture of Breanne"
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[400px] '
      />
      <div className='space-y-16 px-0 md:p-10'>
        <h4 className='text-md font-semibold'>I am currently working as a Tooling Design Engineer in the aerospace industry. I have recently completed a certificate in front end web development with the University of Washington. With my strong foundation in engineering principles and my newfound expertise in front end web development, I am now seeking a junior web developer position to launch my career in this exciting field.</h4>
        <h4 className='text-md font-semibold'>In this portfolio, you will find examples of my projects that demonstrate my proficiency in front end (and some back end) technologies, showcasing my ability to translate design concepts into fully functional and responsive websites. I am confident that my unique blend of mechanical engineering knowledge and web development skills will enable me to make valuable contributions to any development team.</h4>
      </div>
    </div>
  
}