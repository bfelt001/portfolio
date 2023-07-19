import React from "react";
import Link from "next/link";
import Image from 'next/image'
import quotesApp from './quotesApp.jpeg'
import adoptDog from './adoptDog.jpeg'
import movieSite from './movieSite.jpeg'

export default function ProjectCard() {
    const projects = [
        {
            title: "React Tailwind Card with Grid 1",
            img: movieSite,
            content: "Javascript, Nuxt, Vue, Bootstrap, Flexbox, Grid, API",
            site: "https://stellar-alpaca-c91071.netlify.app"
        },
        {
            title: "Frontend Dog Adoption Website",
            img: adoptDog,
            content: "Javascript, CSS, HTML",
            site: "https://bfelt001.github.io/html200-adopt-a-dog/"
        },
        {
            title: "API Random Quote App",
            img: quotesApp,
            content: "",
            site: "https://bright-shortbread-649db9.netlify.app"
        },
        
    ];
    return (
        
         <article className='flex flex-col flex-wrap rounded-lg items-center mt-24 flex-shrink-0 snap-center bg-[#0c0b0b] p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        
            <div className="grid grid-flow-col gap-8 px-12  sm:px-0">
                {projects.map((items, key) => (
                    <div className=" rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <Image className="object-cover w-auto h-48"
                            
                            src={items.img}
                            width= {500}
                            height={300}
                            alt='image'
                        />
                        <div className="">
                            <h4 className="text-xl font-semibold  text-[#8E24AA]">
                                
                                {items.title}
                            </h4>
                            <p className="leading-normal text-gray-300">
                            {items.content}
                            </p>
                            <Link href={items.site} className=" text-sm  bg-[#8E24AA] rounded shadow ">
                                Go to site
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}