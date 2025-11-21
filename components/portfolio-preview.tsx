"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import projects from "@/data/projects.json"

export function PortfolioPreview() {
  const featured = projects.projects.slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-3 sm:mb-4">
          Featured Work
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          A selection of recent projects showcasing design excellence
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featured.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="group cursor-pointer" whileHover={{ y: -5 }}>
            <div className="relative overflow-hidden rounded-lg bg-card border border-border aspect-square mb-3 sm:mb-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-semibold">{project.category}</p>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/portfolio"
          className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 border border-secondary text-secondary hover:bg-secondary/10 rounded-md transition-all font-semibold text-sm sm:text-base"
        >
          View All Projects
        </Link>
      </motion.div>
    </div>
  )
}
