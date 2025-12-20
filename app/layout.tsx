import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Language Learning Game",
  description: "Learn languages by matching phrases - Built with v0 and Vercel",
  generator: "v0.app",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/icon-192.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-stone-900 text-stone-100`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
