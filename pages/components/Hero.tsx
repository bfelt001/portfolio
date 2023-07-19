import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image';
import profilePic from './self1.jpeg';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Breanne Felton.",
"lovesToEat",
"lovesToTravel",
"mechEngrToWebDev"],
loop: true,
delaySpeed: 1000,
  })
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
       
        <Image className='relative rounded-full h-32 w-auto mx-auto object-cover' src={profilePic} alt="Picture of Breanne" />
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Web Developer
            </h2>
        <span className='flex justify-center content-center'>{text}
        <Cursor cursorColor="purple" />
        </span>
        <div className='pt-5'>
            <Link href="#about" >
             <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest transition-all hover:border-[#9F33FF/40] hover:text[#C53CF8/40]'>About</button>
            </Link>

            <Link href="#projects">
              <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest transition-all hover:border-[#9F33FF/40] hover:text[#C53CF8/40]'>Projects</button>
            </Link>

            <Link href="#skills">
              <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest transition-all hover:border-[#9F33FF/40] hover:text[#C53CF8/40]'>Skills</button>
            </Link>

            <Link href="#experience">
              <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest transition-all hover:border-[#9F33FF/40] hover:text[#C53CF8/40]'>Experience</button>
            </Link>
        </div>
        </div>
    </div>
  )
}
