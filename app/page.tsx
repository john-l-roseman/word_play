"use client"

import { useState, useEffect } from "react"
import { Menu } from "@/components/menu"
import { GameBoard } from "@/components/game-board"
import { phrases } from "@/lib/phrases"

export default function HomePage() {
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [currentRound, setCurrentRound] = useState<any[]>([])
  const [usedPhrases, setUsedPhrases] = useState<Set<number>>(new Set())

  useEffect(() => {
    const savedScore = localStorage.getItem("languageGameScore")
    const savedStreak = localStorage.getItem("languageGameStreak")
    if (savedScore) setScore(Number.parseInt(savedScore))
    if (savedStreak) setStreak(Number.parseInt(savedStreak))

    startNewRound()
  }, [])

  const startNewRound = () => {
    // Group phrases by character length
    const groups = {
      short: phrases.filter((p) => p.english.length <= 50),
      medium: phrases.filter((p) => p.english.length > 50 && p.english.length <= 100),
      long: phrases.filter((p) => p.english.length > 100 && p.english.length <= 150),
      veryLong: phrases.filter((p) => p.english.length > 150),
    }

    // Select a random group that has enough unused phrases
    const availableGroups = Object.entries(groups).filter(([_, group]) => {
      const unusedInGroup = group.filter((_, idx) => {
        const globalIdx = phrases.findIndex((p) => p === group[idx])
        return !usedPhrases.has(globalIdx)
      })
      return unusedInGroup.length >= 8
    })

    if (availableGroups.length === 0) {
      // Reset if we've used all phrases
      setUsedPhrases(new Set())
      startNewRound()
      return
    }

    const [_, selectedGroup] = availableGroups[Math.floor(Math.random() * availableGroups.length)]

    // Get unused phrases from this group
    const unusedPhrases = selectedGroup
      .map((phrase, idx) => ({ phrase, globalIdx: phrases.findIndex((p) => p === phrase) }))
      .filter(({ globalIdx }) => !usedPhrases.has(globalIdx))

    // Select 8 random phrases
    const shuffled = [...unusedPhrases].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 8)

    // Mark as used
    const newUsed = new Set(usedPhrases)
    selected.forEach(({ globalIdx }) => newUsed.add(globalIdx))
    setUsedPhrases(newUsed)

    setCurrentRound(selected.map(({ phrase }) => phrase))
  }

  const handleMatch = (isCorrect: boolean) => {
    if (isCorrect) {
      const streakBonus = streak * 10
      const newScore = score + 100 + streakBonus
      const newStreak = streak + 1
      setScore(newScore)
      setStreak(newStreak)
      localStorage.setItem("languageGameScore", newScore.toString())
      localStorage.setItem("languageGameStreak", newStreak.toString())
    } else {
      const penalty = Math.max(0, score - 50)
      setScore(penalty)
      setStreak(0)
      localStorage.setItem("languageGameScore", penalty.toString())
      localStorage.setItem("languageGameStreak", "0")
    }
  }

  const handleRoundComplete = () => {
    startNewRound()
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <Menu />
      <main className="container mx-auto px-4 py-6">
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-200 mb-2">
            Open Source AI Language Learning Game
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="bg-stone-200 dark:bg-stone-800 px-4 py-1 rounded">
              <span className="text-stone-600 dark:text-stone-400">Score:</span>{" "}
              <span className="font-bold text-stone-800 dark:text-stone-200">{score}</span>
            </div>
            <div className="bg-stone-200 dark:bg-stone-800 px-4 py-1 rounded">
              <span className="text-stone-600 dark:text-stone-400">Streak:</span>{" "}
              <span className="font-bold text-amber-600 dark:text-amber-400">{streak}🔥</span>
            </div>
          </div>
        </header>

        {currentRound.length > 0 && (
          <GameBoard phrases={currentRound} onMatch={handleMatch} onRoundComplete={handleRoundComplete} />
        )}
      </main>
    </div>
  )
}
