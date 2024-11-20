'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from 'lucide-react'

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

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative flex flex-col items-center justify-center">
      <StarryBackground />
      <div className="text-center z-10">
        <motion.h1 
          className="text-9xl font-bold text-[#DCB8B0] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! It seems you've ventured into uncharted space.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 text-[#DCB8B0] border border-[#DCB8B0] rounded-full hover:bg-[#DCB8B0] hover:text-[#13111C] transition-colors duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}