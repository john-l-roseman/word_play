import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { quotes } from "../quotes-data"

export default function QuotesPage() {
  // Group quotes by source category
  const groupedQuotes = {
    "Religious Texts": quotes.filter(
      (q) =>
        q.source.includes("Quran") ||
        q.source.includes("Bible") ||
        q.source.includes("Talmud") ||
        q.source.includes("Bhagavad Gita"),
    ),
    "Historical Documents": quotes.filter(
      (q) => q.source.includes("US Bill of Rights") || q.source.includes("US Declaration"),
    ),
    "Political Philosophy": quotes.filter(
      (q) =>
        q.source.includes("Mao") ||
        q.source.includes("Marx") ||
        q.source.includes("Lenin") ||
        q.source.includes("Che Guevara"),
    ),
    "Classical Wisdom": quotes.filter((q) => q.source.includes("Confucius")),
    "Science & Philosophy": quotes.filter((q) => q.source.includes("Einstein")),
    Literature: quotes.filter(
      (q) => q.source.includes("Shakespeare") || q.source.includes("Mark Twain") || q.source.includes("Oscar Wilde"),
    ),
    Statesmen: quotes.filter((q) => q.source.includes("Churchill") || q.source.includes("Benjamin Franklin")),
    "Humor & Wit": quotes.filter(
      (q) => q.source.includes("Anonymous") || q.source.includes("Voltaire") || q.source.includes("Proverb"),
    ),
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="bg-stone-700 text-stone-100 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">All Quotes</h1>
          <Link href="/lang/Russian">
            <Button variant="outline" className="bg-stone-600 border-stone-500 hover:bg-stone-500">
              Back to Game
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {Object.entries(groupedQuotes).map(([category, categoryQuotes]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-4 text-stone-800">{category}</h2>
              <div className="space-y-3">
                {categoryQuotes.map((quote) => (
                  <Card key={quote.id} className="p-4 bg-stone-50 border-stone-300">
                    <p className="text-stone-800">{quote.english}</p>
                    <p className="text-sm text-stone-600 italic mt-1">— {quote.source}</p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
