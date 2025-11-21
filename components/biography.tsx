"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Biography() {
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
    <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Profile picture removed */}
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold font-serif mb-1 sm:mb-2">
            Oluwagbeniyi Joseph Adedeji
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-secondary font-semibold">
            Creative Director & Brand Designer
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: "✓", title: "Precision", subtitle: "Every detail matters" },
            { icon: "◆", title: "Sophistication", subtitle: "Less clutter, more impact" },
            { icon: "★", title: "Trust", subtitle: "Professional consistency" },
            { icon: "✨", title: "Creativity", subtitle: "Aesthetic that inspires" },
          ].map((principle) => (
            <motion.div
              key={principle.title}
              whileHover={{ y: -2 }}
              className="p-2 sm:p-3 md:p-4 bg-secondary/5 border border-secondary/20 rounded-lg text-center hover:border-secondary/40 transition-colors"
            >
              <div className="text-xl sm:text-2xl md:text-3xl mb-1.5 sm:mb-2">{principle.icon}</div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-secondary mb-0.5 sm:mb-1">
                {principle.title}
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">{principle.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-2 sm:space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
            With over 8 years of experience in visual design and brand strategy, I&apos;ve dedicated my career to
            creating impactful designs that transform businesses. My journey began with a passion for typography and has
            evolved into a comprehensive approach to brand identity that prioritizes precision, sophistication, and
            trust.
          </p>

          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
            I believe that exceptional design is the intersection of aesthetics and functionality. Every project is an
            opportunity to tell a compelling story and create meaningful connections between brands and their audiences.
            At BestChoice Graphics, my philosophy is simple: design beyond ordinary.
          </p>

          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
            When I&apos;m not designing, you&apos;ll find me exploring emerging design trends, mentoring aspiring
            designers, or engaging with the creative community. I&apos;m passionate about collaborating on projects that
            push creative boundaries and deliver visual solutions that resonate.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
