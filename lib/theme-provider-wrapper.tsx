"use client"

import { ThemeProvider } from "@/lib/theme-context"
import type React from "react"

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
