"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const resolvePreferredTheme = () => {
      const stored = window.localStorage.getItem("theme") as Theme | null
      if (stored) {
        return stored
      }
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches
      return prefersLight ? "light" : "dark"
    }

    const applyTheme = (nextTheme: Theme) => {
      setTheme(nextTheme)
      document.documentElement.classList.toggle("dark", nextTheme === "dark")
    }

    const raf = requestAnimationFrame(() => {
      applyTheme(resolvePreferredTheme())
    })

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")
    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem("theme") as Theme | null
      if (stored) {
        return
      }
      applyTheme(event.matches ? "light" : "dark")
    }

    mediaQuery.addEventListener("change", handlePreferenceChange)

    return () => {
      cancelAnimationFrame(raf)
      mediaQuery.removeEventListener("change", handlePreferenceChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    window.localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
