import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-to-build", label: "How to Build" },
  { href: "/rules", label: "Rules" },
  { href: "/install", label: "Install on Mobile" },
  { href: "/about", label: "About" },
]

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-lg font-medium text-foreground hover:text-accent transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
