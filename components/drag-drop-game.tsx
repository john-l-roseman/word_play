"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Phrase, phrases } from "@/lib/phrases"
import { cn } from "@/lib/utils"

interface GamePhrase extends Phrase {
  id: number
}

interface DragState {
  cardId: number | null
  offsetX: number
  offsetY: number
}

export function DragDropGame() {
  const [gamePhases, setGamePhrases] = useState<GamePhrase[]>([])
  const [frenchOrder, setFrenchOrder] = useState<number[]>([])
  const [dragState, setDragState] = useState<DragState>({ cardId: null, offsetX: 0, offsetY: 0 })
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [incorrectCard, setIncorrectCard] = useState<number | null>(null)
  const [successCard, setSuccessCard] = useState<number | null>(null)
  const [score, setScore] = useState(() => {
    if (typeof window !== "undefined") {
      return Number.parseInt(localStorage.getItem("gameScore") || "0")
    }
    return 0
  })
  const [streak, setStreak] = useState(0)
  const [nearDropZone, setNearDropZone] = useState<number | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    startNewGame()
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gameScore", score.toString())
    }
  }, [score])

  const startNewGame = () => {
    // Sort by English length and select 8 contiguous phrases
    const sortedPhrases = [...phrases].sort((a, b) => a.english.length - b.english.length)
    const startIndex = Math.floor(Math.random() * (sortedPhrases.length - 8))
    const selectedPhrases = sortedPhrases.slice(startIndex, startIndex + 8).map((phrase, index) => ({
      ...phrase,
      id: index,
    }))

    setGamePhrases(selectedPhrases)

    // Shuffle French order
    const shuffled = selectedPhrases.map((_, i) => i).sort(() => Math.random() - 0.5)
    setFrenchOrder(shuffled)
    setMatched(new Set())
    setStreak(0)
  }

  const playSuccessSound = () => {
    if (!audioContextRef.current) return
    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.2)
  }

  const playErrorSound = () => {
    if (!audioContextRef.current) return
    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2)
    oscillator.type = "sawtooth"

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.2)
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, cardId: number) => {
    if (matched.has(cardId)) return

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()

    setDragState({
      cardId,
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
    })
    setDragPosition({ x: clientX, y: clientY })
  }

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (dragState.cardId === null) return

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

    setDragPosition({ x: clientX, y: clientY })

    // Check proximity to drop zones
    const dropZones = document.querySelectorAll("[data-drop-zone]")
    let closestZone: number | null = null
    let minDistance = Number.POSITIVE_INFINITY

    dropZones.forEach((zone) => {
      const rect = zone.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.sqrt(Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2))

      if (distance < 100 && distance < minDistance) {
        minDistance = distance
        closestZone = Number.parseInt(zone.getAttribute("data-drop-zone") || "")
      }
    })

    setNearDropZone(closestZone)
  }

  const handleDragEnd = () => {
    if (dragState.cardId === null) return

    if (nearDropZone !== null) {
      // Check if match is correct
      if (dragState.cardId === nearDropZone) {
        setSuccessCard(dragState.cardId)
        playSuccessSound()

        setTimeout(() => {
          setMatched((prev) => new Set([...prev, dragState.cardId!]))
          setSuccessCard(null)
          const newStreak = streak + 1
          setStreak(newStreak)
          setScore((prev) => prev + 10 + newStreak * 5)

          // Check if game is complete
          if (matched.size + 1 === gamePhases.length) {
            setTimeout(() => startNewGame(), 1000)
          }
        }, 500)
      } else {
        setIncorrectCard(dragState.cardId)
        playErrorSound()
        setStreak(0)
        setScore((prev) => Math.max(0, prev - 5))

        setTimeout(() => {
          setIncorrectCard(null)
        }, 500)
      }
    }

    setDragState({ cardId: null, offsetX: 0, offsetY: 0 })
    setNearDropZone(null)
  }

  useEffect(() => {
    if (dragState.cardId !== null) {
      window.addEventListener("mousemove", handleDragMove)
      window.addEventListener("touchmove", handleDragMove)
      window.addEventListener("mouseup", handleDragEnd)
      window.addEventListener("touchend", handleDragEnd)

      return () => {
        window.removeEventListener("mousemove", handleDragMove)
        window.removeEventListener("touchmove", handleDragMove)
        window.removeEventListener("mouseup", handleDragEnd)
        window.removeEventListener("touchend", handleDragEnd)
      }
    }
  }, [dragState, nearDropZone, matched])

  const lifePercentage = Math.max(0, Math.min(100, score))

  return (
    <div className="w-full h-full flex flex-col">
      {/* Scoring Bar */}
      <div className="w-full bg-card border-b border-border p-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-sm font-medium text-muted-foreground">Score:</span>
          <span className="text-lg font-bold text-foreground">{score}</span>
          {streak > 1 && <span className="text-sm text-accent font-medium">🔥 {streak}x</span>}
        </div>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm text-muted-foreground">Life:</span>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[200px]">
            <div className="h-full bg-accent transition-all duration-300" style={{ width: `${lifePercentage}%` }} />
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={startNewGame} className="text-xs bg-transparent">
          New Game
        </Button>
      </div>

      {/* Game Area */}
      <div className="flex-1 p-2 md:p-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-2 md:gap-6 h-full max-w-6xl mx-auto">
          {/* Left Column - English Cards */}
          <div className="flex flex-col gap-1.5 md:gap-2 overflow-y-auto">
            {gamePhases.map((phrase) => (
              <div key={phrase.id} className="relative">
                <Card
                  className={cn(
                    "p-2 md:p-4 cursor-move select-none transition-all touch-none",
                    matched.has(phrase.id) && "opacity-0 pointer-events-none",
                    successCard === phrase.id && "bg-success text-success-foreground",
                    incorrectCard === phrase.id && "bg-destructive text-destructive-foreground animate-shake",
                    dragState.cardId === phrase.id && "opacity-50",
                  )}
                  onMouseDown={(e) => handleDragStart(e, phrase.id)}
                  onTouchStart={(e) => handleDragStart(e, phrase.id)}
                >
                  <div className="text-xs md:text-sm leading-relaxed">
                    {phrase.english}
                    <br />
                    <span className="italic text-muted-foreground">-- {phrase.source}</span>
                  </div>
                </Card>

                {dragState.cardId === phrase.id && (
                  <Card
                    className="fixed p-2 md:p-4 pointer-events-none z-50 rotate-2 shadow-lg"
                    style={{
                      left: dragPosition.x - dragState.offsetX,
                      top: dragPosition.y - dragState.offsetY,
                      width:
                        (document.querySelector(`[data-card-id="${phrase.id}"]`) as HTMLElement)?.offsetWidth || "auto",
                    }}
                  >
                    <div className="text-xs md:text-sm leading-relaxed">
                      {phrase.english}
                      <br />
                      <span className="italic text-muted-foreground">-- {phrase.source}</span>
                    </div>
                  </Card>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - French Drop Zones */}
          <div className="flex flex-col gap-1.5 md:gap-2 overflow-y-auto">
            {frenchOrder.map((index) => {
              const phrase = gamePhases[index]
              return (
                <Card
                  key={phrase.id}
                  data-drop-zone={phrase.id}
                  className={cn(
                    "p-2 md:p-4 transition-all",
                    matched.has(phrase.id) && "opacity-0 pointer-events-none",
                    nearDropZone === phrase.id && "ring-2 ring-accent scale-105 bg-accent/10",
                  )}
                >
                  <div className="text-xs md:text-sm leading-relaxed text-muted-foreground">{phrase.french}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}
