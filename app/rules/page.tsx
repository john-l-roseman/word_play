import { Navigation } from "@/components/navigation"

export default function RulesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">How to Play</h1>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Game Objective</h2>
              <p>
                Match English phrases from famous texts with their correct Russian translations. Build your streak and
                score points!
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Scoring</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Correct Answer:</strong> +100 points base + 100 points per consecutive streak
                </li>
                <li>
                  <strong>Wrong Answer:</strong> Streak resets to 0
                </li>
                <li>
                  <strong>High Score:</strong> Your best score is saved automatically
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Gameplay</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Read the English phrase at the top</li>
                <li>Click one of the four Russian translation cards</li>
                <li>Correct answers turn green and auto-advance after 1.5 seconds</li>
                <li>Wrong answers turn red, and the correct answer is shown in green</li>
                <li>Click "Continue" after a wrong answer to proceed</li>
              </ol>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Tips Feature</h2>
              <p>
                Click "Turn on Tips" to see word-by-word English translations when you hover over Russian words. Note:
                Using tips will reset your streak to 0.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Buttons</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>New Words:</strong> Load a new random phrase
                </li>
                <li>
                  <strong>Restart:</strong> Reload the current phrase
                </li>
                <li>
                  <strong>Turn on Tips:</strong> Enable hover tooltips for Russian words
                </li>
                <li>
                  <strong>Reset Score:</strong> Reset your high score to 0
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Audio Feedback</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Correct answers play a pleasant two-tone chime</li>
                <li>Wrong answers play a short buzz sound</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-6">Phrase Sources</h2>
              <p>Phrases come from diverse sources including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Religious texts (Quran, Bible, Talmud, Bhagavad Gita)</li>
                <li>Historical documents (US Bill of Rights, Declaration of Independence)</li>
                <li>Famous authors (Shakespeare, Mark Twain, Oscar Wilde)</li>
                <li>Philosophers and leaders (Confucius, Karl Marx, Vladimir Lenin)</li>
                <li>Scientists (Albert Einstein)</li>
                <li>Humorous observations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
