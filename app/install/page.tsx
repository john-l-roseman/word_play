import Link from "next/link"

export default function Install() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/rules" className="hover:text-primary transition-colors">
            Rules
          </Link>
          <Link href="/install" className="hover:text-primary transition-colors">
            Install on Mobile
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-balance">Install on Mobile</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What is a PWA?</h2>
            <p className="text-lg mb-4">
              This language learning game is a Progressive Web App (PWA), which means you can install it on your mobile
              device and use it just like a native app - even offline! No app store required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">iPhone / iPad (Safari)</h2>
            <ol className="list-decimal list-inside space-y-3 ml-4 text-lg">
              <li>
                Open this website in <strong>Safari</strong> browser
              </li>
              <li>
                Tap the <strong>Share button</strong> (square with arrow pointing up) at the bottom of the screen
              </li>
              <li>
                Scroll down and tap <strong>"Add to Home Screen"</strong>
              </li>
              <li>
                Edit the name if desired, then tap <strong>"Add"</strong>
              </li>
              <li>The app icon will now appear on your home screen</li>
            </ol>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                💡 <strong>Note:</strong> iOS requires Safari browser for PWA installation. Chrome and other browsers on
                iOS don't support this feature.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Android (Chrome)</h2>
            <ol className="list-decimal list-inside space-y-3 ml-4 text-lg">
              <li>
                Open this website in <strong>Chrome</strong> browser
              </li>
              <li>
                Tap the <strong>three-dot menu</strong> (⋮) in the top right corner
              </li>
              <li>
                Select <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>
              </li>
              <li>
                Confirm by tapping <strong>"Add"</strong> or <strong>"Install"</strong>
              </li>
              <li>The app icon will appear on your home screen</li>
            </ol>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                💡 <strong>Alternative:</strong> Some Android devices show an automatic banner at the bottom of the
                screen prompting you to install the app.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits of Installing</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
              <li>
                <strong>Offline Access:</strong> Play the game even without an internet connection
              </li>
              <li>
                <strong>Full Screen:</strong> No browser address bar - more screen space for the game
              </li>
              <li>
                <strong>Fast Loading:</strong> Instant launch from your home screen
              </li>
              <li>
                <strong>Native Feel:</strong> Works just like a native app
              </li>
              <li>
                <strong>No App Store:</strong> No need to download from Google Play or App Store
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">I don't see the "Add to Home Screen" option</h3>
                <p className="text-muted-foreground ml-4">
                  Make sure you're using the correct browser (Safari on iOS, Chrome on Android). Some browsers don't
                  support PWA installation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">The app doesn't work offline</h3>
                <p className="text-muted-foreground ml-4">
                  Visit all pages of the app while online first. The service worker needs to cache the content before
                  offline use is available.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do I uninstall?</h3>
                <p className="text-muted-foreground ml-4">
                  Long-press the app icon on your home screen and select "Remove" or "Uninstall," just like any other
                  app.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
