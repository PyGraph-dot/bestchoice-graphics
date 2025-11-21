"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import projects from "@/data/projects.json"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", ...new Set(projects.projects.map((p) => p.category))]

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects.projects
    return projects.projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <PortfolioHero />

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                variants={itemVariants}
                className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 overflow-hidden group ${
                  activeFilter === category
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-secondary/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeFilter === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <PortfolioGallery projects={filteredProjects} />
      <Footer />
    </main>
  )
}
