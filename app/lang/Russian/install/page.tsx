export default function InstallPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-stone-800 mb-6">Install on Mobile</h1>

      <div className="space-y-6 text-stone-700">
        <p>
          This game is a <strong>Progressive Web App (PWA)</strong>, which means you can install it on your mobile
          device and use it offline, just like a native app!
        </p>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">iOS (iPhone/iPad)</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              Open this page in <strong>Safari</strong> (required for iOS)
            </li>
            <li>
              Tap the <strong>Share</strong> button (square with arrow pointing up)
            </li>
            <li>
              Scroll down and tap <strong>&quot;Add to Home Screen&quot;</strong>
            </li>
            <li>
              Tap <strong>&quot;Add&quot;</strong> in the top right corner
            </li>
            <li>The app icon will appear on your home screen</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">Android (Chrome)</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              Open this page in <strong>Chrome</strong>
            </li>
            <li>
              Tap the <strong>three dots menu</strong> (⋮) in the top right
            </li>
            <li>
              Tap <strong>&quot;Add to Home screen&quot;</strong> or <strong>&quot;Install app&quot;</strong>
            </li>
            <li>
              Confirm by tapping <strong>&quot;Add&quot;</strong>
            </li>
            <li>The app will install and appear on your home screen</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">Desktop (Chrome/Edge)</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Look for the install icon in the address bar (usually on the right)</li>
            <li>
              Click the icon and select <strong>&quot;Install&quot;</strong>
            </li>
            <li>The app will open in its own window</li>
          </ol>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="font-semibold text-amber-800 mb-2">Benefits of Installing</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900">
            <li>Works offline - practice anywhere, anytime</li>
            <li>Full-screen experience without browser UI</li>
            <li>Quick access from your home screen</li>
            <li>No app store download required</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
