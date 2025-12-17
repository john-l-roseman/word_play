import { Header } from "@/components/header"

export const metadata = {
  title: "Rules - word-play.org",
  description: "Learn how to play word-play.org",
}

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Play</h2>

          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Objective</h3>
              <p>Match English phrases with their correct French translations to score points and build your streak!</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Gameplay</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>You'll see an English phrase with its source (Bible, Shakespeare, etc.)</li>
                <li>Choose the correct French translation from 4 options</li>
                <li>Click on the card you think is correct</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scoring</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Correct Answer:</strong> +100 points base + 100 points per consecutive streak
                </li>
                <li>
                  <strong>Streak Bonus:</strong> Each consecutive correct answer increases your streak
                </li>
                <li>
                  <strong>Game Completion:</strong> +50 points for each remaining life (mistake not made)
                </li>
                <li>
                  <strong>High Score:</strong> Your best score is saved automatically
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mistakes</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>You have 4 lives (mistakes allowed)</li>
                <li>Wrong answers reset your streak to 0</li>
                <li>After 4 mistakes, the game ends</li>
                <li>Click "Continue" after a wrong answer to proceed</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Tips Feature</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Click "Turn on Tips" to enable word-by-word translations</li>
                <li>Hover over any French word to see its English meaning</li>
                <li>Using tips resets your streak to 0</li>
                <li>The tips button reappears for each new phrase</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Buttons</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Restart:</strong> Start over with the same 8 phrases
                </li>
                <li>
                  <strong>New Words:</strong> Get a fresh set of 8 random phrases
                </li>
                <li>
                  <strong>Continue:</strong> Move to the next phrase after a wrong answer
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Phrase Sources</h3>
              <p className="mb-2">Phrases come from diverse cultural and literary sources:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Religious texts: Quran, Bible, Talmud</li>
                <li>Historical documents: US Bill of Rights, Declaration of Independence</li>
                <li>Political writings: Mao's Little Red Book, Marx, Lenin</li>
                <li>Philosophy: Confucius sayings</li>
                <li>Literature: Shakespeare, Mark Twain, Oscar Wilde</li>
                <li>Notable figures: Winston Churchill, Albert Einstein</li>
                <li>Humorous observations and clever sayings</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
