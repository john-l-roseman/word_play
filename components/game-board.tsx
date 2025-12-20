"use client"

import { useState, useEffect } from "react"
import { DraggableCard } from "./draggable-card"
import { DropZone } from "./drop-zone"

interface Phrase {
  english: string
  french: string
  source: string
}

interface GameBoardProps {
  phrases: Phrase[]
  onMatch: (isCorrect: boolean) => void
  onRoundComplete: () => void
}

export function GameBoard({ phrases, onMatch, onRoundComplete }: GameBoardProps) {
  const [leftCards, setLeftCards] = useState<Phrase[]>([])
  const [rightCards, setRightCards] = useState<Phrase[]>([])
  const [matchedIndices, setMatchedIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    // Shuffle right cards
    const shuffled = [...phrases].sort(() => Math.random() - 0.5)
    setLeftCards(phrases)
    setRightCards(shuffled)
    setMatchedIndices(new Set())
  }, [phrases])

  const handleDrop = (draggedPhrase: Phrase, dropZonePhrase: Phrase) => {
    const isMatch = draggedPhrase.english === dropZonePhrase.english

    if (isMatch) {
      // Find indices
      const leftIdx = leftCards.findIndex((p) => p.english === draggedPhrase.english)
      const rightIdx = rightCards.findIndex((p) => p.english === dropZonePhrase.english)

      const newMatched = new Set(matchedIndices)
      newMatched.add(leftIdx)
      newMatched.add(rightIdx + 1000) // Offset to distinguish right from left
      setMatchedIndices(newMatched)

      onMatch(true)

      // Play success sound
      playSuccessSound()

      // Check if round is complete
      if (newMatched.size === phrases.length * 2) {
        setTimeout(() => {
          onRoundComplete()
        }, 1000)
      }
    } else {
      onMatch(false)
      playErrorSound()
    }

    return isMatch
  }

  const playSuccessSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  const playErrorSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.type = "sawtooth"
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
      {/* Left Column - English Cards */}
      <div className="space-y-3">
        {leftCards.map((phrase, idx) => (
          <DraggableCard key={idx} phrase={phrase} isMatched={matchedIndices.has(idx)} />
        ))}
      </div>

      {/* Right Column - French Drop Zones */}
      <div className="space-y-3">
        {rightCards.map((phrase, idx) => (
          <DropZone key={idx} phrase={phrase} onDrop={handleDrop} isMatched={matchedIndices.has(idx + 1000)} />
        ))}
      </div>
    </div>
  )
}
