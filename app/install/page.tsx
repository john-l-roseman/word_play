import { Menu } from "@/components/menu"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <Menu />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-200 mb-6">Install on Mobile</h1>

          <div className="space-y-8 text-stone-700 dark:text-stone-300">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">iOS (Safari)</h2>
              <ol className="list-decimal list-inside space-y-3 leading-relaxed">
                <li>
                  Open this website in <strong>Safari</strong> browser
                </li>
                <li>
                  Tap the <strong>Share</strong> button (square with arrow pointing up) at the bottom of the screen
                </li>
                <li>
                  Scroll down and tap <strong>&quot;Add to Home Screen&quot;</strong>
                </li>
                <li>
                  Edit the name if desired, then tap <strong>&quot;Add&quot;</strong> in the top right
                </li>
                <li>The app icon will now appear on your home screen</li>
                <li>Tap the icon to launch the app - it works offline!</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">Android (Chrome)</h2>
              <ol className="list-decimal list-inside space-y-3 leading-relaxed">
                <li>
                  Open this website in <strong>Chrome</strong> browser
                </li>
                <li>
                  Tap the <strong>three-dot menu</strong> in the top right corner
                </li>
                <li>
                  Select <strong>&quot;Add to Home screen&quot;</strong> or <strong>&quot;Install app&quot;</strong>
                </li>
                <li>
                  Edit the name if desired, then tap <strong>&quot;Add&quot;</strong>
                </li>
                <li>The app icon will now appear on your home screen</li>
                <li>Tap the icon to launch the app - it works offline!</li>
              </ol>
            </section>

            <section className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">💡 Benefits of Installing</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Works completely offline after first load</li>
                <li>Faster loading times</li>
                <li>Full-screen experience without browser UI</li>
                <li>Easy access from your home screen</li>
                <li>Your scores and progress are saved locally</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">Desktop Installation</h2>
              <p className="leading-relaxed mb-3">Many modern browsers also support installing this app on desktop:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>Chrome/Edge:</strong> Look for the install icon in the address bar, or check browser menu →
                  &quot;Install [app name]&quot;
                </li>
                <li>
                  <strong>Desktop app:</strong> Runs in its own window without browser tabs
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
