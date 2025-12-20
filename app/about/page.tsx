import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card border-b border-border p-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors">
          Drag and Drop
        </Link>
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About This Project</h1>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Built with Vercel & v0</h2>
            <p className="mb-4">
              This language learning game was created using{" "}
              <a href="https://v0.dev" className="text-accent hover:underline font-medium">
                v0
              </a>
              , an AI-powered tool by{" "}
              <a href="https://vercel.com" className="text-accent hover:underline font-medium">
                Vercel
              </a>
              . v0 transforms natural language prompts into fully functional web applications, making it possible to
              build sophisticated apps without writing code manually.
            </p>
            <p>
              <strong>Vercel</strong> is a platform for frontend developers that provides the tools, workflows, and
              infrastructure to build and deploy modern web applications. With v0, Vercel brings AI-assisted development
              to everyone, democratizing app creation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What is "Vibe Coding"?</h2>
            <p className="mb-4">
              "Vibe coding" is a new paradigm where you describe <em>what you want</em> instead of{" "}
              <em>how to build it</em>. Instead of writing code line by line, you communicate your vision through
              natural language, and AI translates that into working software. This game is a perfect example—the entire
              application was generated from a detailed prompt describing the gameplay, visual design, and
              functionality.
            </p>
            <p>
              This approach makes development more accessible, allowing creators to focus on design and user experience
              while AI handles the technical implementation. It's particularly powerful for prototyping, learning, and
              building educational tools like this one.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Learning Opportunity</h2>
            <p className="mb-4">
              This project is an excellent starting point for learning about AI-assisted development. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Study the prompt used to generate this app (see "How to Build")</li>
              <li>Fork the project and modify the prompt to create your own version</li>
              <li>Experiment with different phrase sources, languages, or game mechanics</li>
              <li>Learn how AI interprets requirements and translates them into code</li>
              <li>Understand the structure of modern web apps built with Next.js and React</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Technical Stack</h2>
            <p className="mb-4">Under the hood, this app uses modern web technologies:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Next.js 16:</strong> React framework for production-grade applications
              </li>
              <li>
                <strong>React 19:</strong> Component-based UI library
              </li>
              <li>
                <strong>TypeScript:</strong> Type-safe JavaScript
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Utility-first styling
              </li>
              <li>
                <strong>Web Audio API:</strong> Native browser audio for sound effects
              </li>
              <li>
                <strong>PWA Support:</strong> Progressive Web App for offline functionality
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
            <p>
              Ready to build your own version? Visit{" "}
              <a href="https://v0.dev" className="text-accent hover:underline font-medium">
                v0.dev
              </a>{" "}
              and start creating with AI. Check out the "How to Build" page to see the exact prompt used for this app,
              and use it as a template for your own projects. The future of development is conversational—join in and
              see what you can build!
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
