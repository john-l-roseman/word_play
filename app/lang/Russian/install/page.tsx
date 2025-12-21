export default function InstallPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-stone-800 text-stone-100 px-4 py-4">
        <div className="container mx-auto">
          <a href="/lang/Russian" className="text-xl font-bold hover:text-stone-300">
            ← Back to Game
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-stone-800">Install on Mobile</h1>

        <div className="bg-white rounded-lg p-6 shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">iOS (Safari)</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-700">
              <li>Open this website in Safari browser</li>
              <li>Tap the Share button (square with arrow pointing up)</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Name the app and tap "Add"</li>
              <li>The app icon will appear on your home screen</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Android (Chrome)</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-700">
              <li>Open this website in Chrome browser</li>
              <li>Tap the three-dot menu in the top right</li>
              <li>Select "Add to Home screen" or "Install app"</li>
              <li>Confirm by tapping "Add" or "Install"</li>
              <li>The app icon will appear on your home screen</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Benefits of Installing</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-700">
              <li>
                <strong>Offline Play:</strong> Play without internet connection
              </li>
              <li>
                <strong>Full Screen:</strong> No browser bars for distraction-free experience
              </li>
              <li>
                <strong>Quick Access:</strong> Launch directly from home screen
              </li>
              <li>
                <strong>App-Like Feel:</strong> Feels like a native mobile app
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Note</h2>
            <p className="text-stone-700">
              This is a Progressive Web App (PWA) which means it works just like a regular app but doesn't need to be
              downloaded from an app store. Once installed, it will work offline!
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
