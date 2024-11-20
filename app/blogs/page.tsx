'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import { blogs } from '../data/blogs'
import BlogPreview from '../components/BlogPreview'

function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const numStars = 100

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1
      })
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#D2D2D4'
      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
      })
      requestAnimationFrame(drawStars)
    }

    drawStars()

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      stars.forEach(star => {
        const dx = clientX - star.x
        const dy = clientY - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          star.x -= dx * 0.01
          star.y -= dy * 0.01
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <StarryBackground />
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
            Thoughts, ideas, and explorations in the world of web development and beyond.
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