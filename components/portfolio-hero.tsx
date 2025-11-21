"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background showcase image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
          alt="Portfolio background"
          fill
          className="object-cover opacity-15"
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <motion.div
          className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
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
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-balance">Portfolio</h1>
        <p className="text-xl text-muted-foreground">
          Explore my latest design work across multiple categories and disciplines
        </p>
      </motion.div>
    </section>
  )
}
