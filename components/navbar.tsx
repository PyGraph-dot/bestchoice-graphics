"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/lib/theme-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 flex justify-between items-center">
        {/* Logo - Responsive */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 lg:gap-4 hover:opacity-80 transition-opacity">
          {/* Mobile: Favicon only (hidden on sm and up) */}
          <Image
            src="/images/design-mode/Favicon.png"
            alt="BestChoice Graphics Logo"
            width={32}
            height={32}
            className="sm:hidden w-8 h-8"
            priority
          />

          {/* Tablet & Desktop: Horizontal Logo - uses white logo in dark mode */}
          <Image
            src="/images/design-mode/Horizontal%20Rose%20gold.png"
            alt="BestChoice Graphics"
            width={240}
            height={60}
            className="hidden sm:block w-auto h-auto max-h-12 sm:max-h-14 lg:max-h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation - responsive text sizes */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            href="/contact"
            className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 bg-secondary text-secondary-foreground rounded-md hover:bg-accent transition-colors font-medium text-xs sm:text-sm lg:text-base"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button - responsive sizing */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-card border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-3 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-accent transition-colors font-medium text-sm sm:text-base mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
