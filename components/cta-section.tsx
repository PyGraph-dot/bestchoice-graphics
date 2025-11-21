"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
            Let&apos;s create something extraordinary together. Your vision deserves exceptional design.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md transition-all font-semibold text-sm sm:text-base"
            >
              Get In Touch
            </Link>
            <Link
              href="/portfolio"
              className="px-6 sm:px-8 py-3 sm:py-3.5 border border-secondary text-secondary hover:bg-secondary/10 rounded-md transition-all font-semibold text-sm sm:text-base"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
