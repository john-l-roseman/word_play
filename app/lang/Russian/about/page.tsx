export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-stone-800 mb-6">About This Game</h1>

      <div className="space-y-6 text-stone-700">
        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Built with Vercel v0</h2>
          <p className="mb-3">
            This language learning game was created using <strong>Vercel v0</strong>, an AI-powered development platform
            that transforms natural language prompts into fully functional web applications.
          </p>
          <p>
            Vercel is a cloud platform for frontend frameworks and static sites, built to integrate with headless
            content, commerce, or database. It provides an exceptional developer experience with features like automatic
            deployments, serverless functions, and edge caching.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">What is Vibe Coding?</h2>
          <p className="mb-3">
            <strong>Vibe coding</strong> is a new paradigm where developers describe what they want to build in natural
            language, and AI translates these descriptions into working code. Instead of writing every line manually,
            you collaborate with AI to bring your ideas to life.
          </p>
          <p>
            This approach democratizes software development, allowing people with varying levels of technical expertise
            to create sophisticated applications while learning programming concepts along the way.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Learning Opportunity</h2>
          <p className="mb-3">
            This game serves as an excellent starting point for learning about AI-assisted development:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Study the source code to understand React and Next.js patterns</li>
            <li>Modify the quote dataset to create your own language learning game</li>
            <li>Experiment with the prompts to see how AI interprets different instructions</li>
            <li>Add new features like additional languages, difficulty levels, or game modes</li>
            <li>Learn about Progressive Web Apps (PWAs) and offline functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <strong>Next.js</strong> - React framework for production
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Utility-first CSS framework
            </li>
            <li>
              <strong>Web Audio API</strong> - Sound effects for feedback
            </li>
            <li>
              <strong>PWA</strong> - Install on mobile for offline use
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe JavaScript
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
