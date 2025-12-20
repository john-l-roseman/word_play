"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-to-build", label: "How to Build" },
    { href: "/rules", label: "Rules" },
    { href: "/install", label: "Install on Mobile" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-neutral-800 border-b border-neutral-700 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-neutral-300 ${
                pathname === link.href ? "text-neutral-100 underline" : "text-neutral-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
