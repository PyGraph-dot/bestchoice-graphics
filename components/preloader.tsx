"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        {/* Animated "B" logo */}
        <motion.div
          className="inline-flex items-center justify-center mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="text-5xl font-bold font-serif text-secondary">B</div>
        </motion.div>

        {/* Brand name animation */}
        <motion.h1
          className="text-2xl font-bold font-serif text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          BestChoice Graphics
        </motion.h1>

        {/* Loading indicator */}
        <motion.div
          className="mt-4 flex gap-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{ y: [-5, 0, -5] }}
              transition={{ delay: i * 0.1, duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
