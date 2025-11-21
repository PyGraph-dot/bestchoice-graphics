"use client"

import { motion } from "framer-motion"
import { Check, Lightbulb, Pencil, Zap, BarChart3, Share2, Award } from "lucide-react"

export function DesignProcess() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description:
        "Conduct a comprehensive design brief session to identify core message, target audience, and visual tone. Analyze competitors and opportunities for differentiation.",
      icon: Lightbulb,
      deliverable: "Visual Strategy Blueprint",
      color: "from-secondary to-secondary/60",
    },
    {
      step: 2,
      title: "Concept Development",
      subtitle: "Bold Creative Directions",
      description:
        "Create 2-3 refined concept sketches exploring logo variations, typography, and color interplay. Present digitally using clean mockups ensuring emotional and utilitarian alignment.",
      icon: Pencil,
      deliverable: "Concept Presentation Board",
      color: "from-secondary/80 to-secondary/40",
    },
    {
      step: 3,
      title: "Design Execution",
      subtitle: "Visual Perfection",
      description:
        "Transform chosen concepts into cohesive, production-ready visual identities. Refine proportions, create logo variations, and develop supporting patterns with strategic rose-gold highlights.",
      icon: Zap,
      deliverable: "High-Resolution Brand Assets",
      color: "from-secondary/70 to-secondary/30",
    },
    {
      step: 4,
      title: "Brand System & Application",
      subtitle: "Cross-Platform Excellence",
      description:
        "Extend visual identity across print and digital touchpoints. Design branded stationery, create consistent templates, and prepare professional 3D mockups for client approval.",
      icon: BarChart3,
      deliverable: "Branded Application Kit",
      color: "from-secondary/60 to-secondary/20",
    },
    {
      step: 5,
      title: "Review & Refinement",
      subtitle: "Pursuit of Excellence",
      description:
        "Collect and implement client feedback through annotated reviews. Perform quality control on contrast, scaling, legibility, and print-readiness to ensure nothing less than perfection.",
      icon: Check,
      deliverable: "Finalized Design System",
      color: "from-secondary to-secondary/60",
    },
    {
      step: 6,
      title: "Final Delivery & Launch",
      subtitle: "Professional Handoff",
      description:
        "Package all assets in organized folders with comprehensive brand guidelines. Provide 1-2 page brand usage guide covering colors, spacing, and file usage protocols.",
      icon: Share2,
      deliverable: "Brand Identity Package",
      color: "from-secondary/80 to-secondary/40",
    },
    {
      step: 7,
      title: "Showcase & Integration",
      subtitle: "Portfolio Storytelling",
      description:
        "Create compelling case studies showcasing the challenge, concept direction, solution, and results. Maintain consistent visual presentation across web and social platforms.",
      icon: Award,
      deliverable: "Website-Ready Case Study",
      color: "from-secondary/70 to-secondary/30",
    },
  ]

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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-3 sm:mb-4">
            My Design Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Seven thoughtfully crafted steps that transform vision into stunning, production-ready brand identities.
          </p>
          <p className="text-xs sm:text-sm text-secondary font-semibold mt-3 sm:mt-4">Design Beyond Ordinary</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`flex gap-4 sm:gap-6 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline Connector - Hidden on mobile */}
                <div className="hidden lg:flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-b ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-secondary to-secondary/20 mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-b ${step.color} flex items-center justify-center flex-shrink-0 lg:hidden`}
                    >
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-background" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                        <span className="text-xs sm:text-sm font-bold text-secondary">Step {step.step}</span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-secondary font-semibold mb-2 sm:mb-3">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 sm:pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-secondary mb-1">Deliverable</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">{step.deliverable}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Design Philosophy Summary */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Precision", description: "Every detail matters" },
            { label: "Sophistication", description: "Less clutter, more impact" },
            { label: "Trust", description: "Professional consistency" },
            { label: "Creativity", description: "Aesthetic that inspires" },
          ].map((principle) => (
            <motion.div
              key={principle.label}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 text-center hover:bg-muted transition-colors"
            >
              <h4 className="font-bold text-base sm:text-lg text-secondary mb-2">{principle.label}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
