"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { sortedQuotes, type Quote } from "@/lib/quotes-data"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface GameQuote extends Quote {
  matched: boolean
  flashColor: "green" | "red" | null
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function playChime() {
  const audioContext = new (
    window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  )()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = "sine"
  oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime)
  oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1)
  oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2)

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.4)
}

function playBuzzer() {
  const audioContext = new (
    window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  )()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = "sawtooth"
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.2)
}

export function DragDropGame() {
  const [russianCards, setRussianCards] = useState<GameQuote[]>([])
  const [englishCards, setEnglishCards] = useState<GameQuote[]>([])
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [roundStartIndex, setRoundStartIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState<{ x: number; y: number } | null>(null)
  const [touchDraggedId, setTouchDraggedId] = useState<number | null>(null)
  const [hoveredDropId, setHoveredDropId] = useState<number | null>(null)
  const gameRef = useRef<HTMLDivElement>(null)

  const initializeRound = useCallback((startIndex: number) => {
    const maxStart = sortedQuotes.length - 8
    const validStart = Math.min(Math.max(0, startIndex), maxStart)
    const roundQuotes = sortedQuotes.slice(validStart, validStart + 8)

    const gameQuotes: GameQuote[] = roundQuotes.map((q) => ({
      ...q,
      matched: false,
      flashColor: null,
    }))

    setRussianCards(shuffleArray(gameQuotes))
    setEnglishCards(shuffleArray([...gameQuotes]))
    setRoundStartIndex(validStart)
  }, [])

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * (sortedQuotes.length - 8))
    initializeRound(randomStart)
  }, [initializeRound])

  useEffect(() => {
    const savedScore = localStorage.getItem("langGameScore")
    if (savedScore) {
      setScore(Number.parseInt(savedScore, 10))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("langGameScore", score.toString())
  }, [score])

  const handleDragStart = (id: number) => {
    setDraggedId(id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetId: number) => {
    if (draggedId === null) return
    checkMatch(draggedId, targetId)
    setDraggedId(null)
  }

  const handleTouchStart = (e: React.TouchEvent, id: number) => {
    const touch = e.touches[0]
    setTouchDraggedId(id)
    setTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchDraggedId === null) return
    const touch = e.touches[0]
    setTouchPosition({ x: touch.clientX, y: touch.clientY })

    const element = document.elementFromPoint(touch.clientX, touch.clientY)
    const dropZone = element?.closest("[data-drop-id]")
    if (dropZone) {
      const dropId = Number.parseInt(dropZone.getAttribute("data-drop-id") || "0", 10)
      setHoveredDropId(dropId)
    } else {
      setHoveredDropId(null)
    }
  }

  const handleTouchEnd = () => {
    if (touchDraggedId !== null && hoveredDropId !== null) {
      checkMatch(touchDraggedId, hoveredDropId)
    }
    setTouchDraggedId(null)
    setTouchPosition(null)
    setHoveredDropId(null)
  }

  const checkMatch = (russianId: number, englishId: number) => {
    if (russianId === englishId) {
      playChime()
      setStreak((s) => s + 1)
      const bonus = Math.min(streak + 1, 5) * 10
      setScore((s) => s + 10 + bonus)

      setRussianCards((cards) => cards.map((c) => (c.id === russianId ? { ...c, flashColor: "green" as const } : c)))
      setEnglishCards((cards) => cards.map((c) => (c.id === englishId ? { ...c, flashColor: "green" as const } : c)))

      setTimeout(() => {
        setRussianCards((cards) =>
          cards.map((c) => (c.id === russianId ? { ...c, matched: true, flashColor: null } : c)),
        )
        setEnglishCards((cards) =>
          cards.map((c) => (c.id === englishId ? { ...c, matched: true, flashColor: null } : c)),
        )
      }, 300)
    } else {
      playBuzzer()
      setStreak(0)
      setScore((s) => Math.max(0, s - 5))

      setRussianCards((cards) => cards.map((c) => (c.id === russianId ? { ...c, flashColor: "red" as const } : c)))
      setEnglishCards((cards) => cards.map((c) => (c.id === englishId ? { ...c, flashColor: "red" as const } : c)))

      setTimeout(() => {
        setRussianCards((cards) => cards.map((c) => (c.id === russianId ? { ...c, flashColor: null } : c)))
        setEnglishCards((cards) => cards.map((c) => (c.id === englishId ? { ...c, flashColor: null } : c)))
      }, 300)
    }
  }

  useEffect(() => {
    const unmatchedRussian = russianCards.filter((c) => !c.matched)
    if (unmatchedRussian.length === 0 && russianCards.length > 0) {
      setTimeout(() => {
        const randomStart = Math.floor(Math.random() * (sortedQuotes.length - 8))
        initializeRound(randomStart)
      }, 500)
    }
  }, [russianCards, initializeRound])

  const resetScore = () => {
    setScore(0)
    setStreak(0)
    localStorage.removeItem("langGameScore")
  }

  const visibleRussian = russianCards.filter((c) => !c.matched)
  const visibleEnglish = englishCards.filter((c) => !c.matched)

  const draggedCard = touchDraggedId !== null ? russianCards.find((c) => c.id === touchDraggedId) : null

  return (
    <div ref={gameRef} className="w-full max-w-5xl mx-auto px-2 sm:px-4">
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <div className="flex items-center gap-4">
          <span className="text-sm sm:text-base font-medium text-stone-700">Score: {score}</span>
          <span className="text-sm sm:text-base font-medium text-amber-700">Streak: {streak}🔥</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={resetScore}
          className="text-stone-600 border-stone-300 hover:bg-stone-100 bg-transparent"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {/* Russian Cards (Draggable) */}
        <div className="space-y-2">
          {visibleRussian.map((card) => (
            <div
              key={card.id}
              draggable
              onDragStart={() => handleDragStart(card.id)}
              onTouchStart={(e) => handleTouchStart(e, card.id)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`
                p-2 sm:p-3 rounded-lg cursor-grab active:cursor-grabbing
                transition-all duration-300 touch-none select-none
                ${card.flashColor === "green" ? "bg-green-500 text-white" : ""}
                ${card.flashColor === "red" ? "bg-red-500 text-white" : ""}
                ${!card.flashColor ? "bg-stone-200 hover:bg-stone-300 text-stone-800" : ""}
                ${touchDraggedId === card.id ? "opacity-50 scale-95" : ""}
              `}
            >
              <p className="text-xs sm:text-sm leading-tight">{card.russian}</p>
            </div>
          ))}
        </div>

        {/* English Cards (Drop Zones) */}
        <div className="space-y-2">
          {visibleEnglish.map((card) => (
            <div
              key={card.id}
              data-drop-id={card.id}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(card.id)}
              className={`
                p-2 sm:p-3 rounded-lg transition-all duration-300
                ${card.flashColor === "green" ? "bg-green-500 text-white" : ""}
                ${card.flashColor === "red" ? "bg-red-500 text-white" : ""}
                ${!card.flashColor ? "bg-amber-100 hover:bg-amber-200 text-stone-800" : ""}
                ${hoveredDropId === card.id ? "ring-2 ring-amber-500 bg-amber-200" : ""}
              `}
            >
              <p className="text-xs sm:text-sm leading-tight">{card.english}</p>
              <p className="text-xs italic text-stone-600 mt-1">-- {card.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating drag indicator for touch */}
      {touchPosition && draggedCard && (
        <div
          className="fixed pointer-events-none z-50 p-2 bg-stone-300 rounded-lg shadow-lg max-w-[45vw] opacity-90"
          style={{
            left: touchPosition.x - 75,
            top: touchPosition.y - 30,
          }}
        >
          <p className="text-xs leading-tight truncate">{draggedCard.russian}</p>
        </div>
      )}
    </div>
  )
}
