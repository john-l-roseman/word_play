import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="bg-stone-200 border-b border-stone-300 px-2 py-1">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-sm md:text-base font-semibold text-stone-700">Drag and Drop</h1>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/lang/Russian" className="hover:text-stone-600">
              Home
            </Link>
            <Link href="/lang/Russian/rules" className="text-stone-900 font-medium">
              Rules
            </Link>
            <Link href="/lang/Russian/quotes" className="hover:text-stone-600">
              Quotes
            </Link>
            <Link href="/lang/Russian/install" className="hover:text-stone-600">
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
        <h2 className="text-2xl font-bold text-stone-700 mb-6">Game Rules</h2>

        <div className="space-y-6 text-stone-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">🎯 Objective</h3>
            <p>Match Russian translations with their corresponding English quotes by dragging and dropping cards.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">🎮 How to Play</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Drag a Russian card from the left column</li>
              <li>Drop it onto the matching English quote on the right</li>
              <li>Correct matches turn green and disappear</li>
              <li>Wrong matches flash red and return to position</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">📊 Scoring</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>+10 points</strong> for each correct match
              </li>
              <li>
                <strong>Streak bonus:</strong> Get extra points (streak × 5) for consecutive correct matches
              </li>
              <li>
                <strong>-5 points</strong> for each wrong guess
              </li>
              <li>
                <strong>-1 life</strong> for each wrong guess
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">❤️ Lives</h3>
            <p>You start with 5 lives. Each wrong guess costs one life. Keep your hearts!</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">🔄 Rounds</h3>
            <p>After matching all 8 pairs, a new round automatically starts with new quotes of similar length.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">📱 Mobile Tips</h3>
            <p>On mobile devices, tap and hold a card to drag it, then release over the target card to drop.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
