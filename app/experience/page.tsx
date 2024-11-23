'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Tilt from 'react-parallax-tilt'
import minecrush from '../../public/minecrush.png'
import akrylic from '../../public/akrylic.jpg'  
import feather from '../../public/feather.png'
import dupecrush from '../../public/dupecrush.png'
import hardcore from '../../public/hardcore.png'
import me from '../../public/me.jpg'

const workExperiences = [
  {
    title: "Staff Member", 
    company: "Feather Client",
    period: "October 2024 - Present",
    description: "Handling user support requests and troubleshooting issues.",
    image: feather
  },
  {
    title: "Backend Developer",
    company: "Akrylic Entertainment",
    period: "October 2024 - Present",
    description: "Creating intuitive systems for Clients.",
    image: akrylic
  },
  {
   title: "Backend Developer",
   company: "Hardcore.rip",
   period: "March 2024 - Present", 
   description: "Developed custom plugins and features for a Minecraft server.",
   image: hardcore
  },
  {
    title: "Systems Engineer",
    company: "MineCrush",
    period: "March 2024 - November 2024",
    description: "Developed numerous security systems to protect against foul play.",
    image: minecrush
  },
  {
    title: "Chief Executive Officer", 
    company: "DupeCrush",
    period: "September 2023 - February 2024",
    description: "Created custom game mechanics and systems for a Minecraft server.",
    image: dupecrush
  }
]

const educationExperiences = [
  {
    degree: "Secondary School",
    institution: "Institution Hidden",
    period: "2019 - Present",
    description: "Currently studying towards GCSEs, with a focus on Maths, Design and Computing.",
    image: me
  }
]

export default function ExperiencePage() {
  const [currentSection, setCurrentSection] = useState<'work' | 'education'>('work')
  const [showAllWork, setShowAllWork] = useState(false)
  const [showAllEducation, setShowAllEducation] = useState(false)

  const toggleSection = () => {
    setCurrentSection(prev => prev === 'work' ? 'education' : 'work')
    setShowAllWork(false)
    setShowAllEducation(false)
  }

  const toggleShowMore = (section: 'work' | 'education') => {
    if (section === 'work') {
      setShowAllWork(prev => !prev)
    } else {
      setShowAllEducation(prev => !prev)
    }
  }

  const renderExperienceItem = (item: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      layout
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        transitionSpeed={2000}
        className="w-full"
      >
        <Card className="bg-[#1A1721]/80 border-white/10 mb-4 transform-gpu">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={`${item.company || item.institution} logo`}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#DCB8B0] mb-2">{item.title || item.degree}</h3>
                <p className="text-[#D2D2D4] mb-2">{item.company || item.institution}</p>
                <p className="text-sm text-[#D2D2D4] mb-4">{item.period}</p>
                <p className="text-[#D2D2D4]">{item.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Tilt>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <Link className="flex items-center space-x-2 text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">back to home</span>
          </Link>
        </nav>

        <header className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]">Work & Education</h1>
          <p className="text-[#D2D2D4] leading-relaxed">
            Here are some of the experiences that have shaped my personal growth.
          </p>
        </header>

        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            onClick={toggleSection}
            className="text-[#DCB8B0] border border-[#DCB8B0] bg-[#1A1721] hover:text-[#13111C] hover:bg-[#DCB8B0] transition-colors"
          >
            {currentSection === 'work' ? (
              <>
                <GraduationCap className="mr-2 h-4 w-4" />
                Switch to Education
              </>
            ) : (
              <>
                <Briefcase className="mr-2 h-4 w-4" />
                Switch to Experience
              </>
            )}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold font-mono text-[#DCB8B0] mb-6 flex items-center">
              {currentSection === 'work' ? (
                <>
                  <Briefcase className="mr-2" /> Experience
                </>
              ) : (
                <>
                  <GraduationCap className="mr-2" /> Education
                </>
              )}
            </h2>
            {currentSection === 'work' ? (
              <>
                <motion.div layout>
                  {workExperiences.slice(0, showAllWork ? undefined : 3).map(renderExperienceItem)}
                </motion.div>
                {workExperiences.length > 3 && (
                  <Button
                    variant="outline"
                    onClick={() => toggleShowMore('work')}
                    className="w-full mt-4 text-[#DCB8B0] border border-[#DCB8B0] bg-[#1A1721] hover:text-[#13111C] hover:bg-[#DCB8B0] transition-colors"
                  >
                    {showAllWork ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Show More
                      </>
                    )}
                  </Button>
                )}
              </>
            ) : (
              <>
                <motion.div layout>
                  {educationExperiences.slice(0, showAllEducation ? undefined : 3).map(renderExperienceItem)}
                </motion.div>
                {educationExperiences.length > 3 && (
                  <Button
                    variant="outline"
                    onClick={() => toggleShowMore('education')}
                    className="w-full mt-4 text-[#DCB8B0] border border-[#DCB8B0] bg-[#1A1721] hover:text-[#13111C] hover:bg-[#DCB8B0] transition-colors"
                  >
                    {showAllEducation ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Show More
                      </>
                    )}
                  </Button>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}