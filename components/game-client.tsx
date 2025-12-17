"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { phrases } from "@/lib/phrases"
import { generateWrongAnswers, shuffleArray } from "@/lib/game-utils"
import { playSuccessSound, playErrorSound } from "@/lib/audio"

type GamePhrase = {
  english: string
  french: string
  source: string
  wordTranslations: { [key: string]: string }
}

type OptionState = "default" | "selected" | "correct" | "wrong"

export function GameClient() {
  const [currentPhrases, setCurrentPhrases] = useState<GamePhrase[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [options, setOptions] = useState<
    { text: string; isCorrect: boolean; wordTranslations: { [key: string]: string } }[]
  >([])
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [optionStates, setOptionStates] = useState<OptionState[]>(["default", "default", "default", "default"])
  const [showContinue, setShowContinue] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const [tipsEnabled, setTipsEnabled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("highScore")
    if (saved) setHighScore(Number.parseInt(saved))
    loadNewWords()
  }, [])

  const loadNewWords = () => {
    const shuffled = shuffleArray([...phrases])
    const selected = shuffled.slice(0, 8)
    setCurrentPhrases(selected)
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMistakes(0)
    setGameOver(false)
    setShowTips(false)
    setTipsEnabled(false)
    generateOptions(selected[0])
  }

  const generateOptions = (phrase: GamePhrase) => {
    const wrongAnswers = generateWrongAnswers(phrase.french, phrase.wordTranslations)
    const allOptions = [
      { text: phrase.french, isCorrect: true, wordTranslations: phrase.wordTranslations },
      ...wrongAnswers.map((wa) => ({ text: wa.text, isCorrect: false, wordTranslations: wa.wordTranslations })),
    ]
    setOptions(shuffleArray(allOptions))
    setSelectedOption(null)
    setOptionStates(["default", "default", "default", "default"])
    setShowContinue(false)
    setShowTips(false)
  }

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return

    setSelectedOption(index)
    const newStates = [...optionStates]
    newStates[index] = "selected"
    setOptionStates(newStates)

    setTimeout(() => {
      const isCorrect = options[index].isCorrect

      if (isCorrect) {
        playSuccessSound()
        const newStates = [...optionStates]
        newStates[index] = "correct"
        setOptionStates(newStates)

        const newStreak = streak + 1
        const points = 100 + streak * 100
        setScore(score + points)
        setStreak(newStreak)

        setTimeout(() => {
          moveToNext()
        }, 1500)
      } else {
        playErrorSound()
        const newStates = ["default", "default", "default", "default"]
        newStates[index] = "wrong"
        options.forEach((opt, idx) => {
          if (opt.isCorrect) newStates[idx] = "correct"
        })
        setOptionStates(newStates as OptionState[])
        setStreak(0)
        setMistakes(mistakes + 1)

        if (mistakes + 1 >= 4) {
          setGameOver(true)
        }
        setShowContinue(true)
      }
    }, 300)
  }

  const moveToNext = () => {
    if (currentIndex + 1 < currentPhrases.length) {
      setCurrentIndex(currentIndex + 1)
      generateOptions(currentPhrases[currentIndex + 1])
      setTipsEnabled(false)
    } else {
      const bonus = (4 - mistakes) * 50
      const finalScore = score + bonus
      setScore(finalScore)
      if (finalScore > highScore) {
        setHighScore(finalScore)
        localStorage.setItem("highScore", finalScore.toString())
      }
      setGameOver(true)
    }
  }

  const handleContinue = () => {
    moveToNext()
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMistakes(0)
    setGameOver(false)
    setShowTips(false)
    setTipsEnabled(false)
    generateOptions(currentPhrases[0])
  }

  const handleTurnOnTips = () => {
    setTipsEnabled(true)
    setShowTips(false)
    setStreak(0)
  }

  if (currentPhrases.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </main>
      </div>
    )
  }

  const currentPhrase = currentPhrases[currentIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Score Display */}
        <div className="flex justify-center gap-8 mb-8 text-lg font-semibold">
          <div>
            Score: <span className="text-blue-600">{score}</span>
          </div>
          <div>
            Streak: <span className="text-orange-500">{streak} 🔥</span>
          </div>
          <div>
            High Score: <span className="text-green-600">{highScore}</span>
          </div>
        </div>

        {!gameOver ? (
          <>
            {/* English Phrase */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-8 shadow-lg mb-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{currentPhrase.english}</h2>
              <p className="text-sm italic text-gray-600">{currentPhrase.source}</p>
            </motion.div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {options.map((option, index) => (
                <OptionCard
                  key={index}
                  text={option.text}
                  wordTranslations={option.wordTranslations}
                  state={optionStates[index]}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  tipsEnabled={tipsEnabled}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {showContinue ? (
                <Button onClick={handleContinue} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Continue
                </Button>
              ) : (
                <>
                  <Button onClick={handleRestart} variant="outline" size="lg">
                    Restart
                  </Button>
                  <Button onClick={loadNewWords} size="lg" className="bg-green-600 hover:bg-green-700">
                    New Words
                  </Button>
                  {!tipsEnabled && (
                    <Button onClick={handleTurnOnTips} size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Turn on Tips
                    </Button>
                  )}
                </>
              )}
            </div>

            {/* Mistakes */}
            <div className="text-center text-gray-700">Mistakes: {mistakes} / 4</div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
            <p className="text-xl mb-2">
              Final Score: <span className="text-blue-600 font-bold">{score}</span>
            </p>
            <p className="text-lg mb-6">
              High Score: <span className="text-green-600 font-bold">{highScore}</span>
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleRestart} size="lg">
                Play Again
              </Button>
              <Button onClick={loadNewWords} size="lg" className="bg-green-600 hover:bg-green-700">
                New Words
              </Button>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 flex justify-between items-center text-sm">
        <div className="text-gray-600">
          {/* Ad placeholder */}
          <div className="text-xs text-gray-400">Ad Space</div>
        </div>
        <div>
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            CC BY-SA 4.0 Attribution-ShareAlike (attribute to word-play.org)
          </a>
        </div>
      </footer>
    </div>
  )
}

function OptionCard({
  text,
  wordTranslations,
  state,
  onClick,
  disabled,
  tipsEnabled,
}: {
  text: string
  wordTranslations: { [key: string]: string }
  state: OptionState
  onClick: () => void
  disabled: boolean
  tipsEnabled: boolean
}) {
  const getBackgroundColor = () => {
    switch (state) {
      case "selected":
        return "bg-gray-700 text-white"
      case "correct":
        return "bg-green-500 text-white"
      case "wrong":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-100 hover:bg-gray-200 text-gray-800"
    }
  }

  const words = text.split(/\s+/)

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`p-6 rounded-lg text-lg font-medium transition-colors ${getBackgroundColor()} ${
        disabled && state === "default" ? "cursor-not-allowed opacity-50" : ""
      }`}
      animate={state === "wrong" ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      {tipsEnabled ? (
        <span className="inline-flex flex-wrap gap-1 justify-center">
          {words.map((word, idx) => {
            const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, "")
            const translation = wordTranslations[cleanWord] || word
            return (
              <span key={idx} className="relative group cursor-help">
                {word}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  {translation}
                </span>
              </span>
            )
          })}
        </span>
      ) : (
        text
      )}
    </motion.button>
  )
}
