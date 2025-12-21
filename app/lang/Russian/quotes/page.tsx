import { quotes } from "@/lib/quotes-data"

export default function QuotesPage() {
  const groupedQuotes = quotes.reduce(
    (acc, quote) => {
      if (!acc[quote.source]) {
        acc[quote.source] = []
      }
      acc[quote.source].push(quote)
      return acc
    },
    {} as Record<string, typeof quotes>,
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-stone-800 mb-6">All Quotes</h1>

      <div className="space-y-8">
        {Object.entries(groupedQuotes).map(([source, sourceQuotes]) => (
          <section key={source}>
            <h2 className="text-lg font-semibold text-amber-800 mb-3 border-b border-stone-300 pb-1">
              {source} ({sourceQuotes.length})
            </h2>
            <ul className="space-y-3">
              {sourceQuotes.map((quote) => (
                <li key={quote.id} className="bg-stone-100 rounded-lg p-3">
                  <p className="text-stone-800 text-sm">{quote.english}</p>
                  <p className="text-stone-600 text-xs italic mt-1">{quote.russian}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
