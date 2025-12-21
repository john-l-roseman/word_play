"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { Menu, X, RotateCcw } from "lucide-react"
import Link from "next/link"
import { quotes, type Quote } from "@/lib/quotes-data"

export function LanguageGame() {
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(5)
  const [menuOpen, setMenuOpen] = useState(false)
  const [gameQuotes, setGameQuotes] = useState<Quote[]>([])
  const [shuffledRussian, setShuffledRussian] = useState<Quote[]>([])
  const [draggedItem, setDraggedItem] = useState<Quote | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set())
  const [flashState, setFlashState] = useState<{ id: number; type: "correct" | "wrong" } | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const [touchDragging, setTouchDragging] = useState(false)
  const [touchPosition, setTouchPosition] = useState<{ x: number; y: number } | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const dropZoneRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      )()
    }
    return audioContextRef.current
  }, [])

  const playCorrectSound = useCallback(() => {
    const ctx = initAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    oscillator.frequency.setValueAtTime(800, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1)
    oscillator.type = "sine"
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.3)
  }, [initAudioContext])

  const playWrongSound = useCallback(() => {
    const ctx = initAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
    oscillator.type = "sawtooth"
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.2)
  }, [initAudioContext])

  const startNewRound = useCallback((index?: number) => {
    const sortedQuotes = [...quotes].sort((a, b) => a.english.length - b.english.length)
    const maxStart = Math.max(0, sortedQuotes.length - 8)
    const newStartIndex = index !== undefined ? index : Math.floor(Math.random() * maxStart)
    setStartIndex(newStartIndex)
    const selectedQuotes = sortedQuotes.slice(newStartIndex, newStartIndex + 8)
    setGameQuotes(selectedQuotes)
    const shuffled = [...selectedQuotes].sort(() => Math.random() - 0.5)
    setShuffledRussian(shuffled)
    setMatchedIds(new Set())
  }, [])

  useEffect(() => {
    startNewRound()
  }, [startNewRound])

  useEffect(() => {
    const remainingQuotes = gameQuotes.filter((q) => !matchedIds.has(q.id))
    if (remainingQuotes.length === 0 && gameQuotes.length > 0) {
      setTimeout(() => {
        const sortedQuotes = [...quotes].sort((a, b) => a.english.length - b.english.length)
        const maxStart = Math.max(0, sortedQuotes.length - 8)
        const newStartIndex = Math.floor(Math.random() * maxStart)
        startNewRound(newStartIndex)
      }, 500)
    }
  }, [matchedIds, gameQuotes, startNewRound])

  const handleDragStart = (quote: Quote) => {
    setDraggedItem(quote)
  }

  const handleDrop = (targetQuote: Quote) => {
    if (!draggedItem) return

    if (draggedItem.id === targetQuote.id) {
      playCorrectSound()
      setFlashState({ id: targetQuote.id, type: "correct" })
      setTimeout(() => {
        setMatchedIds((prev) => new Set([...prev, targetQuote.id]))
        setFlashState(null)
      }, 300)
      const streakBonus = streak >= 2 ? streak * 5 : 0
      setScore((prev) => prev + 10 + streakBonus)
      setStreak((prev) => prev + 1)
    } else {
      playWrongSound()
      setFlashState({ id: targetQuote.id, type: "wrong" })
      setTimeout(() => setFlashState(null), 300)
      setScore((prev) => Math.max(0, prev - 5))
      setStreak(0)
      setLives((prev) => Math.max(0, prev - 1))
    }
    setDraggedItem(null)
  }

  const handleTouchStart = (e: React.TouchEvent, quote: Quote) => {
    e.preventDefault()
    const touch = e.touches[0]
    setDraggedItem(quote)
    setTouchDragging(true)
    setTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchDragging) return
    e.preventDefault()
    const touch = e.touches[0]
    setTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchDragging || !draggedItem || !touchPosition) {
      setTouchDragging(false)
      setDraggedItem(null)
      setTouchPosition(null)
      return
    }

    e.preventDefault()

    // Find which drop zone the touch ended on
    const touch = e.changedTouches[0]
    const element = document.elementFromPoint(touch.clientX, touch.clientY)

    // Find the drop zone by traversing up the DOM
    let targetQuote: Quote | null = null
    let currentElement = element

    while (currentElement && currentElement !== document.body) {
      const quoteId = currentElement.getAttribute("data-drop-id")
      if (quoteId) {
        const id = Number.parseInt(quoteId, 10)
        targetQuote = gameQuotes.find((q) => q.id === id) || null
        break
      }
      currentElement = currentElement.parentElement
    }

    if (targetQuote) {
      handleDrop(targetQuote)
    } else {
      setDraggedItem(null)
    }

    setTouchDragging(false)
    setTouchPosition(null)
  }

  const resetGame = () => {
    setScore(0)
    setStreak(0)
    setLives(5)
    startNewRound()
  }

  const remainingQuotes = gameQuotes.filter((q) => !matchedIds.has(q.id))
  const remainingRussian = shuffledRussian.filter((q) => !matchedIds.has(q.id))

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      {/* Header */}
      <header className="bg-stone-200 border-b border-stone-300 px-2 py-1">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-sm md:text-base font-semibold text-stone-700 whitespace-nowrap">Drag and Drop</h1>

          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
            <span className="text-stone-600">
              Score: <strong>{score}</strong>
            </span>
            {streak >= 2 && <span className="text-amber-700">🔥 {streak}</span>}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < lives ? "text-red-500" : "text-stone-300"}>
                  ♥
                </span>
              ))}
            </div>
            <button onClick={resetGame} className="p-1 hover:bg-stone-300 rounded" title="Reset">
              <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/lang/Russian" className="hover:text-stone-600">
              Home
            </Link>
            <Link href="/lang/Russian/rules" className="hover:text-stone-600">
              Rules
            </Link>
            <Link href="/lang/Russian/quotes" className="hover:text-stone-600">
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

          {/* Mobile Menu Button */}
          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden py-2 flex flex-col gap-2 text-sm border-t border-stone-300 mt-2">
            <Link
              href="/lang/Russian"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/lang/Russian/rules"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Rules
            </Link>
            <Link
              href="/lang/Russian/quotes"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Quotes
            </Link>
            <Link
              href="/lang/Russian/install"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Install on Mobile
            </Link>
            <Link
              href="/lang/Russian/about"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/lang/Russian/open-source"
              className="hover:bg-stone-300 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Open Source
            </Link>
          </nav>
        )}
      </header>

      {/* Game Area */}
      <main className="p-2 md:p-4">
        <div className="flex gap-2 md:gap-6 max-w-4xl mx-auto">
          {/* Russian Cards (Draggable) */}
          <div className="flex-1 flex flex-col gap-1 md:gap-2">
            {remainingRussian.map((quote) => (
              <div
                key={quote.id}
                draggable
                onDragStart={() => handleDragStart(quote)}
                onTouchStart={(e) => handleTouchStart(e, quote)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`p-2 md:p-3 bg-stone-50 border border-stone-300 rounded cursor-grab active:cursor-grabbing transition-all duration-300 select-none touch-none
                  ${draggedItem?.id === quote.id ? "opacity-50 scale-95 bg-amber-100 border-amber-400" : ""}
                  ${flashState?.id === quote.id && flashState.type === "correct" ? "bg-green-200 border-green-400" : ""}
                  ${flashState?.id === quote.id && flashState.type === "wrong" ? "bg-red-200 border-red-400" : ""}
                  hover:bg-stone-100 hover:shadow-sm`}
              >
                <p className="text-xs md:text-sm text-stone-700 leading-tight">{quote.russian}</p>
              </div>
            ))}
          </div>

          {/* English Cards (Drop Zones) */}
          <div className="flex-1 flex flex-col gap-1 md:gap-2">
            {remainingQuotes.map((quote) => (
              <div
                key={quote.id}
                data-drop-id={quote.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(quote)}
                className={`p-2 md:p-3 bg-stone-50 border border-stone-300 rounded transition-all duration-300
                  ${flashState?.id === quote.id && flashState.type === "correct" ? "bg-green-200 border-green-400" : ""}
                  ${flashState?.id === quote.id && flashState.type === "wrong" ? "bg-red-200 border-red-400" : ""}
                  hover:border-stone-400`}
              >
                <p className="text-xs md:text-sm text-stone-700 leading-tight">{quote.english}</p>
                <p className="text-xs text-stone-500 italic">-- {quote.source}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {touchDragging && draggedItem && touchPosition && (
        <div
          className="fixed pointer-events-none z-50 bg-amber-100 border-2 border-amber-400 rounded p-2 shadow-lg max-w-[45vw] opacity-90"
          style={{
            left: touchPosition.x - 80,
            top: touchPosition.y - 30,
            transform: "translate(0, 0)",
          }}
        >
          <p className="text-xs text-stone-700 leading-tight truncate">{draggedItem.russian.substring(0, 50)}...</p>
        </div>
      )}
    </div>
  )
}
