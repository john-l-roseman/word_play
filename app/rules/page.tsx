import { MenuBar } from "@/components/menu-bar"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <MenuBar />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-6">{"Game Rules"}</h1>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Objective"}</h2>
              <p>
                {
                  "Match English phrases with their French translations by dragging cards from the left column to the corresponding drop zones on the right."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"How to Play"}</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>{"Each game presents 8 English phrases in the left column with their source citations."}</li>
                <li>
                  {"The right column contains the same phrases translated into French, but shuffled in random order."}
                </li>
                <li>{"Drag an English card and drop it onto the matching French translation."}</li>
                <li>{"All phrases in each round are similar in length to prevent matching by size alone."}</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Scoring"}</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>{"Correct Match:"}</strong>
                  {" +10 points base, plus +5 points for each card in your current streak"}
                </li>
                <li>
                  <strong>{"Incorrect Match:"}</strong>
                  {" -5 points and your streak resets to 0"}
                </li>
                <li>{"Your total score persists across multiple games"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Lives"}</h2>
              <p>
                {
                  "You start each round with 5 lives (shown as green dots in the header). Each incorrect match costs you one life. Lives reset when you start a new round."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Visual & Audio Feedback"}</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>{"Correct:"}</strong>
                  {" Cards turn green, disappear with animation, and play a pleasant chime sound"}
                </li>
                <li>
                  <strong>{"Incorrect:"}</strong>
                  {" Card returns to the left column with a buzzer sound"}
                </li>
                <li>
                  <strong>{"Near Drop Zone:"}</strong>
                  {" The drop zone highlights and scales up to show magnetic attraction"}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Phrase Sources"}</h2>
              <p className="mb-2">{"Phrases are drawn from diverse historical and literary sources including:"}</p>
              <p className="text-sm text-stone-600">
                {
                  "Quran • Bible • Talmud • US Bill of Rights • Declaration of Independence • Mao's Little Red Book • Confucius • Bhagavad Gita • Karl Marx • Vladimir Lenin • Albert Einstein • Shakespeare • Mark Twain • Winston Churchill • Oscar Wilde • and clever observations"
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Tips"}</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{"Build your streak! Consecutive correct matches earn bonus points"}</li>
                <li>{"Take your time - there's no time limit"}</li>
                <li>{"Learn from mistakes - read the phrases carefully"}</li>
                <li>{"Works on both desktop and mobile devices"}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
