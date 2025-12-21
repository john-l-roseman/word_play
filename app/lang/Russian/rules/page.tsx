export default function RulesPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-stone-800 text-stone-100 px-4 py-4">
        <div className="container mx-auto">
          <a href="/lang/Russian" className="text-xl font-bold hover:text-stone-300">
            ← Back to Game
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-stone-800">Game Rules</h1>

        <div className="bg-white rounded-lg p-6 shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Objective</h2>
            <p className="text-stone-700">
              Match Russian translations (left column) with their corresponding English quotes (right column) by
              dragging and dropping.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-700">
              <li>Drag a Russian quote from the left column</li>
              <li>Drop it onto the corresponding English quote on the right</li>
              <li>If correct, both cards turn green and disappear</li>
              <li>If incorrect, both cards flash red and return to their positions</li>
              <li>Continue until all 8 pairs are matched</li>
              <li>A new round begins automatically with 8 new quotes</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Scoring</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-700">
              <li>
                <strong>Correct match:</strong> +10 points base
              </li>
              <li>
                <strong>Streak bonus:</strong> Each consecutive correct match adds +5 points per streak level
              </li>
              <li>
                <strong>Incorrect match:</strong> -5 points (score never goes below 0)
              </li>
              <li>
                <strong>Streak reset:</strong> Wrong answer resets your streak to 0
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-700">
              <li>All quotes in each round have similar lengths to prevent matching by size</li>
              <li>Read both columns carefully before making your first match</li>
              <li>Build streaks for maximum points</li>
              <li>Your score accumulates across rounds</li>
              <li>Use the Reset button to start fresh</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-stone-800">Mobile Support</h2>
            <p className="text-stone-700">
              The game works on both desktop (drag and drop) and mobile devices (touch). Install as a PWA for offline
              play!
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
