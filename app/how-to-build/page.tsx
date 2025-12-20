import { MenuBar } from "@/components/menu-bar"

export default function HowToBuildPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <MenuBar />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose prose-stone max-w-none">
          <p>
            {"This app was constructed with no coding, using only the chatbot at "}
            <a href="https://vercel.com" className="text-stone-700 hover:text-stone-900 underline">
              {"https://vercel.com"}
            </a>
            {"."}
          </p>
          <p>{"Here is the prompt that was used to create the app:"}</p>
          <pre className="bg-stone-100 p-4 rounded overflow-x-auto text-sm whitespace-pre-wrap break-words">
            {`Find interesting modern English phrases from these sources:
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
Be sure to preserve commas in the phrases.


Create a dataset with these fields:  the phrase, the translation of the phrase into Russian, the source.
Sort the phrase dataset by the number of words in the English phrase, so that shorter phrases are at the beginning.


An English card contains the quote and the source (in a single div with no blank vertical space), in this format:
Phrase Text, followed by a single line break, and then "-- Source" in italics.


The corresponding Russian card contains only the translated phrase.
Layout:
To start a new game:
Take eight cards from the sorted dataset.
Two vertical columns with a gap in the middle. No column headers.
* Left Column: A list of 8 'Draggable Cards' (English word cards).
* Right Column: A list of 8  'Drop Zone Cards' (Russian word cards). The Drop Zone cards should be shuffled in relation to the Draggable Cards, so the correct answer does not line up across from its English version.
Interaction Visuals and Audio
* If a match is successful, the cards should turn green and disappear + pleasant soft  ka-ching sound.
* If a match is wrong, the card should flash red and go back to its place in the left column + short buzzer, low volume.
* When you get close to a Drop Zone, the card should feel like it is being pulled toward it.
Give a bonus for streaks. Subtract a penalty for wrong guesses.
- Header: "Open Source AI Language Learning Game"
- Subtitle: "More fun than Duolingo, and free"
- Scoring and life bar should be minimal height


- PWA support for offline use.
- Create two PWA icons, of a head with an empty speech bubble


- Menu bar at the top with these options in large typeface:
     - "About" Link to contents of the attached file about.html.  Do NOT delete anything from this file.
     - "Rules":  Create a page based on the actual rules
     - "Install on Mobile": Create a page with instructions for install on mobile (using PWA).
     - "Home" 
- The menu bar should be visible on all pages`}
          </pre>
          <p>{"You can easily fork the project by editing the prompt, for example to modify the list of sources."}</p>
        </div>
      </main>
    </div>
  )
}
