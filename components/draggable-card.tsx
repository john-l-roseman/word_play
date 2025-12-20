"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import type { GameCard } from "@/lib/game-utils"

interface DraggableCardProps {
  card: GameCard
  onDragStart: (card: GameCard) => void
  onDragEnd: () => void
}

export function DraggableCard({ card, onDragStart, onDragEnd }: DraggableCardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [touchOffset, setTouchOffset] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true)
    onDragStart(card)
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.setData("text/html", "")
    }
  }

  const handleDragEndEvent = () => {
    setIsDragging(false)
    onDragEnd()
  }

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const touch = e.touches[0]
      setTouchOffset({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      })
      setIsDragging(true)
      onDragStart(card)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !cardRef.current) return
    const touch = e.touches[0]
    const rect = cardRef.current.parentElement?.getBoundingClientRect()
    if (rect) {
      setPosition({
        x: touch.clientX - rect.left - touchOffset.x,
        y: touch.clientY - rect.top - touchOffset.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setPosition({ x: 0, y: 0 })
    onDragEnd()
  }

  return (
    <div
      ref={cardRef}
      className="relative"
      style={
        isDragging && (position.x !== 0 || position.y !== 0)
          ? {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: 1000,
            }
          : {}
      }
    >
      <Card
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEndEvent}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`p-4 cursor-move select-none bg-stone-100 border-stone-400 transition-all ${
          isDragging ? "opacity-50 rotate-2 scale-105" : "hover:shadow-lg"
        }`}
      >
        <div className="text-sm text-stone-900">
          <div className="text-balance">{card.phrase.english}</div>
          <div className="italic text-xs mt-1 text-stone-700">-- {card.phrase.source}</div>
        </div>
      </Card>
    </div>
  )
}
