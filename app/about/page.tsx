import { Header } from "@/components/header"

export const metadata = {
  title: "About - word-play.org",
  description: "Learn about word-play.org",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <p className="mb-4">
            This app was constructed with no coding, using only the chatbot at{" "}
            <a
              href="https://vercel.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
            .
          </p>

          <p className="mb-4">Here is the prompt that was used to create the app:</p>

          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
            {`Find interesting modern English phrases up to 20 words each from these sources:
- 20 from the Quran 
- 20 from Bible
- 20 from Talmud
- 5 from US Bill of Rights
- 5 from US Declaration of Independence
- 10 from Mao's Little Red Book
- 10 from Confucius sayings
- 5 from Karl Marx
- 8 from Vladimir Lenin
- 5 from Albert Einstein
- 20 humorous/clever observations
- 10 from Shakespeare
- 10 from Mark Twain
- 5 from Winston Churchill
- 5 from Oscar Wilde
Be sure to preserve commas in the phrases.


Layout & Design:
- Menu bar at the top with these options:
     - "About" Link to contents of the attached file about.html.  Do NOT delete anything from this file.
     - "Rules" :  Create a page based on the actual rules
     - "Home" 
- The menu bar should be visible on all pages


- Header: "word-play.org" (large, bold) 
- Subtitle left side: "Open Source AI Language Learning Game"
- Subtitle right side:: "More fun than Duolingo, and free forever"




Game Design:
- Score display: Current Score, Streak (with fire emoji), and High Score
- Source label below in small italic text (e.g., "—The Bible", "—Shakespeare") inside the same block as the English phrase.
- Four French option cards below in a 2x2 grid
- One French card is the correct translation, the 3 wrong answer cards should be all different. 
- Each of the three wrong answers is formed using the correct answer as a base:
* Each wrong answer should have exactly one word from the correct answer that is replaced by a different word. The replacement word should match the part of speech of the original word: replace nouns with nouns and verbs with verbs. The replacement word should not be related in any way to the original word in the correct answer.
* Don't replace the first word of the correct answer.
* When generating a replacement word, ensure it's NOT the same as the word in the correct answer that is being replaced.
* Besides the single word being replaced, the wrong answers should be identical to the correct answer.
* Ensure that every wrong answer is different.
* Add a button next to the "New Words" button called "Turn on tips". 
* Systematically extract and translate every single individual word from the French blocks (correct and wrong choices).
* Create a word-by-word translation dictionary of all words in the French choices using a comprehensive French-English dictionary..
* By default there are no tooltips.
* After the "Turn on Tips" button is pushed, each individual French word in both correct and incorrect answers should have its own hover tooltip showing the English translation of that word. 
* The French words with tooltips should look clean without any visible underline indication, but the tooltips will appear when you hover over each individual word.
* Be sure that the translation tooltip corresponds to the word under the hover.
* After the "Turn on Tips" button is pushed, the button disappears.  It reappears when the next phrase is displayed.
* If the "Turn on Tips" button is pushed, reset streak to 0


Card styling:
- Light gray (#F3F4F6) default with rounded corners
- Dark gray (#374151) when selected
- Green (#22C55E) for correct answer
- Red (#EF4444) with shake animation for wrong answer
- Two buttons at bottom: "Restart" (resets current words) and "New Words" (loads new set)
- After wrong answers, show "Continue" button (no automatic delay)
- Single small text-only Google AdSense ad unit at bottom left
- Footer with Creative Commons license: "CC BY-SA 4.0 Attribution-ShareAlike (attribute to word-play.org)" linking to https://creativecommons.org/licenses/by-sa/4.0/ at bottom right


Play action:
- Each round randomly selects 1 English phrase with 4 French cards (1 correct, 3 wrong)
- The French phrases should be shuffled each time so the correct answer is in a random place.
- Click a French option to submit answer


Audio Feedback:
- Use Web Audio API to generate audio feedback
- Success: Play a short, pleasant "ding" sound
- Error: Play a short buzz (lower pitched, 200Hz for 300ms)


- Correct answer:
- +100 points base
- +100 points per consecutive streak
- Play short, pleasant "ding" sound
- Highlight selected card green, auto-advance after 1.5 seconds


- Wrong answer:
- Lose 1 mistake (game over at 4 mistakes)
- Reset streak to 0
- Shake animation on wrong card, 
- Show wrong (selected) card in red,
- Show correct answer card in green
- Show "Continue" button (user must click to proceed)


Audio Feedback:
- Use Web Audio API to generate audio feedback
- Success: Play a pleasant two-tone chime (higher pitched, 523Hz + 659Hz for 200ms)
- Error: Play a short buzz (lower pitched, 200Hz for 300ms)


- Game completion bonus: 50 points per remaining mistake
- High score persists in localStorage
- "New Words" button randomly selects 8 phrases from the phrase bank


Tech Stack:
- React, Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion
- Google AdSense integration:
- Publisher ID: ca-pub-2063007657687079
- Placeholder slot ID: 1234567890 (to be replaced)


- PWA support for offline use:
- /public/manifest.json with app metadata
- /public/sw.js service worker caching all assets
- Service worker registration in layout.tsx`}
          </pre>

          <p className="mt-4">
            You can easily fork the project by editing the prompt, for example to modify the list of sources.
          </p>
        </div>
      </main>
    </div>
  )
}
