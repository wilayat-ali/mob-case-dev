"use client"

import { useState } from "react"
import { Grid3X3, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function CustomCollapsibleItem({ title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Grid3X3 className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200",
            isOpen && "transform rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="pl-10 pr-4 py-2">
          <ul className="space-y-1">
            <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Subtopic 1</li>
            <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Subtopic 2</li>
            <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Subtopic 3</li>
          </ul>
        </div>
      )}
    </div>
  )
}
