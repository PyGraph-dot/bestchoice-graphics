"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  isLoaded: boolean
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 md:py-0 overflow-hidden"
      style={{
        backgroundImage: `url('/marketing-strategy-planning-strategy-concept.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/60 dark:bg-background/75 z-0" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <motion.div
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-accent/15 to-secondary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Logo/Branding */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-widest">
              Welcome to BestChoice Graphics
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-4 sm:mb-6 text-balance leading-tight"
        >
          Design{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Beyond Ordinary
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance px-2 sm:px-0"
        >
          Crafting exceptional visual identities and compelling designs that elevate your brand and captivate your
          audience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0"
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground rounded-md hover:bg-accent transition-all duration-300 font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 rounded-md transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-20 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-muted-foreground"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
