export default function HowToBuildPage() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert prose-stone">
        <p className="text-stone-300">
          This app was constructed with no coding, using only the chatbot at{" "}
          <a href="https://v0.app" className="text-blue-400 hover:underline">
            https://v0.app
          </a>
          .
        </p>
        <p className="text-stone-300">Here is the prompt that was used to create the app:</p>
        <br />
        <pre className="bg-stone-800 p-4 rounded-lg text-sm text-stone-200 overflow-x-auto whitespace-pre-wrap">
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
Be sure to preserve commas in the phrases. Every English phrase must be a full, complete sentence or quote with proper punctuation. Do not truncate any text. Verify all entries are complete before finishing.


Create a phrase dataset with these fields:  the phrase, the translation of the phrase into French, the source.


An English card contains the entire phrase text and the source (in a div with no blank vertical space), in this format:
Phrase Text, followed by a line break, and then "-- Source" in italics.


The corresponding French card contains only the translated phrase.
Layout:
To start a new game:
1. Take eight cards from the sorted dataset.
2. Sort all phrases by their English length and select a contiguous window of 8 adjacent phrases. This ensures all displayed phrases have nearly identical lengths, making it impossible to match by size alone.
3. Two vertical columns with a gap in the middle. No column headers.
Display both columns side-by-side on mobile with smaller cards.
   * Left Column: A list of 8 'Draggable Cards' (English word cards).
   * Right Column: A list of 8  'Drop Zone Cards' (French word cards). The Drop Zone cards should be shuffled in relation to the Draggable Cards, so the correct answer does not line up across from its English version.
Interaction Visuals and Audio
   * If a match is successful, the cards should turn green and disappear + pleasant soft  ka-ching sound.
   * If a match is wrong, the card should flash red and go back to its place in the left column + short buzzer using Web Audio API-generated sound ( a  sawtooth wave that drops from 200Hz to 100Hz over 0.2 seconds)
   * When you get close to a Drop Zone, the card should feel like it is being pulled toward it.
   * Add touch event handlers to support mobile devices.
Give a bonus for streaks. Subtract a penalty for wrong guesses.
Scoring accumulates from game to game.
Don't pop-up any windows.
- Header: "Open Source AI Language Learning Game"
- Scoring and "life bar" should be minimal height


Muted color scheme with grays and browns.


- PWA support for offline use.
- Create two PWA icons that are installed on mobile: of a stylized head with an empty speech bubble


- Menu bar at the top with these options in large typeface:
     - "How to Build": Link to contents of the attached file how-to.html.  Do NOT delete anything from this file.
     - "Rules":  Create a page based on the actual rules
     - "Install on Mobile": Create a page with instructions for install on mobile (using PWA).
     - "About": Create a page describing Vercel and the concept of vibe coding a game. Describe the opportunity to use this site as a base for learning about AI.
     - "Home" 
- The menu bar should be visible on all pages
- The menu bar should be split into two lines on mobile if it does not fit.`}
        </pre>
        <p className="text-stone-300 mt-4">
          You can easily fork the project by editing the prompt, for example to modify the list of sources.
        </p>
      </div>
    </main>
  )
}
