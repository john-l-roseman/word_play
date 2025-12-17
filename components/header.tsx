import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Menu Bar */}
        <nav className="flex gap-6 mb-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
            About
          </Link>
          <Link href="/rules" className="text-blue-600 hover:text-blue-800 font-medium">
            Rules
          </Link>
        </nav>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">word-play.org</h1>
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <p className="text-sm text-gray-600">Open Source AI Language Learning Game</p>
            <p className="text-sm text-gray-600">More fun than Duolingo, and free forever</p>
          </div>
        </div>
      </div>
    </header>
  )
}
