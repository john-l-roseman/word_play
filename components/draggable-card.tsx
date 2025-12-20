"use client"

import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

interface DraggableCardProps {
  id: string
  phrase: string
  source: string
  isMatched: boolean
}

export function DraggableCard({ id, phrase, source, isMatched }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    disabled: isMatched,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  }

  if (isMatched) {
    return (
      <div className="bg-emerald-500 border-2 border-emerald-600 rounded-lg p-3 animate-fade-out transition-all duration-500">
        <div className="text-sm md:text-base text-white leading-relaxed">
          {phrase}
          <br />
          <em className="text-emerald-100 text-xs md:text-sm">
            {"-- "}
            {source}
          </em>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-stone-200 border-2 border-stone-400 rounded-lg p-3 cursor-grab active:cursor-grabbing hover:shadow-lg transition-shadow touch-none w-full min-w-0 break-words overflow-wrap-anywhere"
    >
      <div className="text-sm md:text-base text-stone-900 leading-relaxed">
        {phrase}
        <br />
        <em className="text-stone-600 text-xs md:text-sm">
          {"-- "}
          {source}
        </em>
      </div>
    </div>
  )
}
