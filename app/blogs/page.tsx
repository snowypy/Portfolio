'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import { blogs } from '../data/blogs'
import BlogPreview from '../components/BlogPreview'


export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <Link className="flex items-center space-x-2 text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">back to home</span>
          </Link>
        </nav>

        <header className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]">My Blog</h1>
          <p className="text-[#D2D2D4] leading-relaxed">
            My thoughts, ideas and actions. All for you to read!
          </p>
        </header>

        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
              >
                <BlogPreview blog={blog} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}