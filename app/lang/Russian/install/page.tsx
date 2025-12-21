import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="bg-stone-700 text-stone-100 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Install on Mobile</h1>
          <Link href="/lang/Russian">
            <Button variant="outline" className="bg-stone-600 border-stone-500 hover:bg-stone-500">
              Back to Game
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-6 md:p-8 bg-stone-50 border-stone-300">
          <h2 className="text-2xl font-bold mb-6 text-stone-800">Install as a Progressive Web App (PWA)</h2>

          <div className="space-y-6 text-stone-700">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-stone-800">iOS (iPhone/iPad)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Open this page in <strong>Safari</strong> (not Chrome or other browsers)
                </li>
                <li>
                  Tap the <strong>Share</strong> button at the bottom of the screen (square with an arrow pointing up)
                </li>
                <li>
                  Scroll down and tap <strong>"Add to Home Screen"</strong>
                </li>
                <li>
                  Edit the name if you'd like, then tap <strong>"Add"</strong>
                </li>
                <li>The app icon will appear on your home screen</li>
                <li>Tap the icon to launch the app - it will run in full screen like a native app!</li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-stone-800">Android</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Open this page in <strong>Chrome</strong>
                </li>
                <li>
                  Tap the <strong>menu icon</strong> (three dots) in the top right corner
                </li>
                <li>
                  Tap <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>
                </li>
                <li>
                  Confirm by tapping <strong>"Add"</strong> or <strong>"Install"</strong>
                </li>
                <li>The app icon will appear on your home screen</li>
                <li>Tap the icon to launch the app in full screen mode</li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-stone-800">Benefits of Installing</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Offline Access:</strong> Play the game even without an internet connection
                </li>
                <li>
                  <strong>Full Screen:</strong> No browser UI cluttering your gameplay
                </li>
                <li>
                  <strong>Quick Access:</strong> Launch directly from your home screen
                </li>
                <li>
                  <strong>Native Feel:</strong> Looks and behaves like a native mobile app
                </li>
                <li>
                  <strong>Persistent Score:</strong> Your progress is saved locally on your device
                </li>
              </ul>
            </section>

            <section className="bg-stone-200 p-4 rounded-lg border border-stone-300">
              <p className="text-sm">
                <strong>Note:</strong> PWA functionality works best in Safari on iOS and Chrome on Android. Other
                browsers may have limited support for installation features.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
