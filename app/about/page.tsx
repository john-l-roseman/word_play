import { Menu } from "@/components/menu"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <Menu />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-200 mb-6">About This Project</h1>

          <div className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Built with Vercel v0</h2>
              <p className="mb-4">
                This language learning game was created using <strong>Vercel v0</strong>, an AI-powered development tool
                that transforms natural language prompts into production-ready web applications. No traditional coding
                was required - the entire application was generated through conversational AI.
              </p>
              <p>
                Vercel v0 leverages cutting-edge AI technology to understand your requirements and generate complete,
                functional applications with modern frameworks like Next.js, React, and Tailwind CSS. It&apos;s a
                glimpse into the future of software development, where ideas can be rapidly prototyped and deployed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-3">
                What is &quot;Vibe Coding&quot;?
              </h2>
              <p className="mb-4">
                <strong>Vibe coding</strong> represents a paradigm shift in software development. Instead of writing
                code line by line, you describe what you want to build in natural language - the &quot;vibe&quot; or
                essence of your application. The AI interprets your intent and generates the implementation.
              </p>
              <p>
                This approach democratizes software development, making it accessible to designers, product managers,
                educators, and anyone with an idea. It also accelerates development for experienced engineers by
                handling boilerplate and common patterns automatically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Learning Opportunity</h2>
              <p className="mb-4">
                This open-source project serves as an excellent learning resource for understanding AI-assisted
                development. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Study the generated code to learn modern web development practices</li>
                <li>Modify the prompt to create your own variations</li>
                <li>Experiment with adding new features using AI assistance</li>
                <li>Understand how AI interprets requirements and makes implementation decisions</li>
                <li>Learn about Progressive Web Apps (PWAs) and offline functionality</li>
                <li>Explore React patterns, state management, and component architecture</li>
              </ul>
              <p>
                The &quot;How to Build&quot; page shows the exact prompt used to create this application, giving you a
                template for your own AI-assisted projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-3">Technology Stack</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Next.js 16</strong> - React framework with App Router
                </li>
                <li>
                  <strong>React 19</strong> - Component-based UI library
                </li>
                <li>
                  <strong>Tailwind CSS</strong> - Utility-first styling
                </li>
                <li>
                  <strong>TypeScript</strong> - Type-safe JavaScript
                </li>
                <li>
                  <strong>PWA</strong> - Installable, offline-capable web app
                </li>
                <li>
                  <strong>Web Audio API</strong> - Dynamic sound generation
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">🚀 Get Started</h3>
              <p className="text-sm">
                Visit{" "}
                <a href="https://v0.dev" className="underline font-semibold">
                  v0.dev
                </a>{" "}
                to start building your own AI-generated applications. Fork this project, modify the prompt, and create
                your own unique learning game!
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
