"use client"

import { motion } from "framer-motion"
import { Palette, Layers, Type, Grid3X3, Sparkles } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique, memorable logos that capture the essence of your brand and stand out in the market.",
    mockup: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Comprehensive branding systems including color palettes, typography, and visual guidelines.",
    mockup: "/Brand Visual Guide 2.png",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Strategic typography design that enhances readability and reinforces brand personality.",
    mockup: "/Tyo.png",
  },
  {
    icon: Grid3X3,
    title: "Flyer Design",
    description: "Eye-catching flyers and promotional materials that engage and convert your audience.",
    mockup: "/3.png",
  },
  {
    icon: Layers,
    title: "Mockups & Presentations",
    description: "3D mockups and professional presentations that showcase your designs in context.",
    mockup: "/mockup.png",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Strategic brand consulting to ensure your visual identity aligns with business goals.",
    mockup: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
]

export function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-2 sm:mb-4">Services I Offer</h2>
          <p className="text-muted-foreground text-xs sm:text-base md:text-lg">
            Comprehensive design solutions tailored to your brand needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-6"
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
                whileHover={{ y: -4 }}
                className="p-3 sm:p-4 md:p-6 bg-background border border-border rounded-lg hover:border-secondary transition-all group cursor-pointer overflow-hidden"
              >
                <div className="relative w-full aspect-square rounded-md mb-3 overflow-hidden bg-muted mb-3 sm:mb-4">
                  <Image
                    src={service.mockup || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Icon className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
