import { MenuBar } from "@/components/menu-bar"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <MenuBar />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-6">{"Install on Mobile"}</h1>

          <div className="space-y-8 text-stone-700 leading-relaxed">
            <p className="text-lg">
              {
                "This app is a Progressive Web App (PWA) that can be installed on your mobile device for offline use and a native app-like experience."
              }
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">{"iOS (iPhone/iPad)"}</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>{"Open Safari"}</strong>
                  {" - This app must be installed through Safari browser (not Chrome or other browsers)"}
                </li>
                <li>
                  <strong>{"Navigate to the app"}</strong>
                  {" - Go to the app URL in Safari"}
                </li>
                <li>
                  <strong>{"Tap the Share button"}</strong>
                  {" - Look for the square with an arrow pointing up at the bottom of the screen"}
                </li>
                <li>
                  <strong>{'Scroll down and tap "Add to Home Screen"'}</strong>
                </li>
                <li>
                  <strong>{"Confirm"}</strong>
                  {' - Tap "Add" in the top right corner'}
                </li>
                <li>
                  <strong>{"Launch"}</strong>
                  {" - The app icon will appear on your home screen. Tap it to launch the app!"}
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">{"Android"}</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>{"Open Chrome"}</strong>
                  {" - Navigate to the app in Chrome browser"}
                </li>
                <li>
                  <strong>{"Tap the menu"}</strong>
                  {" - Tap the three dots in the top right corner"}
                </li>
                <li>
                  <strong>{'Select "Add to Home screen" or "Install app"'}</strong>
                </li>
                <li>
                  <strong>{"Confirm"}</strong>
                  {" - Follow the prompts to confirm installation"}
                </li>
                <li>
                  <strong>{"Launch"}</strong>
                  {" - The app icon will appear on your home screen or app drawer"}
                </li>
              </ol>

              <div className="mt-4 p-4 bg-stone-50 rounded border border-stone-200">
                <p className="text-sm">
                  <strong>{"Note:"}</strong>
                  {
                    ' Some Android devices may show an automatic banner at the bottom of the screen prompting you to install. You can tap "Install" on this banner as a shortcut.'
                  }
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">{"Benefits of Installing"}</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{"Access the app directly from your home screen like a native app"}</li>
                <li>{"Works offline after first load"}</li>
                <li>{"Faster loading times"}</li>
                <li>{"Full-screen experience without browser UI"}</li>
                <li>{"No app store required"}</li>
              </ul>
            </section>

            <section className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">{"Troubleshooting"}</h3>
              <p className="text-amber-800">
                {
                  "If you don't see the \"Add to Home Screen\" option, make sure you're using the correct browser (Safari for iOS, Chrome for Android) and that you're not in private/incognito mode."
                }
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
