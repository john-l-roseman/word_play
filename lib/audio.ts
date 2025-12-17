export function playSuccessSound() {
  if (typeof window === "undefined") return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

  // Two-tone chime (523Hz + 659Hz for 200ms)
  const oscillator1 = audioContext.createOscillator()
  const oscillator2 = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator1.connect(gainNode)
  oscillator2.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator1.frequency.value = 523
  oscillator2.frequency.value = 659
  oscillator1.type = "sine"
  oscillator2.type = "sine"

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

  oscillator1.start(audioContext.currentTime)
  oscillator2.start(audioContext.currentTime)
  oscillator1.stop(audioContext.currentTime + 0.2)
  oscillator2.stop(audioContext.currentTime + 0.2)
}

export function playErrorSound() {
  if (typeof window === "undefined") return

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

  // Buzz (200Hz for 300ms)
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 200
  oscillator.type = "sawtooth"

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.3)
}
