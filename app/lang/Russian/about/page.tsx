import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="bg-stone-200 border-b border-stone-300 px-2 py-1">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-sm md:text-base font-semibold text-stone-700">Drag and Drop</h1>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/lang/Russian" className="hover:text-stone-600">
              Home
            </Link>
            <Link href="/lang/Russian/rules" className="hover:text-stone-600">
              Rules
            </Link>
            <Link href="/lang/Russian/quotes" className="hover:text-stone-600">
              Quotes
            </Link>
            <Link href="/lang/Russian/install" className="hover:text-stone-600">
              Install
            </Link>
            <Link href="/lang/Russian/about" className="text-stone-900 font-medium">
              About
            </Link>
            <Link href="/lang/Russian/open-source" className="hover:text-stone-600">
              Open Source
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-6">About This Game</h2>

        <div className="space-y-6 text-stone-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">🚀 Powered by Vercel</h3>
            <p>
              This application is built and deployed on <strong>Vercel</strong>, a cloud platform for static sites and
              serverless functions. Vercel enables developers to deploy websites and web services instantly, with
              automatic scaling and zero configuration.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">🎨 Vibe Coding</h3>
            <p>
              This game was created using <strong>vibe coding</strong> — a revolutionary approach to software
              development where you describe what you want in natural language, and AI transforms your vision into
              working code. No traditional programming required!
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">🤖 Learn About AI</h3>
            <p>
              This project serves as a practical example of AI-assisted development. You can use it as a foundation to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Understand how AI can generate functional applications</li>
              <li>Learn about modern web technologies (React, Next.js, TypeScript)</li>
              <li>Experiment with modifying prompts to create your own variations</li>
              <li>Explore the intersection of natural language and code</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">📚 Educational Value</h3>
            <p>
              Beyond language learning, this game demonstrates how AI can democratize software development. Anyone with
              a clear idea can now create functional applications without years of programming training.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
