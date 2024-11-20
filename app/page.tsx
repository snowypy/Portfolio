'use client'

import { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Mail, Terminal, ExternalLink, Code, Cpu, ImageIcon } from 'lucide-react'
import Typewriter from 'typewriter-effect/dist/core'
import bannerImage from '../public/banner.png'
import taskify from '../public/taskify.png'
import superstudy from '../public/superstudy.png'
import bytestore from '../public/bytestore.png'
import portfolio from '../public/portfolio.png'

const projects = [
  {
    title: "Taskify",
    description: "A simple task manager built with vanilla JavaScript and CSS.",
    image: taskify,
    tags: ["Javascript", "CSS", "HTML"],
    sourceUrl: "https://github.com/snowypy/taskify",
    visitUrl: "https://taskify.snowyjs.lol"
  },
  {
    title: "SuperStudy",
    description: "A complex and reactive study system for students",
    image: superstudy,
    tags: ["React", "TailwindCSS", "Kotlin"],
    sourceUrl: "https://github.com/snowypy/SuperStudy",
    visitUrl: "https://superstudy.snowy.codes"
  },
  {
    title: "ByteStore",
    description: "A advanced and reliable Jitpack alternative",
    image: bytestore,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/snowypy/ByteStore-Frontend",
    visitUrl: "https://bytestore.snowy.codes"
  },
  {
    title: "This Site",
    description: "The source code for this website",
    image: portfolio,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/snowypy/portfolio",
    visitUrl: "#"
  }
]


function TypewriterEffect() {
  const typewriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
      })

      typewriter
        .typeString("Hey! I'm Snowy")
        .pauseFor(2000)
        .deleteChars(5)
        .typeString("SnowyJS")
        .pauseFor(2000)
        .deleteChars(7)
        .typeString("Cigan")
        .pauseFor(2000)
        .start()
    }
  }, [])

  return (
    <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]">
      <div ref={typewriterRef} aria-hidden="true" />
      <span className="sr-only">Hi, I'm snowy</span>
    </h1>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <Link className="flex items-center space-x-2 text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="#">
            <Terminal className="h-5 w-5" />
            <span className="font-mono">home</span>
          </Link>
        </nav>

        <div className="mb-16 rounded-lg overflow-hidden">
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              alt="banner"
              className="w-full h-[300px] object-cover"
              height={300}
              width={1200}
              src={bannerImage}
            />
          </motion.div>
        </div>

        <header className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <div className="space-y-4">
            <TypewriterEffect />
            <div className="flex justify-center space-x-4">
              <Link
                className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors flex items-center space-x-2"
                href="mailto:me@snowyjs.lol"
              >
                <Mail className="h-4 w-4" />
                <span>me@snowyjs.lol</span>
              </Link>
              <Link
                className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors flex items-center space-x-2"
                href="https://github.com/snowypy"
              >
                <Github className="h-4 w-4" />
                <span>@snowypy</span>
              </Link>
            </div>
          </div>
          <p className="text-[#D2D2D4] leading-relaxed">
            I&apos;m currently working on Java and Kotlin Development for both open source and closed source repositories.
            You can contact me via &apos;me@snowyjs.lol&apos; or via &apos;snowyjs&apos; on discord!
          </p>
          <div className="flex justify-center space-x-4">
            <Link className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="who">
              whoami
            </Link>
            <Link className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="blogs">
              blog
            </Link>
            <Link className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="projects">
              projects
            </Link>
          </div>
        </header>

        <section className="mt-16">
          <h2 className="text-xl text-[#DCB8B0] font-mono mb-8"><b>showcase</b></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
              
                whileHover={{ scale: 1.05}}
                transition={{ type: "", stiffness: 300, damping: 20 }}
                key={index}
              >
                
                <div 
                  key={index}
                  className="bg-[#1A1721]/80 border border-white/10 rounded-lg overflow-hidden"
                >
                  <Link href={`https://snowyjs.lol/project/${project.title}`}>
                    <div className="aspect-video relative cursor-pointer">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <h3 className="font-mono text-[#DCB8B0] text-lg mb-3 font-bold cursor-pointer"><Link href={`https://snowyjs.lol/project/${project.title}`}>{project.title}</Link></h3>
                    <p className="font-mono text-[#D2D2D4] text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1E1E1E] border border-[#333333] rounded text-xs font-mono text-[#D2D2D4]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D2D2D4]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 font-mono text-sm">
                      <Link 
                        href={project.sourceUrl}
                        className="inline-flex items-center text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        view source
                      </Link>
                      <Link 
                        href={project.visitUrl}
                        className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors"
                      >
                        visit
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="projects" 
              className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors font-mono text-sm"
            >
              see more projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}