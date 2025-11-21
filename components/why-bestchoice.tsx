"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Sparkles } from "lucide-react"

export function WhyBestChoice() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Precision & Excellence",
      description: "Every detail crafted with meticulous attention and design expertise",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality and creativity",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision is our priority. We listen, understand, and deliver beyond expectations",
    },
    {
      icon: Award,
      title: "Professional Results",
      description: "Consistent high-quality output that elevates your brand",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">
            Why Choose BestChoice Graphics
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Dedicated to delivering exceptional design solutions that stand out
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon size={24} className="text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
