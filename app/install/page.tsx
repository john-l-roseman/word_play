import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function InstallPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card border-b border-border p-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors">
          Drag and Drop
        </Link>
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Install on Mobile</h1>

        <div className="space-y-8 text-foreground">
          <p className="text-lg leading-relaxed">
            This app is a Progressive Web App (PWA), which means you can install it on your mobile device and use it
            offline, just like a native app!
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">iOS (iPhone/iPad) - Safari</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed">
              <li>
                Open this website in <strong>Safari</strong> (not Chrome or other browsers)
              </li>
              <li>
                Tap the <strong>Share</strong> button (square with an arrow pointing up) at the bottom of the screen
              </li>
              <li>
                Scroll down and tap <strong>"Add to Home Screen"</strong>
              </li>
              <li>Give the app a name (or keep "Drag and Drop")</li>
              <li>
                Tap <strong>"Add"</strong> in the top-right corner
              </li>
              <li>The app icon will appear on your home screen!</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Android - Chrome</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed">
              <li>
                Open this website in <strong>Chrome</strong>
              </li>
              <li>
                Tap the <strong>three-dot menu</strong> in the top-right corner
              </li>
              <li>
                Tap <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>
              </li>
              <li>
                Confirm by tapping <strong>"Add"</strong> or <strong>"Install"</strong>
              </li>
              <li>The app icon will appear on your home screen!</li>
            </ol>
            <p className="mt-4 text-muted-foreground">
              Note: On some Android devices, you may see an automatic prompt to install the app when you first visit the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits of Installing</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>
                <strong>Offline access:</strong> Play the game even without an internet connection
              </li>
              <li>
                <strong>Quick access:</strong> Launch directly from your home screen
              </li>
              <li>
                <strong>Full-screen experience:</strong> No browser UI taking up screen space
              </li>
              <li>
                <strong>Faster loading:</strong> Resources are cached for instant startup
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
