'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from 'lucide-react'


export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative flex flex-col items-center justify-center">
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