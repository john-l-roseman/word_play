"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MenuBar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-to-build", label: "How to Build" },
    { href: "/rules", label: "Rules" },
    { href: "/install", label: "Install on Mobile" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-stone-800 text-stone-100 px-4 py-3 flex flex-wrap gap-2 justify-center items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-lg md:text-xl px-3 py-1 rounded hover:bg-stone-700 transition-colors ${
            pathname === link.href ? "bg-stone-600" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
