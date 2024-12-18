'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Music, Code, User } from 'lucide-react'
import { useDiscordStatus } from './useDiscordStatus'
import { TechStack } from './components/TechStack'


function formatElapsedTime(startTimestamp: number) {
  const now = Date.now()
  const elapsedMs = now - startTimestamp
  const hours = Math.floor(elapsedMs / (1000 * 60 * 60))
  const minutes = Math.floor((elapsedMs % (1000 * 60 * 60)) / (1000 * 60))
  return `${hours}h ${minutes}m`
}

function DiscordStatus({ status }: { status: any }) {
  const avatarUrl = `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`
  const customStatus = status.activities.find((activity: any) => activity.type === 4)
  const gameActivity = status.activities.find((activity: any) => activity.type === 0)
  const spotifyActivity = status.activities.find((activity: any) => activity.type === 2)

  return (
    <div className="bg-[#1A1721]/80 border border-white/10 rounded-lg overflow-hidden p-8 backdrop-blur-sm">
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src={avatarUrl}
          alt="Discord Avatar"
          width={80}
          height={80}
          className="rounded-full ring-2 ring-[#DCB8B0]/20"
        />
        <div>
          <h3 className="text-2xl font-bold text-[#DCB8B0]">{status.discord_user.global_name}</h3>
          <p className="text-lg text-[#D2D2D4] opacity-80">@{status.discord_user.username}</p>
        </div>
      </div>

      {customStatus && (
        <div className="flex items-center space-x-3 mb-3 text-[#D2D2D4]/80 hover:text-[#D2D2D4] transition-colors">
          <User className="w-5 h-5 text-[#DCB8B0]" />
          <p className="text-base">{customStatus.state}</p>
        </div>
      )}

      {gameActivity && (
        <div className="flex items-center space-x-3 mb-3 text-[#D2D2D4]/80 hover:text-[#D2D2D4] transition-colors">
          <Code className="w-5 h-5 text-[#DCB8B0]" />
          <p className="text-base">
            {gameActivity.name}: {gameActivity.details}
          </p>
          {gameActivity.timestamps && gameActivity.timestamps.start && (
            <span className="text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatElapsedTime(gameActivity.timestamps.start)}
            </span>
          )}
        </div>
      )}

      {spotifyActivity && (
        <div className="flex items-center space-x-3 text-[#D2D2D4]/80 hover:text-[#D2D2D4] transition-colors">
          <Music className="w-5 h-5 text-[#DCB8B0]" />
          <p className="text-base">
            Listening to {spotifyActivity.details} by {spotifyActivity.state}
          </p>
        </div>
      )}
    </div>
  )
}

export default function WhoPage() {
  const discordStatus = useDiscordStatus('721017166652244018')

  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <nav className="flex justify-between items-center mb-20">
          <Link 
            className="flex items-center space-x-3 text-[#DCB8B0] hover:text-[#D2D2D4] transition-all duration-200 ease-in-out hover:translate-x-[-4px] text-lg" 
            href="/"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="font-mono">back to home</span>
          </Link>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A1721]/80 border border-white/10 rounded-xl overflow-hidden p-10 backdrop-blur-sm"
        >
          <h1 className="text-5xl font-bold font-mono text-[#DCB8B0] mb-10">Who am I?</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#DCB8B0] mb-6">About Me</h2>
              <p className="text-lg text-[#D2D2D4]/90 mb-6 leading-relaxed">
                Hello! I&apos;m a 15 year old developer from the United Kingdom trying to become a Full Stack Developer.
              </p>
              <p className="text-lg text-[#D2D2D4]/90 mb-6 leading-relaxed">
                I specialize in Kotlin, React and JavaScript, and I&apos;m always eager to learn new technologies.
              </p>
              <p className="text-lg text-[#D2D2D4]/90 mb-6 leading-relaxed">
                When I&apos;m not coding, you can find me hiking, listening to music, or tinkering with my old tech.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#DCB8B0] mb-6">Discord Status</h2>
              {discordStatus ? (
                <DiscordStatus status={discordStatus} />
              ) : (
                <p className="text-lg text-[#D2D2D4]/90">Loading cat presence...</p>
              )}
            </div>
          </div>

          <TechStack />
        </motion.div>
      </div>
    </div>
  )
}