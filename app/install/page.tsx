export default function InstallPage() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-100 mb-6">Install on Mobile</h1>

        <div className="space-y-8 text-stone-300">
          <p className="text-lg">
            This game is a Progressive Web App (PWA) and can be installed on your mobile device for offline use and a
            native app-like experience.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">iOS (iPhone/iPad)</h2>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                Open this website in <strong className="text-stone-100">Safari</strong> browser.
              </li>
              <li>
                Tap the <strong className="text-stone-100">Share</strong> button (square with an arrow pointing up) at
                the bottom of the screen.
              </li>
              <li>
                Scroll down and tap <strong className="text-stone-100">"Add to Home Screen"</strong>.
              </li>
              <li>
                Edit the name if desired, then tap <strong className="text-stone-100">"Add"</strong> in the top right.
              </li>
              <li>The app icon will appear on your home screen.</li>
            </ol>
            <p className="mt-4 text-sm text-stone-400">Note: PWA installation is only available in Safari on iOS.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Android</h2>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                Open this website in <strong className="text-stone-100">Chrome</strong> or another supported browser.
              </li>
              <li>
                Tap the <strong className="text-stone-100">three-dot menu</strong> in the top right corner.
              </li>
              <li>
                Select <strong className="text-stone-100">"Add to Home screen"</strong> or{" "}
                <strong className="text-stone-100">"Install app"</strong>.
              </li>
              <li>Confirm the installation when prompted.</li>
              <li>The app icon will appear on your home screen.</li>
            </ol>
            <p className="mt-4 text-sm text-stone-400">
              Alternatively, you may see an automatic prompt at the bottom of the screen asking if you want to install
              the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Benefits of Installing</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Works offline - play even without an internet connection</li>
              <li>Faster loading times</li>
              <li>Full-screen experience without browser UI</li>
              <li>Easy access from your home screen</li>
              <li>Native app-like feel</li>
            </ul>
          </section>

          <section className="bg-stone-800 p-6 rounded-lg border border-stone-700">
            <h3 className="text-xl font-semibold text-stone-100 mb-3">Troubleshooting</h3>
            <p className="mb-2">
              <strong className="text-stone-100">Don't see the install option?</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Make sure you're using a supported browser (Safari on iOS, Chrome on Android)</li>
              <li>Check that you have a stable internet connection</li>
              <li>Try refreshing the page</li>
              <li>The app may already be installed on your device</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
