import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Preloader } from "@/components/preloader"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProviderWrapper } from "@/lib/theme-provider-wrapper"

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})
const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "BestChoice Graphics - Design Brand Portfolio",
  description:
    "Professional design portfolio showcasing logos, flyers, and brand identity work by Oluwagbeniyi Joseph Adedeji",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProviderWrapper>
          <Preloader />
          {children}
          <ScrollToTop />
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
