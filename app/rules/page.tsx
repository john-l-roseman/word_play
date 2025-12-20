import { Menu } from "@/components/menu"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <Menu />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-200 mb-6">Game Rules</h1>

          <div className="space-y-6 text-stone-700 dark:text-stone-300">
            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Objective</h2>
              <p className="leading-relaxed">
                Match English phrases with their French translations by dragging cards from the left column to the
                correct drop zones on the right.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">How to Play</h2>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>
                  Each round presents 8 English phrase cards on the left and 8 French translation cards on the right.
                </li>
                <li>Drag an English card to the French card you think is the correct translation.</li>
                <li>The drop zone will highlight when you hover over it with a card.</li>
                <li>Release the card to make your match attempt.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Scoring System</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>Correct Match:</strong> +100 points + streak bonus (streak × 10 points)
                </li>
                <li>
                  <strong>Wrong Match:</strong> -50 points penalty and streak resets to 0
                </li>
                <li>
                  <strong>Streak Bonus:</strong> Build consecutive correct matches to earn bonus points
                </li>
                <li>Your score persists across game sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Visual & Audio Feedback</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>Correct Match:</strong> Cards turn green and disappear with a pleasant chime sound
                </li>
                <li>
                  <strong>Wrong Match:</strong> Card flashes red, returns to original position, and plays a buzzer sound
                </li>
                <li>
                  <strong>Magnetic Effect:</strong> Cards are pulled toward drop zones when nearby
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Phrase Grouping</h2>
              <p className="leading-relaxed">
                Phrases are grouped by character length (short, medium, long, very long). Each round only shows phrases
                from one group, preventing you from matching by size alone and encouraging real learning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Sources</h2>
              <p className="leading-relaxed mb-2">
                Phrases are drawn from diverse cultural and philosophical sources including:
              </p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed text-sm">
                <li>Religious texts (Quran, Bible, Talmud, Bhagavad Gita)</li>
                <li>Historical documents (US Bill of Rights, Declaration of Independence)</li>
                <li>Philosophical writings (Confucius, Marx, Lenin, Mao)</li>
                <li>Literary classics (Shakespeare, Mark Twain, Oscar Wilde)</li>
                <li>Famous quotes (Einstein, Churchill)</li>
                <li>Humorous observations</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
