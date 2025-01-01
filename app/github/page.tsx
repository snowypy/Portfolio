'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Telescope, ArrowLeft, Calendar, Star } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Repo {
  id: number
  name: string
  description: string
  stargazers_count: number
  updated_at: string
  html_url: string
  topics: string[]
  homepage: string
}

type SortOption = 'updated' | 'stars' | 'name'

export default function GitHubPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<SortOption>('updated')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/snowypy/repos')
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Error fetching repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const sortedRepos = [...repos].sort((a, b) => {
    switch (sortBy) {
      case 'updated':
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      case 'stars':
        return b.stargazers_count - a.stargazers_count
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#13111C] flex items-center justify-center">
        <div className="animate-pulse text-[#D2D2D4] font-mono">Loading repositories...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <Link className="flex items-center space-x-2 text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">back to home</span>
          </Link>
          <Select defaultValue={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="w-[180px] bg-[#1A1721] border-white/10 text-[#D2D2D4] font-mono">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1721] border-white/10">
              <SelectItem value="updated">Last Updated</SelectItem>
              <SelectItem value="stars">Most Stars</SelectItem>
              <SelectItem value="name">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
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
              src="/banner.png"
            />
          </motion.div>
        </div>

        <header className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]">GitHub Repositories</h1>
          <p className="text-[#D2D2D4] leading-relaxed">
            A collection of my open source projects and contributions.
          </p>
        </header>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {sortedRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1
                }}
              >
                <div className="bg-[#1A1721] border border-[#4A4058] rounded-lg overflow-hidden h-full flex flex-col relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="font-mono text-[#DCB8B0] text-lg mb-2 font-bold">
                      {repo.name}
                    </h3>
                    <p className="font-mono text-[#D2D2D4] text-sm mb-4 flex-grow">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics?.map((topic, topicIndex) => (
                        <motion.span
                          key={topicIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: topicIndex * 0.1 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2A2438] border border-[#4A4058] rounded-full text-xs font-mono text-[#DCB8B0] shadow-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#DCB8B0]" />
                          {topic}
                        </motion.span>
                      ))}
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (repo.topics?.length || 0) * 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A2438] border border-[#4A4058] rounded-full text-xs font-mono text-[#DCB8B0] shadow-sm"
                      >
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (repo.topics?.length || 0) * 0.1 + 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A2438] border border-[#4A4058] rounded-full text-xs font-mono text-[#DCB8B0] shadow-sm"
                      >
                        <Calendar className="w-3 h-3" />
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </motion.span>
                    </div>
                    
                    <div className="flex items-center justify-between font-mono text-sm mt-4">
                      <motion.a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        view source
                      </motion.a>
                      {repo.homepage && (
                        <div className="button-container flex justify-end">
                          <motion.a 
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors visit-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Telescope className="w-4 h-4 mr-2" />
                            visit
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

