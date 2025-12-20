import { MenuBar } from "@/components/menu-bar"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <MenuBar />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-6">{"About This Project"}</h1>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Built with Vercel"}</h2>
              <p>
                {"This language learning game was created using "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 font-semibold hover:underline"
                >
                  {"Vercel"}
                </a>
                {
                  ", a powerful platform that combines the best developer experience with a focus on end-user performance. Vercel provides seamless deployment, instant previews, and edge network delivery to ensure this app loads fast anywhere in the world."
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"The Power of Vibe Coding"}</h2>
              <p className="mb-4">
                {
                  'This entire application was constructed through "vibe coding" - a revolutionary approach where you describe what you want to build in natural language, and AI transforms your vision into working code. No traditional programming required!'
                }
              </p>
              <p className="mb-4">
                {"The concept of vibe coding represents a paradigm shift in software development:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{"Express your ideas in plain English instead of learning complex syntax"}</li>
                <li>{"Iterate rapidly by refining your descriptions"}</li>
                <li>{"Focus on creativity and problem-solving rather than implementation details"}</li>
                <li>{"Lower the barrier to entry for creating sophisticated applications"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Learning Opportunity"}</h2>
              <p className="mb-4">
                {"This project serves as an excellent base for learning about AI-assisted development. You can:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{"Study the generated code to understand modern web development patterns"}</li>
                <li>{"Experiment with modifying the prompt to create variations"}</li>
                <li>{"Learn how AI interprets requirements and translates them into functional applications"}</li>
                <li>{"Understand Progressive Web App (PWA) architecture"}</li>
                <li>{"Explore React, Next.js, and modern JavaScript/TypeScript"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Technology Stack"}</h2>
              <p className="mb-2">{"This app leverages cutting-edge web technologies:"}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>{"Next.js 16"}</strong>
                  {" - React framework with server components"}
                </li>
                <li>
                  <strong>{"React 19"}</strong>
                  {" - Modern UI library"}
                </li>
                <li>
                  <strong>{"TypeScript"}</strong>
                  {" - Type-safe JavaScript"}
                </li>
                <li>
                  <strong>{"Tailwind CSS v4"}</strong>
                  {" - Utility-first styling"}
                </li>
                <li>
                  <strong>{"dnd-kit"}</strong>
                  {" - Accessible drag-and-drop"}
                </li>
                <li>
                  <strong>{"Web Audio API"}</strong>
                  {" - Browser-native sound generation"}
                </li>
                <li>
                  <strong>{"PWA"}</strong>
                  {" - Progressive Web App with offline support"}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 mb-3">{"Open Source Philosophy"}</h2>
              <p>
                {"This game is open source in spirit - the prompt that created it is freely available (see "}
                <Link href="/how-to-build" className="text-stone-900 font-semibold hover:underline">
                  {"How to Build"}
                </Link>
                {
                  "), allowing anyone to fork, modify, and create their own versions. You could easily adapt it for different languages, different phrase sources, or completely different educational content."
                }
              </p>
            </section>

            <section className="bg-stone-50 border-l-4 border-stone-600 p-4 rounded">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{"Get Started"}</h3>
              <p>
                {"Ready to build your own AI-powered application? Visit "}
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 font-semibold hover:underline"
                >
                  {"v0.dev"}
                </a>
                {" to start creating with natural language prompts, or explore "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 font-semibold hover:underline"
                >
                  {"Vercel"}
                </a>
                {" to learn about deploying modern web applications."}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
