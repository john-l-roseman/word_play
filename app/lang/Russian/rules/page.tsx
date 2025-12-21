export default function RulesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-stone-800 mb-6">Game Rules</h1>

      <div className="space-y-6 text-stone-700">
        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">How to Play</h2>
          <p className="mb-2">Match Russian translations to their original English quotes by dragging and dropping.</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Drag a Russian card from the left column</li>
            <li>Drop it onto the matching English quote on the right</li>
            <li>On mobile, touch and drag the card to its match</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Scoring</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <strong>Correct match:</strong> +10 points base score
            </li>
            <li>
              <strong>Streak bonus:</strong> Up to +50 extra points for consecutive correct matches
            </li>
            <li>
              <strong>Wrong match:</strong> -5 points penalty and streak resets
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Feedback</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <span className="text-green-600 font-medium">Green flash</span> + chime = Correct match!
            </li>
            <li>
              <span className="text-red-600 font-medium">Red flash</span> + buzzer = Wrong match
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Rounds</h2>
          <p>
            Each round presents 8 quotes of similar length. After matching all 8, a new round begins automatically with
            different quotes. Your score persists across rounds until you choose to reset it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Look for cognates (similar-sounding words) between languages</li>
            <li>Pay attention to punctuation and sentence structure</li>
            <li>Build streaks to maximize your score</li>
            <li>
              The quotes come from diverse sources including religious texts, philosophers, and historical figures
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
