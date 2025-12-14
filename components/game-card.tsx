"use client"

import { motion } from "framer-motion"

interface GameCardProps {
  text: string
  onClick: () => void
  isSelected: boolean
  isCorrect: boolean | null
  showCorrect: boolean
  disabled: boolean
}

export function GameCard({ text, onClick, isSelected, isCorrect, showCorrect, disabled }: GameCardProps) {
  const getCardStyle = () => {
    if (showCorrect) {
      return "bg-success text-success-foreground border-success"
    }
    if (isSelected && isCorrect === true) {
      return "bg-success text-success-foreground border-success"
    }
    if (isSelected && isCorrect === false) {
      return "bg-error text-error-foreground border-error"
    }
    if (isSelected) {
      return "bg-selected text-selected-foreground border-selected"
    }
    return "bg-muted text-muted-foreground border-border hover:bg-selected hover:text-selected-foreground"
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`p-6 rounded-xl border-2 font-medium text-lg transition-all duration-200 ${getCardStyle()} ${
        !disabled && !isSelected ? "cursor-pointer" : "cursor-default"
      }`}
      whileHover={!disabled && !isSelected ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isSelected ? { scale: 0.98 } : {}}
      animate={
        isSelected && isCorrect === false
          ? {
              x: [0, -8, 8, -8, 8, -8, 8, 0],
              transition: { duration: 0.5 },
            }
          : {}
      }
    >
      <span className="leading-relaxed text-balance">{text}</span>
    </motion.button>
  )
}
