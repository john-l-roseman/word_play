import type React from "react"
import type { Metadata, Viewport } from "next"
import { GameHeader } from "@/components/game/game-header"
import { PWARegister } from "@/components/pwa-register"

export const metadata: Metadata = {
  title: "Russian Language Learning Game - Drag and Drop",
  description:
    "Learn Russian by matching famous quotes with their translations. A fun drag-and-drop language learning game.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Learn Russian",
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
  return (
    <div className="min-h-screen bg-stone-50">
      <PWARegister />
      <GameHeader />
      <main className="py-4">{children}</main>
    </div>
  )
}
