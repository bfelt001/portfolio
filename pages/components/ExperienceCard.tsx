import React from 'react'

export default function ExperienceCard() {
  const jobs = [
    {
        title: "Tooling Design Engineer",
        company: "The Boeing Company",
        date: "2020-present",
        tasks1: "-Use CAD program to create designs that fulfill the customers' requirements",
        tasks2: "-Follow GD&T standards when creating drawings",
        tasks3: "-Employ industry-standard mechanical design principles"
    },
    {
      title: "Mass Properties Engineer",
      company: "The Boeing Company",
      date: "2014-2020",
      tasks1: "-Use CAD program to analyze and organize model data",
      tasks2: "-Track and maintain all mass properties information in proprietary database and present findings and status",
      tasks3: "-Participate in developing and implementing new processes and tools."
  }
  ];
  return (
    <div className='flex justify-center origin-center mt-20'>
    <article className='flex flex-row mt-10 mr-auto content-center origin-center items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] hover:opacity-100 opacity-70 transition-opacity duration-200 overflow-hidden'>
    <div className='flex flex-col justify-start' >
                {jobs.map((items, key) => (
                    <div className="  shadow-md lg:max-w-sm" key={key}>
                        <h4 className="text-3xl font-bold  text-[#8E24AA]">
                                
                                {items.title}
                            </h4>
                            <h4 className='text-2xl mt-1'>
                                
                                {items.company}
                            </h4>
                            <h4 className='text-xl mt-1'>
                            {items.date}
                            </h4>
                      
                        <ul className='upercase py-5 text-gray-300'>
                        
                                
                            
                            <li className="leading-normal text-gray-300">
                            {items.tasks1}
                            </li>
                            <li className="leading-normal text-gray-300">
                            {items.tasks2}
                            </li>
                            <li className="leading-normal text-gray-300">
                            {items.tasks3}
                            </li>
                           </ul>
                        
                    </div>
                ))}
            </div>
        
        
        
        </article>


        
    
    </div>
  )
}