export function generateWrongAnswers(correctAnswer: string, translations: Record<string, string>): string[] {
  const words = correctAnswer.split(" ")
  const wrongAnswers: string[] = []

  // List of Russian replacement words by part of speech
  const replacements = {
    nouns: [
      "яблоко",
      "стол",
      "дом",
      "окно",
      "море",
      "небо",
      "лес",
      "город",
      "друг",
      "враг",
      "камень",
      "дерево",
      "цветок",
      "птица",
      "рыба",
      "звезда",
      "луна",
      "солнце",
      "огонь",
      "вода",
      "земля",
      "воздух",
      "книга",
      "дверь",
      "стена",
      "пол",
      "крыша",
      "мост",
      "река",
      "гора",
    ],
    verbs: [
      "бежать",
      "прыгать",
      "плавать",
      "летать",
      "читать",
      "писать",
      "петь",
      "танцевать",
      "смеяться",
      "плакать",
      "спать",
      "есть",
      "пить",
      "играть",
      "работать",
      "учиться",
      "любить",
      "ненавидеть",
      "думать",
      "говорить",
      "слушать",
      "видеть",
      "слышать",
      "чувствовать",
      "ходить",
      "стоять",
      "сидеть",
      "лежать",
    ],
    adjectives: [
      "красный",
      "синий",
      "зеленый",
      "желтый",
      "черный",
      "белый",
      "большой",
      "маленький",
      "высокий",
      "низкий",
      "толстый",
      "тонкий",
      "старый",
      "новый",
      "горячий",
      "холодный",
      "быстрый",
      "медленный",
      "сильный",
      "слабый",
      "умный",
      "глупый",
      "добрый",
      "злой",
      "красивый",
      "уродливый",
    ],
  }

  // Try to generate 3 unique wrong answers
  const usedIndices = new Set<number>()
  const attempts = new Set<string>()

  while (wrongAnswers.length < 3 && attempts.size < 50) {
    let indexToReplace: number

    // Don't replace the first word
    do {
      indexToReplace = Math.floor(Math.random() * (words.length - 1)) + 1
    } while (usedIndices.has(indexToReplace) && usedIndices.size < words.length - 1)

    const wordToReplace = words[indexToReplace]

    // Get a random replacement word
    const allReplacements = [...replacements.nouns, ...replacements.verbs, ...replacements.adjectives]
    const replacement = allReplacements[Math.floor(Math.random() * allReplacements.length)]

    // Make sure replacement is different from original
    if (replacement !== wordToReplace) {
      const wrongAnswer = [...words]
      wrongAnswer[indexToReplace] = replacement
      const wrongAnswerStr = wrongAnswer.join(" ")

      // Check if this wrong answer is unique
      if (!wrongAnswers.includes(wrongAnswerStr) && wrongAnswerStr !== correctAnswer) {
        wrongAnswers.push(wrongAnswerStr)
        usedIndices.add(indexToReplace)
      }
    }

    attempts.add(`${indexToReplace}-${replacement}`)
  }

  // If we couldn't generate 3 unique answers, fill with simpler variations
  while (wrongAnswers.length < 3) {
    const indexToReplace = ((wrongAnswers.length + 1) % (words.length - 1)) + 1
    const wrongAnswer = [...words]
    wrongAnswer[indexToReplace] = replacements.nouns[wrongAnswers.length]
    wrongAnswers.push(wrongAnswer.join(" "))
  }

  return wrongAnswers
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function playSuccessSound() {
  if (typeof window === "undefined") return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

  // Play two-tone chime (523Hz + 659Hz)
  ;[523, 659].forEach((freq, index) => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = freq
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime + index * 0.05)
    oscillator.stop(audioContext.currentTime + 0.2 + index * 0.05)
  })
}

export function playErrorSound() {
  if (typeof window === "undefined") return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 200
  oscillator.type = "sawtooth"

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.3)
}
