export default function RulesPage() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-100 mb-6">Game Rules</h1>

        <div className="space-y-6 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">Objective</h2>
            <p>
              Match English phrases with their French translations by dragging the English cards to the correct French
              cards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Each round presents 8 English phrases and their 8 French translations.</li>
              <li>Drag an English card from the left column to the matching French card on the right.</li>
              <li>The French cards are shuffled, so you cannot match by position alone.</li>
              <li>All phrases in a round have similar lengths to prevent matching by size.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">Scoring</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-stone-100">Correct Match:</strong> Earn 100 points plus a streak bonus.
              </li>
              <li>
                <strong className="text-stone-100">Streak Bonus:</strong> Consecutive correct matches multiply your
                bonus (10 points × streak number).
              </li>
              <li>
                <strong className="text-stone-100">Wrong Match:</strong> Lose 20 points and 10% of your life bar. Your
                streak resets to 0.
              </li>
              <li>
                <strong className="text-stone-100">Score Persistence:</strong> Your score accumulates across games and
                is saved locally.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">Visual & Audio Feedback</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-stone-100">Correct Match:</strong> Cards turn green and disappear with a
                pleasant "ka-ching" sound.
              </li>
              <li>
                <strong className="text-stone-100">Wrong Match:</strong> The card flashes red and returns to its
                position with a buzzer sound.
              </li>
              <li>
                <strong className="text-stone-100">Drag Interaction:</strong> Cards scale up and show hover effects when
                near a drop zone.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">Mobile Support</h2>
            <p>
              The game supports touch events for mobile devices. Simply touch and drag the English cards to the French
              cards. You can also install the game as a Progressive Web App (PWA) for offline use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-3">Sources</h2>
            <p>
              Phrases are drawn from diverse sources including religious texts (Quran, Bible, Talmud, Bhagavad Gita),
              historical documents (US Bill of Rights, Declaration of Independence), political writings (Mao, Marx,
              Lenin), and famous authors (Shakespeare, Mark Twain, Oscar Wilde, Churchill, Confucius, Einstein).
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
