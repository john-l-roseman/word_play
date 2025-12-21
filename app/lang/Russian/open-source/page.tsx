export default function OpenSourcePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-stone-800 mb-6">Open Source</h1>

      <div className="space-y-6 text-stone-700">
        <p>
          This app was constructed with no coding, using only the chatbot at{" "}
          <a href="https://v0.dev" className="text-amber-700 hover:underline">
            https://v0.dev
          </a>
        </p>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">The Prompt</h2>
          <p className="mb-3">Here is the prompt that was used to create the app:</p>

          <pre className="bg-stone-100 border border-stone-300 rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
            {`Find interesting, surprising or funny short (maximum 18 words) English quotes from these sources:
Source|Number of Quotes
Bible|15
the Quran|15
Talmud|15
US Bill of Rights|5
US Declaration of Independence|5
Mao's Little Red Book|10
Confucius|10
Bhagavad Gita|10
Karl Marx|10
Vladimir Lenin|10
Albert Einstein|5
Shakespeare|10
Mark Twain|5
Winston Churchill|5
Oscar Wilde|10
Benjamin Franklin|5
Che Guevara|5
Mahatma Gandhi|5

Be sure to preserve punctuation in the quotes. Do not truncate any text. Verify all entries are complete before finishing.

Create a dataset with these fields: Quote Text | Translation of the quote into Russian | Source

An English card contains the entire quote text and, immediately below it, the source, in this format:
Quote Text 
-- Source (in italics)

No blank space between Quote Text and Source line.
Eliminate excess white space at the top and bottom of all the cards.

The corresponding Russian card contains only the translated quote, not the source.

Layout:
To start a new game:
1. Take eight cards from the sorted dataset.
2. Sort all quotes by their English length and select a contiguous window of 8 adjacent quotes.
3. Two vertical columns with a gap in the middle. No column headers.
Display both columns side-by-side on mobile with smaller cards.
   * Left Side: A column of 8 'Draggable Cards' (Russian word cards).
   * Right Side: A column of 8 'Drop Zone Cards' (English word cards).
On mobile: ensure both columns are always visible side by side.

Interaction Visuals and Audio
   * If a match is successful, both cards turn green for 0.3 seconds then disappear + chime.
   * If a match is wrong, cards flash red for 0.3 seconds + buzzer sound.
   * After a correct match, remaining cards slide up smoothly.

Give a bonus for streaks. Subtract a penalty for wrong guesses.
Scoring accumulates from game to game. Add a Reset button.

Muted color scheme with grays and browns.

PWA support for offline use with manifest.json and service worker.`}
          </pre>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">Fork This Project</h2>
          <p>You can easily fork the project by editing the prompt. For example, you could:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li>Modify the list of quote sources</li>
            <li>Change the target language from Russian to another language</li>
            <li>Add more quotes or different categories</li>
            <li>Adjust the color scheme or visual design</li>
            <li>Add new game mechanics or features</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
