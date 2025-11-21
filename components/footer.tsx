"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Mail, MessageCircle, Briefcase } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Briefcase, href: "#", label: "Behance" },
    { icon: Mail, href: "mailto:info@bestchoicegraphics.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/2348069237901", label: "WhatsApp" },
  ]

  return (
    <motion.footer
      className="bg-card border-t border-border mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-4 text-secondary">BestChoice Graphics</h3>
            <p className="text-sm text-muted-foreground">
              Design beyond ordinary. Crafting visual identities that inspire and elevate brands to new heights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-background border border-border rounded-md flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2025 BestChoice Graphics. Design beyond ordinary.</p>
        </div>
      </div>
    </motion.footer>
  )
}
