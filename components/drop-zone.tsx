"use client"

import type React from "react"

import { useState } from "react"

interface Phrase {
  english: string
  french: string
  source: string
}

interface DropZoneProps {
  phrase: Phrase
  onDrop: (draggedPhrase: Phrase, dropZonePhrase: Phrase) => boolean
  isMatched: boolean
}

export function DropZone({ phrase, onDrop, isMatched }: DropZoneProps) {
  const [isOver, setIsOver] = useState(false)
  const [flashState, setFlashState] = useState<"success" | "error" | null>(null)

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

    const draggedPhrase = JSON.parse(e.dataTransfer.getData("phrase"))
    const isCorrect = onDrop(draggedPhrase, phrase)

    if (isCorrect) {
      setFlashState("success")
      setTimeout(() => setFlashState(null), 500)
    } else {
      setFlashState("error")
      setTimeout(() => setFlashState(null), 300)
    }
  }

  if (isMatched) {
    return null
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        bg-stone-100 dark:bg-stone-700
        border-2 border-dashed
        rounded-lg p-3 md:p-4
        transition-all duration-200
        min-h-[80px] flex items-center
        ${isOver ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 scale-105" : "border-stone-400 dark:border-stone-500"}
        ${flashState === "success" ? "bg-green-200 dark:bg-green-800 border-green-500" : ""}
        ${flashState === "error" ? "bg-red-200 dark:bg-red-800 border-red-500 animate-shake" : ""}
      `}
    >
      <div className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed w-full">
        {phrase.french}
      </div>
    </div>
  )
}
