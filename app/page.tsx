"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PHRASES } from "@/lib/phrases"

type GamePhrase = {
  english: string
  russian: string
  source: string
  wordTranslations: Record<string, string>
}

type AnswerOption = {
  text: string
  isCorrect: boolean
  wordTranslations: Record<string, string>
}

export default function Home() {
  const [currentPhrases, setCurrentPhrases] = useState<GamePhrase[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showContinue, setShowContinue] = useState(false)
  const [answers, setAnswers] = useState<AnswerOption[]>([])
  const [gameOver, setGameOver] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const [tipsMobile, setTipsMobile] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("highScore")
    if (saved) setHighScore(Number.parseInt(saved))
    loadNewWords()
  }, [])

  const loadNewWords = () => {
    const shuffled = [...PHRASES].sort(() => Math.random() - 0.5).slice(0, 8)
    setCurrentPhrases(shuffled)
    setCurrentIndex(0)
    setMistakes(0)
    setScore(0)
    setStreak(0)
    setGameOver(false)
    setSelectedAnswer(null)
    setShowContinue(false)
    setShowTips(false)
  }

  const restartWords = () => {
    setCurrentIndex(0)
    setMistakes(0)
    setScore(0)
    setStreak(0)
    setGameOver(false)
    setSelectedAnswer(null)
    setShowContinue(false)
    setShowTips(false)
  }

  const generateWrongAnswers = (correct: string, wordTranslations: Record<string, string>): AnswerOption[] => {
    const words = correct.split(" ")
    const wrongAnswers: AnswerOption[] = []

    const replacements = [
      "кошка",
      "собака",
      "дом",
      "машина",
      "дерево",
      "окно",
      "стол",
      "стул",
      "книга",
      "ручка",
      "делает",
      "идёт",
      "говорит",
      "пишет",
      "читает",
      "смотрит",
      "слушает",
      "думает",
      "большой",
      "маленький",
      "красный",
      "синий",
      "зелёный",
      "старый",
      "новый",
      "хороший",
      "быстро",
      "медленно",
      "тихо",
      "громко",
      "далеко",
      "близко",
      "рано",
      "поздно",
      "день",
      "ночь",
      "время",
      "место",
      "путь",
      "вода",
      "огонь",
      "земля",
      "небо",
      "море",
    ]

    for (let attempt = 0; attempt < 3 && wrongAnswers.length < 3; attempt++) {
      const replaceIndex = Math.floor(Math.random() * (words.length - 1)) + 1
      const originalWord = words[replaceIndex]

      const availableReplacements = replacements.filter(
        (r) => r !== originalWord && !wrongAnswers.some((wa) => wa.text.includes(r)),
      )

      if (availableReplacements.length > 0) {
        const replacement = availableReplacements[Math.floor(Math.random() * availableReplacements.length)]
        const wrongWords = [...words]
        wrongWords[replaceIndex] = replacement
        const wrongText = wrongWords.join(" ")

        if (!wrongAnswers.some((wa) => wa.text === wrongText)) {
          const wrongTranslations = { ...wordTranslations }
          delete wrongTranslations[originalWord]
          wrongTranslations[replacement] = "replacement"

          wrongAnswers.push({
            text: wrongText,
            isCorrect: false,
            wordTranslations: wrongTranslations,
          })
        }
      }
    }

    return wrongAnswers
  }

  useEffect(() => {
    if (currentPhrases.length > 0 && currentIndex < currentPhrases.length) {
      const current = currentPhrases[currentIndex]
      const wrongAnswers = generateWrongAnswers(current.russian, current.wordTranslations)
      const allAnswers = [
        { text: current.russian, isCorrect: true, wordTranslations: current.wordTranslations },
        ...wrongAnswers,
      ].sort(() => Math.random() - 0.5)
      setAnswers(allAnswers)
      setShowTips(false)
    }
  }, [currentIndex, currentPhrases])

  const playSound = (isCorrect: boolean) => {
    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    gainNode.gain.value = 0.1

    if (isCorrect) {
      oscillator.frequency.value = 523
      oscillator.start()
      setTimeout(() => {
        oscillator.frequency.value = 659
      }, 100)
      oscillator.stop(audioContext.currentTime + 0.2)
    } else {
      oscillator.frequency.value = 200
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.3)
    }
  }

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    const isCorrect = answers[index].isCorrect
    playSound(isCorrect)

    if (isCorrect) {
      const newStreak = streak + 1
      const points = 100 + streak * 100
      setScore(score + points)
      setStreak(newStreak)

      setTimeout(() => {
        if (currentIndex + 1 < currentPhrases.length) {
          setCurrentIndex(currentIndex + 1)
          setSelectedAnswer(null)
        } else {
          const bonus = (4 - mistakes) * 50
          const finalScore = score + points + bonus
          setScore(finalScore)
          if (finalScore > highScore) {
            setHighScore(finalScore)
            localStorage.setItem("highScore", finalScore.toString())
          }
          setGameOver(true)
        }
      }, 1500)
    } else {
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)
      setStreak(0)
      setShowContinue(true)

      if (newMistakes >= 4) {
        if (score > highScore) {
          setHighScore(score)
          localStorage.setItem("highScore", score.toString())
        }
        setGameOver(true)
      }
    }
  }

  const handleContinue = () => {
    if (currentIndex + 1 < currentPhrases.length) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowContinue(false)
    }
  }

  const handleTurnOnTips = () => {
    setShowTips(true)
    setStreak(0)

    const isMobile = window.innerWidth < 768 || "ontouchstart" in window
    setTipsMobile(isMobile)
  }

  const handleResetScore = () => {
    setHighScore(0)
    localStorage.setItem("highScore", "0")
  }

  const renderRussianWithTooltips = (text: string, wordTranslations: Record<string, string>) => {
    if (!showTips) return text

    const words = text.split(" ")
    return (
      <span className="inline-flex flex-wrap gap-1">
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[.,;:!?]/g, "")
          const translation = wordTranslations[cleanWord] || cleanWord

          return (
            <span key={idx} className="relative group">
              <span>{word}</span>
              {tipsMobile ? (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                  {translation}
                </span>
              ) : (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {translation}
                </span>
              )}
            </span>
          )
        })}
      </span>
    )
  }

  if (currentPhrases.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const currentPhrase = currentPhrases[currentIndex]

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/rules" className="hover:text-primary transition-colors">
            Rules
          </Link>
          <Link href="/install" className="hover:text-primary transition-colors">
            Install on Mobile
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">Open Source AI Language Learning Game</h1>
          <p className="text-xl text-muted-foreground">More fun than Duolingo, and free</p>
        </div>

        <div className="flex justify-between items-center mb-8 text-lg">
          <div>
            Score: <span className="font-bold">{score}</span>
          </div>
          <div>
            Streak: <span className="font-bold">{streak}</span> 🔥
          </div>
          <div>
            High Score: <span className="font-bold">{highScore}</span>
          </div>
          <div>
            Mistakes: <span className="font-bold text-destructive">{mistakes}/4</span>
          </div>
        </div>

        {gameOver ? (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Game Over!</h2>
            <p className="text-xl">Final Score: {score}</p>
            {score === highScore && score > 0 && (
              <p className="text-2xl text-green-600 font-bold">🎉 New High Score! 🎉</p>
            )}
            <div className="flex gap-4 justify-center">
              <Button onClick={restartWords} size="lg">
                Play Again
              </Button>
              <Button onClick={loadNewWords} size="lg" variant="outline">
                New Words
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-card border border-border rounded-lg p-8 mb-8 text-center">
              <p className="text-2xl mb-2 text-balance">{currentPhrase.english}</p>
              <p className="text-sm italic text-muted-foreground">{currentPhrase.source}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {answers.map((answer, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = answer.isCorrect
                const showCorrect = selectedAnswer !== null && isCorrect
                const showWrong = isSelected && !isCorrect

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    animate={showWrong ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className={`p-6 rounded-lg text-lg transition-colors ${
                      showCorrect
                        ? "bg-[#22C55E] text-white"
                        : showWrong
                          ? "bg-[#EF4444] text-white"
                          : isSelected
                            ? "bg-[#374151] text-white"
                            : "bg-[#F3F4F6] hover:bg-gray-200"
                    } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {renderRussianWithTooltips(answer.text, answer.wordTranslations)}
                  </motion.button>
                )
              })}
            </div>

            {showContinue && (
              <div className="text-center mb-8">
                <Button onClick={handleContinue} size="lg">
                  Continue
                </Button>
              </div>
            )}

            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={restartWords} variant="outline">
                Restart
              </Button>
              <Button onClick={loadNewWords} variant="outline">
                New Words
              </Button>
              {!showTips && (
                <Button onClick={handleTurnOnTips} variant="outline">
                  Turn on Tips
                </Button>
              )}
              <Button onClick={handleResetScore} variant="outline">
                Reset Score
              </Button>
            </div>
          </>
        )}

        <div className="mt-12 flex justify-between items-end">
          <div className="text-sm">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-2063007657687079"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
          <div className="text-sm text-muted-foreground text-right">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              CC BY-SA 4.0 Attribution-ShareAlike
              <br />
              (attribute to word-play.org)
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
