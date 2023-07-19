import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
   
      <div className='h-screen relative flex overflow-hidden flex-row flex-nowrap text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='w-full absolute top-[30%] bg-[#8E24AA]/10 left-0 h-[500px]' />
    
      {/* Grid starts here */}
      
      <div className='w-full flex space-x-5 overflow-x-scroll'>
     
          {/* import card componenet */}
         <ProjectCard />
        </div>
      </div>
     

   
)}