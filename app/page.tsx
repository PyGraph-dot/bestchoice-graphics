"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { ServicesPreview } from "@/components/services-preview"
import { WhyBestChoice } from "@/components/why-bestchoice"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection isLoaded={isLoaded} />
      <section className="relative py-20 px-4 md:py-32">
        <PortfolioPreview />
      </section>
      <ServicesPreview />
      <WhyBestChoice />
      <CTASection />
      <Footer />
    </main>
  )
}
