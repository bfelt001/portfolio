import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head"
import type { NextPage } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z=0'>
      <Head>
        <title>Breanne's Portfolio</title>
      </Head>
      {/* Header */}
      <h1 className='p-10 text-purple-500'>From Mechanical Engineer to Web Developer</h1>
    
    {/* Header */}
    <Header />

    {/* Hero */}
    <section id="hero" className='snap-start'>
      <Hero />

    </section>

    {/* About */}
    <section id="about" className='snap-center' >
      <About />
      </section>

    {/* Projects */}
    <section id="projects" className='snap-center' >
      <Projects />
      </section>

    {/* Experience */}
    <section id="experience" className='snap-center' >
      <Experience />
      </section>

    {/* Skills */}
    <section id="skills" className='snap-start' >
      <Skills />
      </section>

    {/* Contact Me */}
    <section id="contact" className='snap-start' >
      <ContactMe />
      </section>

    </div>
  )
}
