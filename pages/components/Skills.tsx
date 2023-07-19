import React from "react";
import Image from 'next/image';

export default function Skills() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        This is a list of skills I have practiced so far.
      </h3>
      <h5 className="absolute top-44 uppercase tracking-[2px] text-gray-500 text-xs">always evolving</h5>
      <div className="group relative flex flex-row flex-wrap justify-center p-5">
      <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt="Javascript badge"  />
      <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt="Css badge"  />
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML badge" />
	    <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt="React badge"  />
      <img src='https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D' alt="Vue badge" />
      <img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' alt="Tailwind badge"  />
      <img src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' alt="Bootstrap badge"  />
      <img src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' alt="MongoDB badge" />
      <img src='https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' alt="Netlify badge"  />
      <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' alt="Express.js badge"  />
      <img src='https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white' alt="Git badge" />
      <img src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white' alt="Python badge" />
     
      {/*<img src='' alt=" badge" width={100} height={100} />*/}
      </div>
    </div>
  );
}
