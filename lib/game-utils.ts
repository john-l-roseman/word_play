export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function generateWrongAnswers(
  correctAnswer: string,
  wordTranslations: { [key: string]: string },
): { text: string; wordTranslations: { [key: string]: string } }[] {
  const words = correctAnswer.split(/\s+/)
  const wrongAnswers: { text: string; wordTranslations: { [key: string]: string } }[] = []

  // Common French words for replacements
  const nounReplacements = [
    "chat",
    "chien",
    "arbre",
    "maison",
    "voiture",
    "livre",
    "jour",
    "nuit",
    "fleur",
    "pierre",
    "eau",
    "feu",
    "vent",
    "soleil",
    "lune",
    "étoile",
    "mer",
    "montagne",
    "rivière",
    "forêt",
  ]
  const verbReplacements = [
    "mange",
    "court",
    "danse",
    "chante",
    "saute",
    "parle",
    "écoute",
    "regarde",
    "touche",
    "sent",
    "goûte",
    "pense",
    "rêve",
    "dort",
    "marche",
    "vole",
    "nage",
    "grimpe",
    "tombe",
    "pousse",
  ]
  const adjectiveReplacements = [
    "grand",
    "petit",
    "beau",
    "laid",
    "rapide",
    "lent",
    "fort",
    "faible",
    "chaud",
    "froid",
    "doux",
    "dur",
    "clair",
    "sombre",
    "jeune",
    "vieux",
    "nouveau",
    "ancien",
    "bon",
    "mauvais",
  ]

  const usedPositions = new Set<number>()

  for (let i = 0; i < 3; i++) {
    // Try to find a position we haven't used yet (skip the first word)
    let position = -1
    let attempts = 0
    while ((position === -1 || usedPositions.has(position)) && attempts < 50) {
      position = Math.floor(Math.random() * (words.length - 1)) + 1 // Start from index 1 to skip first word
      attempts++
    }

    if (attempts >= 50) {
      position = (i + 1) % words.length
      if (position === 0) position = 1
    }

    usedPositions.add(position)

    const originalWord = words[position]
    const cleanOriginal = originalWord.toLowerCase().replace(/[.,!?;:]/g, "")

    // Determine word type and get replacement
    let replacement = ""
    const allReplacements = [...nounReplacements, ...verbReplacements, ...adjectiveReplacements]

    // Try to get a replacement that's different from the original
    let maxAttempts = 20
    while (maxAttempts > 0) {
      const randomIndex = Math.floor(Math.random() * allReplacements.length)
      replacement = allReplacements[randomIndex]
      if (replacement !== cleanOriginal) break
      maxAttempts--
    }

    // Preserve punctuation
    const punctuation = originalWord.match(/[.,!?;:]$/)?.[0] || ""
    const replacementWithPunctuation = replacement + punctuation

    const newWords = [...words]
    newWords[position] = replacementWithPunctuation

    // Create word translations for this wrong answer
    const newWordTranslations = { ...wordTranslations }
    newWordTranslations[replacement] = getEnglishTranslation(replacement)

    wrongAnswers.push({
      text: newWords.join(" "),
      wordTranslations: newWordTranslations,
    })
  }

  return wrongAnswers
}

function getEnglishTranslation(frenchWord: string): string {
  const translations: { [key: string]: string } = {
    chat: "cat",
    chien: "dog",
    arbre: "tree",
    maison: "house",
    voiture: "car",
    livre: "book",
    jour: "day",
    nuit: "night",
    fleur: "flower",
    pierre: "stone",
    eau: "water",
    feu: "fire",
    vent: "wind",
    soleil: "sun",
    lune: "moon",
    étoile: "star",
    mer: "sea",
    montagne: "mountain",
    rivière: "river",
    forêt: "forest",
    mange: "eats",
    court: "runs",
    danse: "dances",
    chante: "sings",
    saute: "jumps",
    parle: "speaks",
    écoute: "listens",
    regarde: "watches",
    touche: "touches",
    sent: "smells",
    goûte: "tastes",
    pense: "thinks",
    rêve: "dreams",
    dort: "sleeps",
    marche: "walks",
    vole: "flies",
    nage: "swims",
    grimpe: "climbs",
    tombe: "falls",
    pousse: "pushes",
    grand: "big",
    petit: "small",
    beau: "beautiful",
    laid: "ugly",
    rapide: "fast",
    lent: "slow",
    fort: "strong",
    faible: "weak",
    chaud: "hot",
    froid: "cold",
    doux: "soft",
    dur: "hard",
    clair: "bright",
    sombre: "dark",
    jeune: "young",
    vieux: "old",
    nouveau: "new",
    ancien: "ancient",
    bon: "good",
    mauvais: "bad",
  }
  return translations[frenchWord] || frenchWord
}
