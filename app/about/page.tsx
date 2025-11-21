"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Biography } from "@/components/biography"
import { Services } from "@/components/services"
import { DesignProcess } from "@/components/design-process"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <AboutHero />
      <Biography />
      <DesignProcess />
      <Services />
      <Footer />
    </main>
  )
}
