"use client"

import { useDroppable } from "@dnd-kit/core"

interface DropZoneProps {
  id: string
  text: string
  isMatched: boolean
}

export function DropZone({ id, text, isMatched }: DropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    disabled: isMatched,
  })

  if (isMatched) {
    return (
      <div className="bg-emerald-500 border-2 border-emerald-600 rounded-lg p-3 animate-fade-out transition-all duration-500">
        <div className="text-sm md:text-base text-white leading-relaxed">{text}</div>
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      className={`bg-stone-300 border-2 rounded-lg p-3 min-h-[80px] flex items-center transition-all w-full min-w-0 break-words overflow-wrap-anywhere ${
        isOver ? "border-amber-500 bg-amber-100 scale-105 shadow-lg" : "border-stone-500"
      }`}
    >
      <div className="text-sm md:text-base text-stone-900 leading-relaxed">{text}</div>
    </div>
  )
}
