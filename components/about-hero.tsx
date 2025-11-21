"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/modern-design-studio-workspace-with-graphics-and-c.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 text-balance">
          About Me
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
          Discover the vision and passion behind BestChoice Graphics, where creativity meets strategy to create designs
          that matter.
        </p>
      </motion.div>
    </section>
  )
}
