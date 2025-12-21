import { quotes } from "@/lib/quotes-data"

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-stone-800 text-stone-100 px-4 py-4">
        <div className="container mx-auto">
          <a href="/lang/Russian" className="text-xl font-bold hover:text-stone-300">
            ← Back to Game
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-stone-800">All Quotes</h1>

        <div className="space-y-4">
          {quotes.map((quote) => (
            <div key={quote.id} className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-stone-900 mb-1">{quote.text}</p>
              <p className="text-stone-600 italic text-sm">-- {quote.source}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
