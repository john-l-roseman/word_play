"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/lang/Russian", label: "Home" },
  { href: "/lang/Russian/rules", label: "Rules" },
  { href: "/lang/Russian/quotes", label: "Quotes" },
  { href: "/lang/Russian/about", label: "About" },
  { href: "/lang/Russian/install", label: "Install on Mobile" },
  { href: "/lang/Russian/open-source", label: "Open Source" },
]

export function GameHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-stone-100 border-b border-stone-300 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold text-stone-800">Drag and Drop</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-stone-50 border-t border-stone-200 px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
