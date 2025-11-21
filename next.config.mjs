/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Disable optimization in development to avoid timeout issues
    // Images will still be optimized in production
    unoptimized: process.env.NODE_ENV === "development",
  },
}

export default nextConfig
