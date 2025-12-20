import { type Phrase, phrasesData } from "./phrases-data"

export interface GameCard {
  id: number
  phrase: Phrase
}

export function selectGamePhrases(): Phrase[] {
  // Sort all phrases by English length
  const sortedPhrases = [...phrasesData].sort((a, b) => a.english.length - b.english.length)

  // Select a random starting point that allows for 8 phrases
  const maxStart = sortedPhrases.length - 8
  const randomStart = Math.floor(Math.random() * maxStart)

  // Return a contiguous window of 8 phrases
  return sortedPhrases.slice(randomStart, randomStart + 8)
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function playKachingSound() {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = "sine"
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.3)
}

export function playBuzzerSound() {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = "sawtooth"
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.2)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.2)
}
