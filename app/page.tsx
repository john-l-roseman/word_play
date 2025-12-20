"use client"

import { useEffect, useState } from "react"
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core"
import { DraggableCard } from "@/components/draggable-card"
import { DropZone } from "@/components/drop-zone"
import { phrases } from "@/lib/phrases-data"
import { MenuBar } from "@/components/menu-bar"

export default function Home() {
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(5)
  const [currentPhrases, setCurrentPhrases] = useState<typeof phrases>([])
  const [englishCards, setEnglishCards] = useState<typeof phrases>([])
  const [frenchCards, setFrenchCards] = useState<typeof phrases>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set())

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
  )

  useEffect(() => {
    // Load score from localStorage
    const savedScore = localStorage.getItem("languageGameScore")
    if (savedScore) {
      setScore(Number.parseInt(savedScore))
    }
    loadNewGame()
  }, [])

  useEffect(() => {
    // Save score to localStorage
    localStorage.setItem("languageGameScore", score.toString())
  }, [score])

  const loadNewGame = () => {
    // Sort phrases by length and select a contiguous window of 8
    const sortedPhrases = [...phrases].sort((a, b) => a.phrase.length - b.phrase.length)
    const maxStartIndex = Math.max(0, sortedPhrases.length - 8)
    const startIndex = Math.floor(Math.random() * maxStartIndex)
    const selected = sortedPhrases.slice(startIndex, startIndex + 8)

    setCurrentPhrases(selected)
    setEnglishCards(selected)

    // Shuffle French cards
    const shuffled = [...selected].sort(() => Math.random() - 0.5)
    setFrenchCards(shuffled)

    setMatchedIds(new Set())
    setStreak(0)
    setLives(5)
  }

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const draggedPhrase = englishCards.find((p) => p.phrase === active.id)
    const targetPhrase = frenchCards.find((p) => p.french === over.id)

    if (draggedPhrase && targetPhrase && draggedPhrase.phrase === targetPhrase.phrase) {
      // Correct match
      playSuccessSound()
      const newStreak = streak + 1
      const points = 10 + newStreak * 5
      setScore(score + points)
      setStreak(newStreak)

      setMatchedIds((prev) => new Set([...prev, draggedPhrase.phrase]))

      // Remove matched cards
      setTimeout(() => {
        setEnglishCards((prev) => prev.filter((p) => p.phrase !== draggedPhrase.phrase))
        setFrenchCards((prev) => prev.filter((p) => p.phrase !== draggedPhrase.phrase))

        if (englishCards.length === 1) {
          // Last match, load new game
          setTimeout(() => loadNewGame(), 500)
        }
      }, 600)
    } else {
      // Wrong match
      playErrorSound()
      setScore(Math.max(0, score - 5))
      setStreak(0)
      setLives(Math.max(0, lives - 1))
    }
  }

  const playSuccessSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  const playErrorSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)
    oscillator.type = "sawtooth"

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  const activePhrase = englishCards.find((p) => p.phrase === activeId)

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col overflow-x-hidden">
      <MenuBar />

      <div className="flex-1 flex flex-col">
        <header className="bg-stone-700 text-stone-50 py-2 px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-balance">
            {"Open Source AI Language Learning Game"}
          </h1>

          <div className="flex items-center justify-between mt-2 text-sm">
            <div className="flex gap-4">
              <span className="font-semibold">
                {"Score: "}
                {score}
              </span>
              <span className="text-amber-300">
                {"Streak: "}
                {streak}
              </span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < lives ? "bg-emerald-500" : "bg-stone-500"}`} />
              ))}
            </div>
          </div>
        </header>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <main className="flex-1 p-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-3">
                {englishCards.map((phrase) => (
                  <DraggableCard
                    key={phrase.phrase}
                    id={phrase.phrase}
                    phrase={phrase.phrase}
                    source={phrase.source}
                    isMatched={matchedIds.has(phrase.phrase)}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {frenchCards.map((phrase) => (
                  <DropZone
                    key={phrase.french}
                    id={phrase.french}
                    text={phrase.french}
                    isMatched={matchedIds.has(phrase.phrase)}
                  />
                ))}
              </div>
            </div>
          </main>

          <DragOverlay>
            {activePhrase ? (
              <div className="bg-stone-200 border-2 border-stone-400 rounded-lg p-3 shadow-xl cursor-grabbing w-full min-w-0 break-words overflow-wrap-anywhere">
                <div className="text-sm md:text-base text-stone-900 leading-relaxed">
                  {activePhrase.phrase}
                  <br />
                  <em className="text-stone-600 text-xs md:text-sm">
                    {"-- "}
                    {activePhrase.source}
                  </em>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  )
}
