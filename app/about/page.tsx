import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/rules" className="hover:text-primary transition-colors">
            Rules
          </Link>
          <Link href="/install" className="hover:text-primary transition-colors">
            Install on Mobile
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-balance">About This Game</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            This app was constructed with no coding, using only the chatbot at{" "}
            <a href="https://vercel.com" className="text-primary hover:underline">
              https://vercel.com
            </a>
            .
          </p>

          <p>Here is the prompt that was used to create the app:</p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
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

Layout & Design:

- Header: "Open Source AI Language Learning Game"
- Subtitle:: "More fun than Duolingo, and free"

Game Design:
- Score display: Current Score, Streak (with fire emoji), and High Score
- Source label below in small italic text (e.g., "—The Bible", "—Shakespeare") inside the same block as the English phrase.
- Four Russian option cards below in a 2x2 grid
- One Russian card is the correct translation, the 3 wrong answer cards should be all different. 
- Each of the three wrong answers is formed using the correct answer as a base:
* Each wrong answer should have exactly one word from the correct answer that is replaced by a different word. The replacement word should match the part of speech of the original word: replace nouns with nouns and verbs with verbs. The replacement word should not be related in any way to the original word in the correct answer.
* Don't replace the first word of the correct answer.
* When generating a replacement word, ensure it's NOT the same as the word in the correct answer that is being replaced.
* Besides the single word being replaced, the wrong answers should be identical to the correct answer.
* Ensure that every wrong answer is different.

Add a button next to the "New Words" button called "Turn on tips". 
* Systematically extract and translate every single individual word from the Russian blocks (correct and wrong choices).
* Create a word-by-word translation dictionary of all words in the Russian choices using a comprehensive Russian-English dictionary..
* By default there are no tooltips.
* After the "Turn on Tips" button is pushed, each individual Russian word in both correct and incorrect answers should have its own hover tooltip showing the English translation of that word. 
* The Russian words with tooltips should look clean without any visible underline indication, but the tooltips will appear when you hover over each individual word.
* Be sure that the translation tooltip corresponds to the word under the hover.
* After the "Turn on Tips" button is pushed, the button disappears.  It reappears when the next phrase is displayed.
* If the "Turn on Tips" button is pushed, reset streak to 0
* When you click "Turn on Tips" on mobile devices, all tooltips should be displayed immediately without requiring hover. On desktop, the original hover behavior is preserved. The component detects mobile devices using screen width and touch support to determine which behavior to use.

Add a button next to "Turn on Tips" called "Reset score".
* Reset the High Score to zero

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
- Each round randomly selects 1 English phrase with 4 Russian cards (1 correct, 3 wrong)
- The Russian phrases should be shuffled each time so the correct answer is in a random place.
- Click a Russian option to submit answer

Audio Feedback:
- Use Web Audio API to generate audio feedback
- Success: Play a short, pleasant "ding" sound
- Error: Play a short buzz (lower pitched, 200Hz for 300ms)
- Quiet sound level

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
- Service worker registration in layout.tsx

- Menu bar at the top with these options in large typeface:
     - "About" Link to contents of the attached file about.html.  Do NOT delete anything from this file.
     - "Rules" :  Create a page based on the actual rules
     - "Install on Mobile": Create a page with instructions for install on mobile (using PWA).
     - "Home" 
- The menu bar should be visible on all pages`}
          </pre>

          <p className="mt-6">
            You can easily fork the project by editing the prompt, for example to modify the list of sources.
          </p>
        </div>
      </main>
    </div>
  )
}
