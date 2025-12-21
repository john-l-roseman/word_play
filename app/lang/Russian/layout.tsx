import type React from "react"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Drag and Drop - Russian Language Game",
  description: "Learn Russian by matching famous quotes with their translations",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Drag & Drop",
  },
}

export const viewport: Viewport = {
  themeColor: "#78716c",
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
  return <>{children}</>
}
