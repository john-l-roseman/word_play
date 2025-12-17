"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { phrases, type Phrase } from "@/lib/phrases"
import { generateWrongAnswers, shuffleArray, playSuccessSound, playErrorSound } from "@/lib/game-utils"
import { Button } from "@/components/ui/button"

interface GameOption {
  text: string
  isCorrect: boolean
  translations: Record<string, string>
}

export function Game() {
  const [currentPhrase, setCurrentPhrase] = useState<Phrase | null>(null)
  const [options, setOptions] = useState<GameOption[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [showContinue, setShowContinue] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const [showTipsButton, setShowTipsButton] = useState(true)

  useEffect(() => {
    // Load high score from localStorage
    const saved = localStorage.getItem("highScore")
    if (saved) {
      setHighScore(Number.parseInt(saved, 10))
    }

    // Load initial phrase
    loadNewPhrase()
  }, [])

  useEffect(() => {
    // Save high score to localStorage
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("highScore", score.toString())
    }
  }, [score, highScore])

  const loadNewPhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    const wrongAnswers = generateWrongAnswers(randomPhrase.russian, randomPhrase.translations)

    const allOptions: GameOption[] = [
      { text: randomPhrase.russian, isCorrect: true, translations: randomPhrase.translations },
      ...wrongAnswers.map((wa) => ({
        text: wa,
        isCorrect: false,
        translations: randomPhrase.translations, // Use same translations for wrong answers
      })),
    ]

    setCurrentPhrase(randomPhrase)
    setOptions(shuffleArray(allOptions))
    setSelectedIndex(null)
    setShowContinue(false)
    setShowTips(false)
    setShowTipsButton(true)
  }

  const handleOptionClick = (index: number) => {
    if (selectedIndex !== null) return

    setSelectedIndex(index)
    const isCorrect = options[index].isCorrect

    if (isCorrect) {
      playSuccessSound()
      const points = 100 + streak * 100
      setScore(score + points)
      setStreak(streak + 1)

      setTimeout(() => {
        loadNewPhrase()
      }, 1500)
    } else {
      playErrorSound()
      setStreak(0)
      setShowContinue(true)
    }
  }

  const handleRestart = () => {
    loadNewPhrase()
  }

  const handleNewWords = () => {
    loadNewPhrase()
  }

  const handleContinue = () => {
    loadNewPhrase()
  }

  const handleTurnOnTips = () => {
    setShowTips(true)
    setShowTipsButton(false)
    setStreak(0)
  }

  const handleResetScore = () => {
    setHighScore(0)
    setScore(0)
    setStreak(0)
    localStorage.setItem("highScore", "0")
  }

  const getCardClassName = (index: number) => {
    if (selectedIndex === null) {
      return "bg-slate-100 hover:bg-slate-200 cursor-pointer"
    }

    if (selectedIndex === index) {
      return options[index].isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white animate-shake"
    }

    if (options[index].isCorrect && selectedIndex !== null) {
      return "bg-green-500 text-white"
    }

    return "bg-slate-300"
  }

  const renderRussianText = (text: string, translations: Record<string, string>) => {
    if (!showTips) {
      return <span>{text}</span>
    }

    const words = text.split(" ")
    return (
      <span>
        {words.map((word, idx) => (
          <span key={idx}>
            <span className="relative group cursor-help" title={translations[word] || word}>
              {word}
              <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-slate-800 text-white rounded whitespace-nowrap z-10">
                {translations[word] || word}
              </span>
            </span>
            {idx < words.length - 1 && " "}
          </span>
        ))}
      </span>
    )
  }

  if (!currentPhrase) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center">
          <h1 className="font-sans text-5xl font-bold text-slate-900 mb-2 text-balance">word-play.org</h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-600 max-w-4xl mx-auto">
            <p className="italic">Open Source AI Language Learning Game</p>
            <p className="italic">More fun than Duolingo, and free forever</p>
          </div>
        </div>

        {/* Score Display */}
        <div className="mt-8 flex items-center justify-center gap-8 text-center">
          <div>
            <p className="text-sm text-slate-600 mb-1">Score</p>
            <p className="text-2xl font-bold text-indigo-600">{score}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Streak 🔥</p>
            <p className="text-2xl font-bold text-orange-500">{streak}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">High Score</p>
            <p className="text-2xl font-bold text-purple-600">{highScore}</p>
          </div>
        </div>

        {/* English Phrase */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <p className="text-2xl text-slate-900 text-center mb-2 text-balance">{currentPhrase.english}</p>
          <p className="text-sm italic text-slate-500 text-center">—{currentPhrase.source}</p>
        </div>

        {/* Russian Options */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <motion.div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`${getCardClassName(index)} rounded-xl p-6 transition-all duration-200 border border-slate-300`}
              whileTap={{ scale: selectedIndex === null ? 0.98 : 1 }}
            >
              <p className="text-lg text-center leading-relaxed">
                {renderRussianText(option.text, option.translations)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {showContinue ? (
            <Button onClick={handleContinue} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Continue
            </Button>
          ) : null}
          {!showContinue && (
            <>
              <Button onClick={handleRestart} variant="outline" size="lg">
                Restart
              </Button>
              <Button onClick={handleNewWords} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                New Words
              </Button>
              {showTipsButton && (
                <Button onClick={handleTurnOnTips} variant="outline" size="lg">
                  Turn on Tips
                </Button>
              )}
              <Button onClick={handleResetScore} variant="outline" size="lg">
                Reset Score
              </Button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-end justify-between gap-4 text-sm text-slate-600">
          <div className="flex-1">
            {/* Google AdSense placeholder */}
            <div className="bg-slate-100 rounded p-4 text-center text-xs text-slate-400">Ad Space</div>
          </div>
          <div className="text-right">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              CC BY-SA 4.0 Attribution-ShareAlike
              <br />
              (attribute to word-play.org)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
