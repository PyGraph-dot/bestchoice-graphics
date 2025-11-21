"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
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
          Let&apos;s Work Together
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
          Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s create something amazing.
        </p>
      </motion.div>
    </section>
  )
}
