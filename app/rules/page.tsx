import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function RulesPage() {
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
        <h1 className="text-3xl font-bold mb-6">Game Rules</h1>

        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Objective</h2>
            <p className="leading-relaxed">
              Match English phrases with their French translations by dragging English cards from the left column to the
              corresponding French cards in the right column.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Eight phrase pairs are displayed each game, sorted by similar length to increase difficulty</li>
              <li>
                Drag an English card from the left column and drop it on the matching French translation on the right
              </li>
              <li>On mobile, use touch gestures to drag and drop the cards</li>
              <li>When you get close to a drop zone, you'll feel the card being pulled toward it</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Scoring</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>
                <strong>Correct match:</strong> +10 points plus streak bonus
              </li>
              <li>
                <strong>Streak bonus:</strong> +5 points for each consecutive correct match (builds up!)
              </li>
              <li>
                <strong>Wrong match:</strong> -5 points and streak resets to 0
              </li>
              <li>
                <strong>Score persists:</strong> Your score accumulates across games
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Visual & Audio Feedback</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>
                <strong>Correct match:</strong> Cards turn green and disappear with a pleasant "ka-ching" sound
              </li>
              <li>
                <strong>Wrong match:</strong> Card flashes red and returns to its original position with a buzzer sound
              </li>
              <li>
                <strong>Magnetic effect:</strong> Cards are pulled toward drop zones when nearby
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tips</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>All phrases in each game are similar in length, so you can't match by size alone</li>
              <li>Build up your streak for maximum points</li>
              <li>The game automatically starts a new round when all pairs are matched</li>
              <li>Click "New Game" to start fresh at any time</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
