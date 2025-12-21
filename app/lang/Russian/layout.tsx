import type React from "react"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Language Learning Game - Russian",
  description: "Learn Russian by matching English quotes with their Russian translations",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Drag & Drop",
  },
}

export const viewport: Viewport = {
  themeColor: "#57534e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RussianGameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
