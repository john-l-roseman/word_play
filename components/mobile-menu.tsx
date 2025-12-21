"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {menuOpen && (
        <nav className="md:hidden absolute top-12 left-0 right-0 bg-stone-200 border-b border-stone-300 py-2 flex flex-col gap-2 text-sm px-4 z-50">
          <Link
            href="/lang/Russian"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/lang/Russian/rules"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Rules
          </Link>
          <Link
            href="/lang/Russian/quotes"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Quotes
          </Link>
          <Link
            href="/lang/Russian/install"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Install on Mobile
          </Link>
          <Link
            href="/lang/Russian/about"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/lang/Russian/open-source"
            className="hover:bg-stone-300 px-2 py-1 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Open Source
          </Link>
        </nav>
      )}
    </>
  )
}
