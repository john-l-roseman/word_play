export default function AboutPage() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-100 mb-6">About This Project</h1>

        <div className="space-y-8 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Built with Vercel & v0</h2>
            <p className="mb-4">
              This language learning game was created using{" "}
              <a href="https://v0.app" className="text-blue-400 hover:underline font-semibold">
                v0
              </a>
              , an AI-powered development tool by{" "}
              <a href="https://vercel.com" className="text-blue-400 hover:underline font-semibold">
                Vercel
              </a>
              . The entire application was generated through natural language prompts—no manual coding required.
            </p>
            <p>
              Vercel is a cloud platform for deploying and hosting modern web applications, with built-in support for
              Next.js, React, and other popular frameworks. v0 leverages AI to transform your ideas into
              production-ready code instantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">The Concept of "Vibe Coding"</h2>
            <p className="mb-4">
              This project demonstrates the power of <strong className="text-stone-100">"vibe coding"</strong>—
              describing what you want to build in natural language and letting AI handle the implementation details.
              Instead of writing thousands of lines of code, you simply describe the game mechanics, visual design, and
              user experience you envision.
            </p>
            <p>The result is a fully functional Progressive Web App with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Drag-and-drop interactions with touch support</li>
              <li>Web Audio API-generated sound effects</li>
              <li>Responsive design for mobile and desktop</li>
              <li>Offline PWA capabilities</li>
              <li>Persistent score tracking</li>
              <li>Multi-page navigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Learning Opportunity</h2>
            <p className="mb-4">This open-source project serves as an excellent learning resource for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-stone-100">AI-Assisted Development:</strong> See how AI can transform ideas into
                functional applications
              </li>
              <li>
                <strong className="text-stone-100">Modern Web Technologies:</strong> Explore Next.js, React, TypeScript,
                and Tailwind CSS
              </li>
              <li>
                <strong className="text-stone-100">Progressive Web Apps:</strong> Understand PWA implementation with
                offline support
              </li>
              <li>
                <strong className="text-stone-100">Interactive UI/UX:</strong> Study drag-and-drop interactions,
                animations, and audio feedback
              </li>
              <li>
                <strong className="text-stone-100">Prompt Engineering:</strong> Learn how to effectively describe
                complex features to AI
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-100 mb-4">Fork & Customize</h2>
            <p className="mb-4">
              You can use this project as a foundation for your own language learning apps or similar interactive games.
              Simply modify the prompt to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Change the phrase sources (add poetry, movie quotes, technical terms, etc.)</li>
              <li>Support different language pairs (Spanish-German, Japanese-English, etc.)</li>
              <li>Adjust the game mechanics (matching, fill-in-the-blank, multiple choice)</li>
              <li>Modify the visual design and color scheme</li>
              <li>Add new features like user accounts, leaderboards, or achievement systems</li>
            </ul>
            <p className="mt-4">
              Visit the{" "}
              <a href="/how-to-build" className="text-blue-400 hover:underline font-semibold">
                How to Build
              </a>{" "}
              page to see the exact prompt used to create this application.
            </p>
          </section>

          <section className="bg-stone-800 p-6 rounded-lg border border-stone-700">
            <h3 className="text-xl font-semibold text-stone-100 mb-3">Get Started</h3>
            <p className="mb-4">Ready to build your own AI-powered applications?</p>
            <div className="space-y-2">
              <a
                href="https://v0.app"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Try v0 →
              </a>
              <br />
              <a href="https://vercel.com" className="inline-block text-blue-400 hover:underline">
                Learn more about Vercel →
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
