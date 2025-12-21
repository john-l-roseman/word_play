"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { quotes } from "./quotes-data"

interface Quote {
  id: number
  english: string
  russian: string
  source: string
}

export default function LanguageGamePage() {
  const [currentQuotes, setCurrentQuotes] = useState<Quote[]>([])
  const [russianOrder, setRussianOrder] = useState<number[]>([])
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set())
  const [flashingGreen, setFlashingGreen] = useState<Set<number>>(new Set())
  const [flashingRed, setFlashingRed] = useState<Set<number>>(new Set())
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    loadNewRound()
    const storedScore = localStorage.getItem("languageGameScore")
    if (storedScore) setScore(Number.parseInt(storedScore))
  }, [])

  const loadNewRound = () => {
    const cardCount = isMobile ? 5 : 8

    // Sort quotes by English text length
    const sortedQuotes = [...quotes].sort((a, b) => a.english.length - b.english.length)

    // Pick a random starting point
    const maxStart = sortedQuotes.length - cardCount
    const randomStart = Math.floor(Math.random() * maxStart)

    // Get a contiguous window of quotes with similar lengths
    const selectedQuotes = sortedQuotes.slice(randomStart, randomStart + cardCount)

    // Shuffle Russian order
    const shuffledIndices = selectedQuotes.map((_, i) => i).sort(() => Math.random() - 0.5)

    setCurrentQuotes(selectedQuotes)
    setRussianOrder(shuffledIndices)
    setMatchedIds(new Set())
  }

  const playSuccessSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
    }
    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.3)
  }

  const playErrorSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
    }
    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
    oscillator.type = "sawtooth"

    gainNode.gain.setValueAtTime(0.2, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.2)
  }

  const handleDragStart = (e: React.DragEvent | React.TouchEvent, id: number) => {
    setDraggedId(id)
    if ("dataTransfer" in e) {
      e.dataTransfer.effectAllowed = "move"
    }
  }

  const handleDrop = (e: React.DragEvent | React.TouchEvent, targetId: number) => {
    e.preventDefault()

    if (draggedId === null) return

    // Compare IDs to check match
    if (draggedId === targetId) {
      // Correct match
      playSuccessSound()
      setFlashingGreen(new Set([draggedId]))

      setTimeout(() => {
        setMatchedIds((prev) => new Set([...prev, draggedId]))
        setFlashingGreen(new Set())

        const newStreak = streak + 1
        setStreak(newStreak)
        const newScore = score + 10 + (newStreak > 1 ? newStreak * 2 : 0)
        setScore(newScore)
        localStorage.setItem("languageGameScore", newScore.toString())

        // Check if round is complete
        if (matchedIds.size + 1 === currentQuotes.length) {
          setTimeout(() => loadNewRound(), 500)
        }
      }, 300)
    } else {
      // Wrong match
      playErrorSound()
      setFlashingRed(new Set([draggedId, targetId]))
      setStreak(0)
      const newScore = Math.max(0, score - 5)
      setScore(newScore)
      localStorage.setItem("languageGameScore", newScore.toString())

      setTimeout(() => {
        setFlashingRed(new Set())
      }, 300)
    }

    setDraggedId(null)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (draggedId === null) return

    const touch = e.touches[0]
    const element = document.elementFromPoint(touch.clientX, touch.clientY)

    if (element && element.hasAttribute("data-drop-id")) {
      const dropId = Number.parseInt(element.getAttribute("data-drop-id")!)
      // Highlight potential drop zone
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (draggedId === null) return

    const touch = e.changedTouches[0]
    const element = document.elementFromPoint(touch.clientX, touch.clientY)

    if (element && element.hasAttribute("data-drop-id")) {
      const dropId = Number.parseInt(element.getAttribute("data-drop-id")!)
      handleDrop(e, dropId)
    } else {
      setDraggedId(null)
    }
  }

  const resetScore = () => {
    setScore(0)
    setStreak(0)
    localStorage.setItem("languageGameScore", "0")
  }

  const visibleQuotes = currentQuotes.filter((q) => !matchedIds.has(q.id))

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Header Bar */}
      <div className="bg-stone-700 text-stone-100 px-4 py-2 flex items-center justify-between gap-4">
        <h1 className="text-lg font-bold whitespace-nowrap">Drag and Drop</h1>

        <div className="flex items-center gap-4 text-sm">
          <div className="whitespace-nowrap">Score: {score}</div>
          <div className="whitespace-nowrap">Streak: {streak}</div>
          <Button
            onClick={resetScore}
            size="sm"
            variant="outline"
            className="h-7 text-xs bg-stone-600 border-stone-500 hover:bg-stone-500"
          >
            Reset
          </Button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 text-sm">
          <Link href="/lang/Russian/rules" className="hover:text-stone-300">
            Rules
          </Link>
          <Link href="/lang/Russian/open-source" className="hover:text-stone-300">
            Open Source
          </Link>
          <Link href="/lang/Russian/install" className="hover:text-stone-300">
            Install
          </Link>
          <Link href="/lang/Russian/about" className="hover:text-stone-300">
            About
          </Link>
          <Link href="/lang/Russian/quotes" className="hover:text-stone-300">
            Quotes
          </Link>
          <Link href="/lang/Russian" className="hover:text-stone-300">
            Home
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-600 text-stone-100 px-4 py-3 flex flex-col gap-2">
          <Link href="/lang/Russian/rules" className="hover:text-stone-300 py-1">
            Rules
          </Link>
          <Link href="/lang/Russian/open-source" className="hover:text-stone-300 py-1">
            Open Source
          </Link>
          <Link href="/lang/Russian/install" className="hover:text-stone-300 py-1">
            Install on Mobile
          </Link>
          <Link href="/lang/Russian/about" className="hover:text-stone-300 py-1">
            About
          </Link>
          <Link href="/lang/Russian/quotes" className="hover:text-stone-300 py-1">
            Quotes
          </Link>
          <Link href="/lang/Russian" className="hover:text-stone-300 py-1">
            Home
          </Link>
        </div>
      )}

      {/* Game Area */}
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="grid grid-cols-2 gap-2 md:gap-8 max-w-6xl mx-auto">
          {/* English Column */}
          <div className="space-y-2">
            {visibleQuotes.map((quote) => (
              <Card
                key={`en-${quote.id}`}
                draggable
                onDragStart={(e) => handleDragStart(e, quote.id)}
                onTouchStart={(e) => handleDragStart(e, quote.id)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`p-2 md:p-4 cursor-move transition-all duration-300 border-2 ${
                  flashingGreen.has(quote.id)
                    ? "bg-green-400 border-green-600"
                    : flashingRed.has(quote.id)
                      ? "bg-red-400 border-red-600"
                      : "bg-stone-50 border-stone-300 hover:border-stone-400"
                } ${matchedIds.has(quote.id) ? "opacity-0" : "opacity-100"}`}
              >
                <div className="text-xs md:text-sm leading-tight">
                  {quote.english}
                  <br />
                  <em className="text-stone-600">-- {quote.source}</em>
                </div>
              </Card>
            ))}
          </div>

          {/* Russian Column */}
          <div className="space-y-2">
            {russianOrder.map((index) => {
              const quote = currentQuotes[index]
              if (!quote || matchedIds.has(quote.id)) return null

              return (
                <Card
                  key={`ru-${quote.id}`}
                  data-drop-id={quote.id}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, quote.id)}
                  className={`p-2 md:p-4 transition-all duration-300 border-2 ${
                    flashingGreen.has(quote.id)
                      ? "bg-green-400 border-green-600"
                      : flashingRed.has(quote.id)
                        ? "bg-red-400 border-red-600"
                        : "bg-stone-50 border-stone-300"
                  } ${matchedIds.has(quote.id) ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="text-xs md:text-sm leading-tight">{quote.russian}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
