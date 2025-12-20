"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { GameCard } from "@/lib/game-utils"

interface DropZoneCardProps {
  card: GameCard
  draggedCard: GameCard | null
  onDrop: (targetCard: GameCard, draggedCard: GameCard) => void
  isMatched: boolean
  showWrongAnimation: boolean
}

export function DropZoneCard({ card, draggedCard, onDrop, isMatched, showWrongAnimation }: DropZoneCardProps) {
  const [isOver, setIsOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsOver(true)
  }

  const handleDragLeave = () => {
    setIsOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsOver(false)
    if (draggedCard) {
      onDrop(card, draggedCard)
    }
  }

  if (isMatched) {
    return null
  }

  return (
    <Card
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`p-4 bg-stone-200 border-stone-400 transition-all ${
        isOver ? "scale-105 border-stone-600 shadow-xl" : ""
      } ${showWrongAnimation ? "animate-shake bg-red-200" : ""}`}
    >
      <div className="text-sm text-stone-900 text-balance">{card.phrase.french}</div>
    </Card>
  )
}
