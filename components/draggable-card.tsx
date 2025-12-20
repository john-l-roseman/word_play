"use client"

import type React from "react"

import { useState } from "react"

interface Phrase {
  english: string
  french: string
  source: string
}

interface DraggableCardProps {
  phrase: Phrase
  isMatched: boolean
}

export function DraggableCard({ phrase, isMatched }: DraggableCardProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true)
    e.dataTransfer.setData("phrase", JSON.stringify(phrase))
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  if (isMatched) {
    return null
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`
        bg-stone-50 dark:bg-stone-800 
        border-2 border-stone-300 dark:border-stone-600
        rounded-lg p-3 md:p-4
        cursor-move
        transition-all duration-200
        hover:shadow-lg hover:border-stone-400 dark:hover:border-stone-500
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
    >
      <div className="text-sm md:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
        {phrase.english}
        <br />
        <span className="italic text-stone-500 dark:text-stone-400 text-xs md:text-sm">-- {phrase.source}</span>
      </div>
    </div>
  )
}
