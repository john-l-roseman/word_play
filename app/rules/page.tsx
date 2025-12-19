import Link from "next/link"

export default function Rules() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/rules" className="hover:text-primary transition-colors">
            Rules
          </Link>
          <Link href="/install" className="hover:text-primary transition-colors">
            Install on Mobile
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-balance">Game Rules</h1>

        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Objective</h2>
            <p>
              Match English phrases from famous texts with their correct Russian translations. Build your streak and
              achieve the highest score!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Read the English phrase displayed at the top</li>
              <li>Choose the correct Russian translation from four options</li>
              <li>Click on your answer to submit</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Scoring</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Correct Answer:</strong> +100 points base + 100 points per consecutive streak
              </li>
              <li>
                <strong>Streak Bonus:</strong> Each consecutive correct answer increases your streak multiplier
              </li>
              <li>
                <strong>Game Completion Bonus:</strong> 50 points per remaining mistake when you finish all 8 phrases
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Mistakes</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You have 4 chances (mistakes allowed)</li>
              <li>Wrong answer resets your streak to 0</li>
              <li>Game ends when you reach 4 mistakes or complete all 8 phrases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Game Features</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Turn on Tips:</strong> Enables word-by-word translations for Russian text (resets streak to 0)
              </li>
              <li>
                <strong>New Words:</strong> Loads a new set of 8 random phrases
              </li>
              <li>
                <strong>Restart:</strong> Restarts the current set of 8 phrases
              </li>
              <li>
                <strong>Reset Score:</strong> Clears your high score
              </li>
              <li>
                <strong>High Score:</strong> Your best score is saved automatically
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Visual Feedback</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Green card:</strong> Correct answer
              </li>
              <li>
                <strong>Red card with shake:</strong> Wrong answer
              </li>
              <li>
                <strong>Dark gray:</strong> Selected card before reveal
              </li>
              <li>
                <strong>Audio cues:</strong> Pleasant chime for correct, buzz for incorrect
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Phrase Sources</h2>
            <p>Phrases are selected from diverse sources including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Religious texts (Quran, Bible, Talmud, Bhagavad Gita)</li>
              <li>Historical documents (US Bill of Rights, Declaration of Independence)</li>
              <li>Philosophical works (Marx, Lenin, Confucius, Mao)</li>
              <li>Literary classics (Shakespeare, Mark Twain, Oscar Wilde)</li>
              <li>Famous thinkers (Einstein, Churchill)</li>
              <li>Humorous observations</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
