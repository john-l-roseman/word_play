import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="bg-stone-700 text-stone-100 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">About</h1>
          <Link href="/lang/Russian">
            <Button variant="outline" className="bg-stone-600 border-stone-500 hover:bg-stone-500">
              Back to Game
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-6 md:p-8 bg-stone-50 border-stone-300">
          <div className="space-y-6 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-stone-800">About This Game</h2>
              <p>
                This language learning game was created entirely using AI, specifically through Vercel's v0 platform. No
                traditional coding was involved - the entire application was generated from natural language prompts
                describing the desired functionality and design.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">What is Vercel?</h3>
              <p>
                Vercel is a cloud platform for frontend developers, providing the tools and infrastructure to build,
                deploy, and scale modern web applications. Vercel is best known for creating Next.js, the React
                framework used to build this game.
              </p>
              <p className="mt-2">
                With Vercel's v0 AI assistant, anyone can describe an app idea in plain English and watch as it
                generates production-ready code. This democratizes web development, making it accessible to people
                without extensive programming knowledge.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Vibe Coding</h3>
              <p>
                "Vibe coding" is a playful term for this new paradigm of development where you describe the "vibe" or
                feeling you want in your application, and AI translates that into working code. Instead of writing
                functions and debugging syntax errors, you communicate your intent and let AI handle the implementation
                details.
              </p>
              <p className="mt-2">
                This game demonstrates vibe coding in action - from the drag-and-drop mechanics to the audio feedback to
                the PWA capabilities, everything was created by describing the desired experience rather than manually
                coding it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Learning Opportunity</h3>
              <p>This site serves as an excellent base for learning about AI-assisted development:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Explore the Prompt:</strong> Check the "Open Source" page to see the exact prompt used to
                  create this app
                </li>
                <li>
                  <strong>Experiment:</strong> Try modifying the prompt to add new features or change the game mechanics
                </li>
                <li>
                  <strong>Fork the Project:</strong> Use this as a starting point for your own language learning game
                  with different languages or content
                </li>
                <li>
                  <strong>Learn by Doing:</strong> Study how AI interprets natural language requirements and translates
                  them into working code
                </li>
                <li>
                  <strong>Understand AI Capabilities:</strong> See what's possible with current AI tools and where human
                  guidance is still needed
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Technology Stack</h3>
              <p>This game uses modern web technologies including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Next.js 16:</strong> React framework with App Router
                </li>
                <li>
                  <strong>React 19:</strong> Latest React features for optimal performance
                </li>
                <li>
                  <strong>Tailwind CSS v4:</strong> Utility-first CSS framework
                </li>
                <li>
                  <strong>TypeScript:</strong> Type-safe JavaScript
                </li>
                <li>
                  <strong>PWA:</strong> Progressive Web App capabilities for offline use
                </li>
                <li>
                  <strong>Web Audio API:</strong> Browser-native sound generation
                </li>
              </ul>
            </section>

            <section className="bg-stone-200 p-4 rounded-lg border border-stone-300">
              <p className="text-sm">
                <strong>Get Started:</strong> Visit{" "}
                <a
                  href="https://vercel.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>{" "}
                to learn more about the platform and try building your own AI-powered applications!
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
