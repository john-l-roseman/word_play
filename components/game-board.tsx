"use client"

import { useState, useEffect } from "react"
import { DraggableCard } from "./draggable-card"
import { DropZoneCard } from "./drop-zone-card"
import { selectGamePhrases, shuffleArray, playKachingSound, playBuzzerSound, type GameCard } from "@/lib/game-utils"
import { Button } from "./ui/button"

export function GameBoard() {
  const [englishCards, setEnglishCards] = useState<GameCard[]>([])
  const [frenchCards, setFrenchCards] = useState<GameCard[]>([])
  const [draggedCard, setDraggedCard] = useState<GameCard | null>(null)
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set())
  const [wrongAnimationId, setWrongAnimationId] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(100)

  useEffect(() => {
    // Load saved score
    const savedScore = localStorage.getItem("gameScore")
    if (savedScore) {
      setScore(Number.parseInt(savedScore, 10))
    }
    startNewGame()
  }, [])

  useEffect(() => {
    // Save score
    localStorage.setItem("gameScore", score.toString())
  }, [score])

  const startNewGame = () => {
    const selectedPhrases = selectGamePhrases()
    const english: GameCard[] = selectedPhrases.map((phrase, index) => ({
      id: index,
      phrase,
    }))
    const french = shuffleArray([...english])

    setEnglishCards(english)
    setFrenchCards(french)
    setMatchedIds(new Set())
    setStreak(0)
  }

  const handleDragStart = (card: GameCard) => {
    setDraggedCard(card)
  }

  const handleDragEnd = () => {
    setDraggedCard(null)
  }

  const handleDrop = (targetCard: GameCard, draggedCardData: GameCard) => {
    if (targetCard.id === draggedCardData.id) {
      // Correct match
      playKachingSound()
      setMatchedIds((prev) => new Set([...prev, targetCard.id]))

      const streakBonus = (streak + 1) * 10
      setScore((prev) => prev + 100 + streakBonus)
      setStreak((prev) => prev + 1)

      // Check if game is complete
      if (matchedIds.size + 1 === englishCards.length) {
        setTimeout(() => startNewGame(), 1000)
      }
    } else {
      // Wrong match
      playBuzzerSound()
      setWrongAnimationId(targetCard.id)
      setTimeout(() => setWrongAnimationId(null), 500)

      setScore((prev) => Math.max(0, prev - 20))
      setLives((prev) => Math.max(0, prev - 10))
      setStreak(0)
    }
  }

  const remainingEnglishCards = englishCards.filter((card) => !matchedIds.has(card.id))
  const remainingFrenchCards = frenchCards.filter((card) => !matchedIds.has(card.id))

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-2 text-stone-100">Open Source AI Language Learning Game</h1>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="text-stone-300">
            Score: <span className="font-bold text-stone-100">{score}</span>
          </div>
          <div className="text-stone-300">
            Streak: <span className="font-bold text-amber-400">{streak}x</span>
          </div>
          <div className="flex-1 max-w-xs">
            <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${lives}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {/* English Cards Column */}
        <div className="space-y-3">
          {remainingEnglishCards.map((card) => (
            <DraggableCard key={card.id} card={card} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
          ))}
        </div>

        {/* French Cards Column */}
        <div className="space-y-3">
          {remainingFrenchCards.map((card) => (
            <DropZoneCard
              key={card.id}
              card={card}
              draggedCard={draggedCard}
              onDrop={handleDrop}
              isMatched={matchedIds.has(card.id)}
              showWrongAnimation={wrongAnimationId === card.id}
            />
          ))}
        </div>
      </div>

      {/* New Game Button */}
      {remainingEnglishCards.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-xl font-bold text-stone-100 mb-4">Great job! Starting new round...</p>
        </div>
      )}

      <div className="text-center mt-6">
        <Button
          onClick={startNewGame}
          variant="outline"
          className="bg-stone-700 hover:bg-stone-600 text-stone-100 border-stone-600"
        >
          New Game
        </Button>
      </div>
    </div>
  )
}
