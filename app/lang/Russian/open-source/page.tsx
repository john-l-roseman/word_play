import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="bg-stone-700 text-stone-100 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Open Source</h1>
          <Link href="/lang/Russian">
            <Button variant="outline" className="bg-stone-600 border-stone-500 hover:bg-stone-500">
              Back to Game
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-6 md:p-8 bg-stone-50 border-stone-300">
          <div className="prose max-w-none text-stone-700">
            <p>This app was constructed with no coding, using only the chatbot at https://vercel.com.</p>
            <p>Here is the prompt that was used to create the app:</p>
            <pre className="bg-stone-200 p-4 rounded-lg overflow-x-auto text-xs md:text-sm border border-stone-300">
              {`Find interesting, surprising or funny short (maximum 16 words) English quotes from these sources:
- 15 from the Quran 
- 15 from Bible
- 15 from Talmud
- 5 from US Bill of Rights
- 5 from US Declaration of Independence
- 10 from Mao's Little Red Book
- 10 from Confucius sayings
- 10 from Bhagavad Gita
- 10 from Karl Marx
- 10 from Vladimir Lenin
- 5 from Albert Einstein
- 20 humorous/clever observations
- 10 from Shakespeare
- 10 from Mark Twain
- 5 from Winston Churchill
- 10 from Oscar Wilde
- 5 from Benjamin Franklin
- 5 from Che Guevara
Be sure to preserve punctuation in the quotes. Do not truncate any text. Verify all entries are complete before finishing.

Create a dataset with these fields:   Quote Text | Translation of the quote into Russian | Source.

An English card contains the entire quote text and the source (in a div with no blank vertical space), in this format:
quote Text, followed by a line break, and then "-- Source" in italics.

The corresponding Russian card contains only the translated quote.
Layout:
To start a new game:
1. Take eight cards from the sorted dataset.
2. Sort all quotes by their English length and select a contiguous window of 8 adjacent quotes. This ensures all displayed quotes have nearly identical lengths, making it impossible to match by size alone.
3. Two vertical columns with a gap in the middle. No column headers.
Display both columns side-by-side on mobile with smaller cards.
On Desktop: 8 cards. On mobile: 5 cards.
   * Left Column: A list of  'Draggable Cards' (English word cards).
   * Right Column: A list of  'Drop Zone Cards' (Russian word cards). The Drop Zone cards should be shuffled in relation to the Draggable Cards, so the correct answer does not line up across from its English version.
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

- PWA support for offline use.
- Create two PWA icons that are installed on mobile: two columns of cards with 6 cards per column.`}
            </pre>

            <p className="mt-6">
              You can easily fork the project by editing the prompt, for example to modify the list of sources.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
