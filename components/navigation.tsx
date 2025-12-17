"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              pathname === "/" ? "text-indigo-600" : "text-slate-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              pathname === "/about" ? "text-indigo-600" : "text-slate-700"
            }`}
          >
            About
          </Link>
          <Link
            href="/rules"
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              pathname === "/rules" ? "text-indigo-600" : "text-slate-700"
            }`}
          >
            Rules
          </Link>
        </div>
      </div>
    </nav>
  )
}
