"use client"

import { motion } from "framer-motion"

interface MistakeDotsProps {
  mistakes: number
}

export function MistakeDots({ mistakes }: MistakeDotsProps) {
  const maxMistakes = 4

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-1">Mistakes Remaining:</span>
      <div className="flex gap-1.5">
        {Array.from({ length: maxMistakes }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{
              scale: index < maxMistakes - mistakes ? 1 : 0.5,
              opacity: index < maxMistakes - mistakes ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
            className={`w-3 h-3 rounded-full ${index < maxMistakes - mistakes ? "bg-primary" : "bg-muted-foreground"}`}
          />
        ))}
      </div>
    </div>
  )
}
