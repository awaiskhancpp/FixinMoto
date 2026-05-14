'use client'
import { useState } from 'react'
const ButtonName = [
  { name: 'Automotive News', onclick: {} },
  { name: 'Electric Vehicles (EVs)', onclick: {} },
  { name: 'Car Technology', onclick: {} },
]

export function Tags() {
  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set())
  const toggleButton = (i: number) => {
    setSelectedButtons((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(i)) {
        newSet.delete(i)
      } else {
        newSet.add(i)
      }
      return newSet
    })
  }
  return (
    <div className="bg-primary mt-4 px-[15px] pb-6 rounded-lg">
      <h2 className="text-white font-semibold mt-3 pt-2">Tags</h2>
      <div className="pt-4 flex flex-wrap gap-3 text-white">
        {ButtonName.map((b, i) => (
          <button
            key={i}
            onClick={() => toggleButton(i)}
            className={`rounded-3xl px-3 py-2 transition-all duration-200 ${
              selectedButtons.has(i) ? 'bg-secondary' : 'border border-white'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>
    </div>
  )
}
