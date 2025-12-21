import Link from "next/link"
import { quotes } from "@/lib/quotes-data"
import { MobileMenu } from "@/components/mobile-menu"

export default function QuotesPage() {
  const groupedQuotes = quotes.reduce(
    (acc, quote) => {
      if (!acc[quote.source]) acc[quote.source] = []
      acc[quote.source].push(quote)
      return acc
    },
    {} as Record<string, typeof quotes>,
  )

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
            <Link href="/lang/Russian/quotes" className="text-stone-900 font-medium">
              Quotes
            </Link>
            <Link href="/lang/Russian/install" className="hover:text-stone-600">
              Install
            </Link>
            <Link href="/lang/Russian/about" className="hover:text-stone-600">
              About
            </Link>
            <Link href="/lang/Russian/open-source" className="hover:text-stone-600">
              Open Source
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-6">All Quotes ({quotes.length})</h2>

        <div className="space-y-8">
          {Object.entries(groupedQuotes).map(([source, sourceQuotes]) => (
            <section key={source}>
              <h3 className="text-lg font-semibold text-stone-700 mb-3 border-b border-stone-300 pb-2">
                {source} ({sourceQuotes.length})
              </h3>
              <div className="space-y-3">
                {sourceQuotes.map((quote) => (
                  <div key={quote.id} className="bg-stone-50 p-3 rounded border border-stone-200">
                    <p className="text-stone-700">"{quote.english}"</p>
                    <p className="text-stone-500 text-sm italic mt-1">-- {quote.source}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
