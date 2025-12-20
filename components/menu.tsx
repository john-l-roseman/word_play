"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Menu() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-to-build", label: "How to Build" },
    { href: "/rules", label: "Rules" },
    { href: "/install", label: "Install on Mobile" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-stone-200 dark:bg-stone-800 border-b border-stone-300 dark:border-stone-700 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg md:text-xl font-medium transition-colors ${
                  pathname === link.href
                    ? "text-stone-900 dark:text-stone-100 underline"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
