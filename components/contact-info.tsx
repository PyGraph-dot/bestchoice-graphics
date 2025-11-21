"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Briefcase, MessageCircle } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@bestchoicegraphics.com",
    href: "mailto:info@bestchoicegraphics.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+234 806 923 7901",
    href: "https://wa.me/2348069237901",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
  { icon: Briefcase, label: "Behance", href: "#", color: "hover:text-blue-500" },
  { icon: Mail, label: "Email", href: "mailto:info@bestchoicegraphics.com", color: "hover:text-secondary" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/2348069237901", color: "hover:text-green-500" },
]

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
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
    <motion.div
      className="space-y-4 sm:space-y-6 md:space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Contact Details */}
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <motion.div key={index} variants={itemVariants}>
            <Link href={detail.href} className="flex items-start gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{detail.label}</p>
                <p className="text-xs sm:text-base font-medium group-hover:text-secondary transition-colors">
                  {detail.value}
                </p>
              </div>
            </Link>
          </motion.div>
        )
      })}

      {/* Social Links */}
      <motion.div variants={itemVariants} className="pt-3 sm:pt-4 border-t border-border">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">Follow Me</p>
        <div className="flex gap-2 sm:gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-background border border-border rounded-md flex items-center justify-center text-muted-foreground transition-all ${social.color} hover:border-secondary`}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Quick Message */}
      <motion.div variants={itemVariants} className="p-3 sm:p-4 bg-card border border-border rounded-lg">
        <p className="text-xs sm:text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Response Time: </span>I typically respond to inquiries within
          24-48 hours.
        </p>
      </motion.div>
    </motion.div>
  )
}
