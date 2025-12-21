import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="bg-stone-200 border-b border-stone-300 px-2 py-1">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-sm md:text-base font-semibold text-stone-700">Drag and Drop</h1>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/lang/Russian" className="hover:text-stone-600">
              Home
            </Link>
            <Link href="/lang/Russian/rules" className="hover:text-stone-600">
              Rules
            </Link>
            <Link href="/lang/Russian/quotes" className="hover:text-stone-600">
              Quotes
            </Link>
            <Link href="/lang/Russian/install" className="text-stone-900 font-medium">
              Install
            </Link>
            <Link href="/lang/Russian/about" className="hover:text-stone-600">
              About
            </Link>
            <Link href="/lang/Russian/open-source" className="hover:text-stone-600">
              Open Source
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-6">Install on Mobile</h2>

        <div className="space-y-8 text-stone-700">
          <section>
            <h3 className="text-lg font-semibold mb-3">📱 iOS (Safari)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open this page in Safari</li>
              <li>Tap the Share button (square with arrow pointing up)</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" in the top right corner</li>
              <li>The app icon will appear on your home screen</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">🤖 Android (Chrome)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open this page in Chrome</li>
              <li>Tap the three-dot menu in the top right</li>
              <li>Tap "Add to Home screen" or "Install app"</li>
              <li>Confirm by tapping "Add"</li>
              <li>The app icon will appear on your home screen</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">✨ Benefits of Installing</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Full-screen experience without browser UI</li>
              <li>Quick access from your home screen</li>
              <li>Offline play capability (after first load)</li>
              <li>Faster loading times</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
