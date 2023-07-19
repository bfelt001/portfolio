import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Typography, Button, IconButton} from "@material-tailwind/react";
 


type Props = {};
  
export default function Header({}: Props) {


    return (
    <header className='sticky top-0 p-5 flex flex-row flex-wrap items-start justify-between content-between max-w-7xl mx-auto z-20 xl:items-center sm:flex-row'>
        <motion.div initial={{x:-500, opacity: 0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{ duration: 2 }}
        className="flex flex-row content-between justify-between ">

        <Typography
          as="a"
          href="/"
          className=" flex cursor-pointer py-3 pr-4 font-bold text-gray-500"
        >
          BJF
        </Typography>

            {/*Social links */}
            <SocialIcon className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all'url="https://www.linkedin.com/in/breanne-felton-66ab7042/" fgColor="#8E24AA" bgColor="transparent" />
            <SocialIcon className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all' url="https://github.com/bfelt001/" fgColor="#8E24AA" bgColor="transparent" />
            <SocialIcon className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all' url="mailto:breanne.felton@gmail.com" network='email' fgColor="#8E24AA" bgColor="transparent" />
            
            
        </motion.div>

        <motion.div className='flex flex-row flex-wrap' initial={{x:500, opacity: 0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{ duration: 2 }}>
        <Link href="/about" className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all sm:hidden'>About
            </Link>

            <Link href="/projects" className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all sm:hidden'>Projects
            </Link>

            <Link href="/experience" className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all sm:hidden'>Experience
            </Link>

            <Link href="/skills" className='p-5 md:inline-flex uppercase text-xs tracking-widest transition-all sm:hidden'>Skills
            </Link>


        </motion.div>
    </header> 
  )
}

