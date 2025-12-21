import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="bg-stone-700 text-stone-100 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Rules</h1>
          <Link href="/lang/Russian">
            <Button variant="outline" className="bg-stone-600 border-stone-500 hover:bg-stone-500">
              Back to Game
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-6 md:p-8 bg-stone-50 border-stone-300">
          <h2 className="text-2xl font-bold mb-6 text-stone-800">How to Play</h2>

          <div className="space-y-4 text-stone-700">
            <section>
              <h3 className="text-lg font-semibold mb-2">Objective</h3>
              <p>
                Match English quotes with their Russian translations by dragging cards from the left column to the
                corresponding Russian card on the right.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Game Setup</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Desktop:</strong> 8 cards per column
                </li>
                <li>
                  <strong>Mobile:</strong> 5 cards per column
                </li>
                <li>
                  All quotes are sorted by length to ensure similar sizes, making it impossible to match by card size
                  alone
                </li>
                <li>Russian cards are shuffled so they don't line up with their English counterparts</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">How to Match</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Desktop:</strong> Click and drag an English card to its matching Russian translation
                </li>
                <li>
                  <strong>Mobile:</strong> Touch and drag an English card to drop it on the correct Russian card
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Feedback</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Correct Match:</strong> Both cards flash green for 0.3 seconds, you hear a pleasant "ka-ching"
                  sound, and the cards disappear
                </li>
                <li>
                  <strong>Wrong Match:</strong> Both cards flash red for 0.3 seconds, you hear a buzzer sound, and the
                  cards return to their original positions
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Scoring</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Base Points:</strong> 10 points for each correct match
                </li>
                <li>
                  <strong>Streak Bonus:</strong> Additional points (streak × 2) for consecutive correct matches
                </li>
                <li>
                  <strong>Penalty:</strong> -5 points for incorrect matches
                </li>
                <li>Your score persists across rounds</li>
                <li>Use the Reset button to start fresh</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Rounds</h3>
              <p>
                After matching all cards in a round, a new set of quotes automatically loads. The game continues
                indefinitely, allowing you to improve your score and learn more quotes!
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Quote Sources</h3>
              <p>
                The game features quotes from diverse sources including religious texts (Quran, Bible, Talmud, Bhagavad
                Gita), historical documents (US Bill of Rights, Declaration of Independence), philosophical works
                (Confucius, Marx, Lenin, Mao), and famous personalities (Einstein, Shakespeare, Mark Twain, Churchill,
                Oscar Wilde, and more).
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
