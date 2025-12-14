"use client"

import { useState, useEffect } from "react"
import { GameCard } from "./game-card"
import { MistakeDots } from "./mistake-dots"
import { AdUnit } from "./ad-unit"
import { Volume2 } from "lucide-react"

interface Phrase {
  english: string
  correct: string
  wrong: string[]
  source: string
}

export default function RussianConnections() {
  const [phrases, setPhrases] = useState<Phrase[]>([])
  const [currentPhrases, setCurrentPhrases] = useState<Phrase[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [options, setOptions] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [showContinue, setShowContinue] = useState(false)

  // Load phrases from JSON
  useEffect(() => {
    fetch("/phrases.json")
      .then((res) => res.json())
      .then((data) => {
        setPhrases(data)
        loadNewWords(data)
      })
  }, [])

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("highScore")
    if (saved) setHighScore(Number.parseInt(saved))
  }, [])

  const loadNewWords = (allPhrases: Phrase[]) => {
    const shuffled = [...allPhrases].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 8)
    setCurrentPhrases(selected)
    setCurrentIndex(0)
    setMistakes(0)
    setStreak(0)
    setGameOver(false)
    loadQuestion(selected, 0)
  }

  const loadQuestion = (phrasesArray: Phrase[], index: number) => {
    if (index >= phrasesArray.length) {
      completeGame()
      return
    }

    const phrase = phrasesArray[index]
    const allOptions = [phrase.correct, ...phrase.wrong]
    const shuffled = allOptions.sort(() => Math.random() - 0.5)
    setOptions(shuffled)
    setSelectedOption(null)
    setIsCorrect(null)
    setShowContinue(false)
  }

  const playSound = (isSuccess: boolean) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    if (isSuccess) {
      // Pleasant two-tone chime
      oscillator.frequency.setValueAtTime(523, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1)
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)
    } else {
      // Buzz sound
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    }
  }

  const handleOptionClick = (option: string) => {
    if (selectedOption) return

    const phrase = currentPhrases[currentIndex]
    const correct = option === phrase.correct

    setSelectedOption(option)
    setIsCorrect(correct)
    playSound(correct)

    if (correct) {
      const basePoints = 100
      const streakBonus = streak * 25
      setScore((prev) => prev + basePoints + streakBonus)
      setStreak((prev) => prev + 1)

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
        loadQuestion(currentPhrases, currentIndex + 1)
      }, 1500)
    } else {
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)
      setStreak(0)
      setShowContinue(true)

      if (newMistakes >= 4) {
        setGameOver(true)
      }
    }
  }

  const handleContinue = () => {
    if (gameOver) {
      restartGame()
    } else {
      setCurrentIndex((prev) => prev + 1)
      loadQuestion(currentPhrases, currentIndex + 1)
    }
  }

  const completeGame = () => {
    const remainingMistakes = 4 - mistakes
    const bonus = remainingMistakes * 50
    const finalScore = score + bonus
    setScore(finalScore)

    if (finalScore > highScore) {
      setHighScore(finalScore)
      localStorage.setItem("highScore", finalScore.toString())
    }

    setGameOver(true)
    setShowContinue(true)
  }

  const restartGame = () => {
    setCurrentIndex(0)
    setMistakes(0)
    setStreak(0)
    setScore(0)
    setGameOver(false)
    loadQuestion(currentPhrases, 0)
  }

  const handleNewWords = () => {
    setScore(0)
    loadNewWords(phrases)
  }

  const speakEnglish = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(currentPhrases[currentIndex]?.english)
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }

  if (currentPhrases.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-xl text-muted-foreground">Loading...</div>
      </div>
    )
  }

  const currentPhrase = currentPhrases[currentIndex]

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-foreground mb-2">word-play.org</h1>
          <p className="text-lg text-muted-foreground mb-1">Free Open Source Foreign Language Game</p>
          <a
            href="/word-play-Zd3TF.pdf"
            className="text-sm text-primary hover:text-primary-hover underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for the prompt that generated this site
          </a>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between mb-6 bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <MistakeDots mistakes={mistakes} />
          </div>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="text-muted-foreground">Score</div>
              <div className="font-bold text-lg text-foreground">{score}</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground">Streak</div>
              <div className="font-bold text-lg text-foreground">{streak} 🔥</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground">High Score</div>
              <div className="font-bold text-lg text-foreground">{highScore}</div>
            </div>
          </div>
        </div>

        {!gameOver && currentPhrase && (
          <>
            {/* English Phrase Card */}
            <div className="bg-card border-2 border-primary rounded-xl p-8 mb-8 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-card-foreground leading-relaxed text-balance">
                    {currentPhrase.english}
                  </p>
                  <p className="text-sm italic text-muted-foreground mt-3">—{currentPhrase.source}</p>
                </div>
                <button
                  onClick={speakEnglish}
                  className="flex-shrink-0 p-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
                  aria-label="Speak phrase"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Russian Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {options.map((option, index) => (
                <GameCard
                  key={index}
                  text={option}
                  onClick={() => handleOptionClick(option)}
                  isSelected={selectedOption === option}
                  isCorrect={selectedOption === option ? isCorrect : null}
                  showCorrect={selectedOption !== null && isCorrect === false && option === currentPhrase.correct}
                  disabled={selectedOption !== null}
                />
              ))}
            </div>
          </>
        )}

        {/* Game Over / Complete Message */}
        {gameOver && (
          <div className="bg-card border-2 border-primary rounded-xl p-8 mb-6 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {mistakes >= 4 ? "Game Over!" : "Round Complete! 🎉"}
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Final Score: <span className="font-bold text-foreground">{score}</span>
            </p>
            {score > highScore && <p className="text-accent font-semibold mb-4">New High Score! 🏆</p>}
          </div>
        )}

        {/* Continue Button */}
        {showContinue && (
          <button
            onClick={handleContinue}
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-6 text-lg"
          >
            {gameOver ? "Play Again" : "Continue"}
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={restartGame}
            className="flex-1 bg-muted hover:bg-selected text-foreground hover:text-selected-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Restart
          </button>
          <button
            onClick={handleNewWords}
            className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            New Words
          </button>
        </div>

        {/* AdSense Unit */}
        <AdUnit />

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground space-y-2">
          <p>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline"
            >
              CC BY-SA 4.0 Attribution-ShareAlike
            </a>{" "}
            (attribute to word-play.org)
          </p>
          <p className="text-xs">
            <a href="/manifest.json" className="text-primary hover:text-primary-hover underline">
              manifest.json
            </a>
            {" • "}
            <a href="/sw.js" className="text-primary hover:text-primary-hover underline">
              sw.js
            </a>
            {" — Download these files for offline play as PWA"}
          </p>
        </footer>
      </div>
    </div>
  )
}
