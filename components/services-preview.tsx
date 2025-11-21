"use client"

import { motion } from "framer-motion"
import { Palette, Type, Grid3x3, Lightbulb, Layers, Zap } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Distinctive brand marks that leave lasting impressions",
    },
    {
      icon: Type,
      title: "Typography",
      description: "Beautiful typography systems for every project",
    },
    {
      icon: Grid3x3,
      title: "Brand Identity",
      description: "Cohesive visual identity systems and guidelines",
    },
    {
      icon: Layers,
      title: "Flyer Design",
      description: "Eye-catching promotional materials",
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      description: "Strategic visual storytelling and concepts",
    },
    {
      icon: Zap,
      title: "Mockups & Presentation",
      description: "Professional mockups for client presentations",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">Services I Offer</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive design solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg bg-card border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <Icon size={24} className="text-secondary group-hover:text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
