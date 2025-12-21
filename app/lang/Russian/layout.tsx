import type React from "react"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Russian Language Learning Game - Drag and Drop",
  description:
    "Learn Russian by matching famous quotes with their translations. Interactive drag-and-drop game with offline support.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Russian Game",
  },
}

export const viewport: Viewport = {
  themeColor: "#292524",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RussianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
