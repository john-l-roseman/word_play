export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-stone-800 text-stone-100 px-4 py-4">
        <div className="container mx-auto">
          <a href="/lang/Russian" className="text-xl font-bold hover:text-stone-300">
            ← Back to Game
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-stone-800">Open Source</h1>

        <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
          <p>
            This app was constructed with no coding, using only the chatbot at{" "}
            <a href="https://vercel.com" className="text-blue-600 hover:underline">
              https://vercel.com
            </a>
            .
          </p>

          <p>Here is the prompt that was used to create the app:</p>

          <pre className="bg-stone-100 p-4 rounded overflow-x-auto text-xs md:text-sm whitespace-pre-wrap">
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


Create a dataset with these fields:   Quote Text | Translation of the quote into Russian | Source


An English card contains the entire quote text and, immediately below it, the source, in this format:
Quote Text 
-- Source (in italics)


No blank space between Quote Text and Source line.
Eliminate excess white space at the top and bottom of all the cards.


The corresponding Russian card contains only the translated quote, not the source.


Layout:
To start a new game:
1. Take eight cards | the sorted dataset.
2. Sort all quotes by their English length and select a contiguous window of 8 adjacent quotes. This ensures all displayed quotes have nearly identical lengths, making it impossible to match by size alone.
3. Two vertical columns with a gap in the middle. No column headers.
Display both columns side-by-side on mobile with smaller cards.
   * Left Side: A column of 8 'Draggable Cards' (Russian word cards). The Drop Zone cards should be shuffled in relation to the Draggable Cards, so the correct answer does not line up across from its English version.
   * Right Side: A column of 8  'Drop Zone Cards' (English word cards).
On mobile: ensure both columns are always visible side by side. Reduce the font size and eliminate blank space on the cards if necessary to fit two columns on mobile devices. 
Store the shuffled order in state instead of re-shuffling on every render.

Interaction Visuals and Audio
   * To determine whether a match is successful, compare quote IDs and not array indexes.
   * If a match is successful, both the English and Russian cards should turn green for 0.3 seconds then disappear + pleasant soft  ka-ching sound. 
   * After a correct match, the matched cards will fade out, and the remaining  cards will slide up to fill the gap with a smooth transition.
   * If a match is wrong, the English and Russian cards should flash red for 0.3 seconds and go back to their places + short buzzer using Web Audio API-generated sound (a  sawtooth wave that drops from 200Hz to 100Hz over 0.2 seconds)
   * Add touch event handlers to support mobile devices.
After each round, pick a random card from the sorted deck to start the new round.
Give a bonus for streaks. Subtract a penalty for wrong guesses.
Scoring accumulates from game to game. Add a Reset button to reset the score.
Don't pop-up any windows.
- Header: "Drag and Drop"


- Menu at the top with these options in large typeface:
      - "Rules":  Create a page based on the actual rules
      - "Open Source": Link to contents of the attached file how-to.html.  Do NOT delete anything from this file.
      - "Install on Mobile": Create a page with instructions for install on mobile (using PWA).
      - "About": Create a page describing Vercel and the concept of vibe coding a game. Describe the opportunity to use this site as a base for learning about AI.
      - "Quotes": A listing of all quotes in English with their source.
      - "Home" 
- On mobile use hamburger menu.

Put  Header, Scoring, Life Bar and Menu on the same line with minimal height.


Muted color scheme with grays and browns.


- PWA support for offline use.  (manifest.json, sw.js, layout.tsx)
- Create two PWA icons that are installed on mobile: two columns of cards with 6 cards per column.`}
          </pre>

          <p className="mt-4">
            You can easily fork the project by editing the prompt, for example to modify the list of sources.
          </p>
        </div>
      </main>
    </div>
  )
}
