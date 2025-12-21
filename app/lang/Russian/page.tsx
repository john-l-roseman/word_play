"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { quotes } from "@/lib/quotes-data"

type Quote = {
  id: number
  text: string
  russian: string
  source: string
}

type MatchState = {
  id: number
  state: "correct" | "incorrect" | null
}

export default function RussianGamePage() {
  const [gameQuotes, setGameQuotes] = useState<Quote[]>([])
  const [russianOrder, setRussianOrder] = useState<number[]>([])
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const [matchStates, setMatchStates] = useState<Map<number, MatchState>>(new Map())
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set())
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    initializeGame()
    // Initialize audio context on user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext()
      }
    }
    document.addEventListener("click", initAudio, { once: true })
    return () => document.removeEventListener("click", initAudio)
  }, [])

  const initializeGame = () => {
    const sortedQuotes = [...quotes].sort((a, b) => a.text.length - b.text.length)
    const startIdx = Math.floor(Math.random() * Math.max(0, sortedQuotes.length - 8))
    const selectedQuotes = sortedQuotes.slice(startIdx, startIdx + 8)

    setGameQuotes(selectedQuotes)
    const shuffled = [...selectedQuotes.map((q) => q.id)].sort(() => Math.random() - 0.5)
    setRussianOrder(shuffled)
    setMatchedIds(new Set())
    setMatchStates(new Map())
  }

  const playSuccess = () => {
    if (!audioContextRef.current) return
    const ctx = audioContextRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.frequency.value = 800
    gain.gain.value = 0.1

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.1)
  }

  const playError = () => {
    if (!audioContextRef.current) return
    const ctx = audioContextRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = "sawtooth"
    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.frequency.setValueAtTime(200, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
    gain.gain.value = 0.1

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.2)
  }

  const handleDragStart = (e: React.DragEvent, id: number) => {
    setDraggedId(id)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleTouchStart = (id: number) => {
    setDraggedId(id)
  }

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault()
    if (draggedId === null || matchedIds.has(draggedId) || matchedIds.has(targetId)) return

    checkMatch(draggedId, targetId)
    setDraggedId(null)
  }

  const handleTouchEnd = (targetId: number) => {
    if (draggedId === null || matchedIds.has(draggedId) || matchedIds.has(targetId)) return

    checkMatch(draggedId, targetId)
    setDraggedId(null)
  }

  const checkMatch = (russianId: number, englishId: number) => {
    const isCorrect = russianId === englishId

    const newMatchStates = new Map(matchStates)
    newMatchStates.set(russianId, { id: russianId, state: isCorrect ? "correct" : "incorrect" })
    newMatchStates.set(englishId, { id: englishId, state: isCorrect ? "correct" : "incorrect" })
    setMatchStates(newMatchStates)

    if (isCorrect) {
      playSuccess()
      const newStreak = streak + 1
      setStreak(newStreak)
      const points = 10 + (newStreak > 1 ? newStreak * 5 : 0)
      setScore(score + points)

      setTimeout(() => {
        setMatchedIds((prev) => new Set([...prev, russianId]))
        setMatchStates(new Map())

        if (matchedIds.size + 1 === gameQuotes.length) {
          setTimeout(() => initializeGame(), 500)
        }
      }, 300)
    } else {
      playError()
      setStreak(0)
      setScore(Math.max(0, score - 5))

      setTimeout(() => {
        setMatchStates(new Map())
      }, 300)
    }
  }

  const resetScore = () => {
    setScore(0)
    setStreak(0)
    initializeGame()
  }

  const getRussianQuote = (id: number) => gameQuotes.find((q) => q.id === id)
  const getEnglishQuote = (id: number) => gameQuotes.find((q) => q.id === id)

  const getCardClass = (id: number) => {
    const matchState = matchStates.get(id)
    if (matchState?.state === "correct") return "bg-green-600 text-white"
    if (matchState?.state === "incorrect") return "bg-red-600 text-white"
    if (matchedIds.has(id)) return "opacity-0"
    return "bg-stone-200 text-stone-900 hover:bg-stone-300"
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Header */}
      <header className="bg-stone-800 text-stone-100 px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-lg font-bold">Drag and Drop</h1>

          <div className="flex items-center gap-4 text-sm">
            <span>Score: {score}</span>
            <span>Streak: {streak}</span>
            <Button onClick={resetScore} variant="secondary" size="sm" className="h-7 px-2 text-xs">
              Reset
            </Button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="/lang/Russian" className="hover:text-stone-300">
              Home
            </a>
            <a href="/lang/Russian/rules" className="hover:text-stone-300">
              Rules
            </a>
            <a href="/lang/Russian/quotes" className="hover:text-stone-300">
              Quotes
            </a>
            <a href="/lang/Russian/open-source" className="hover:text-stone-300">
              Open Source
            </a>
            <a href="/lang/Russian/install" className="hover:text-stone-300">
              Install on Mobile
            </a>
            <a href="/lang/Russian/about" className="hover:text-stone-300">
              About
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-2">
            <a href="/lang/Russian" className="text-lg hover:text-stone-300">
              Home
            </a>
            <a href="/lang/Russian/rules" className="text-lg hover:text-stone-300">
              Rules
            </a>
            <a href="/lang/Russian/quotes" className="text-lg hover:text-stone-300">
              Quotes
            </a>
            <a href="/lang/Russian/open-source" className="text-lg hover:text-stone-300">
              Open Source
            </a>
            <a href="/lang/Russian/install" className="text-lg hover:text-stone-300">
              Install on Mobile
            </a>
            <a href="/lang/Russian/about" className="text-lg hover:text-stone-300">
              About
            </a>
          </nav>
        )}
      </header>

      {/* Game Board */}
      <main className="container mx-auto px-2 py-4 md:px-4 md:py-8">
        <div className="grid grid-cols-2 gap-2 md:gap-6 max-w-6xl mx-auto">
          {/* Russian Column */}
          <div className="flex flex-col gap-2">
            {russianOrder.map((id) => {
              const quote = getRussianQuote(id)
              if (!quote || matchedIds.has(id)) return null

              return (
                <Card
                  key={`russian-${id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, id)}
                  onTouchStart={() => handleTouchStart(id)}
                  className={`p-2 md:p-4 cursor-move transition-all duration-300 ${getCardClass(id)} text-xs md:text-base`}
                >
                  {quote.russian}
                </Card>
              )
            })}
          </div>

          {/* English Column */}
          <div className="flex flex-col gap-2">
            {gameQuotes.map((quote) => {
              if (matchedIds.has(quote.id)) return null

              return (
                <Card
                  key={`english-${quote.id}`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, quote.id)}
                  onTouchEnd={() => handleTouchEnd(quote.id)}
                  className={`p-2 md:p-4 transition-all duration-300 ${getCardClass(quote.id)} text-xs md:text-base`}
                >
                  <div>
                    {quote.text}
                    <div className="mt-1 italic text-stone-600">-- {quote.source}</div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
