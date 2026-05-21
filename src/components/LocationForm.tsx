'use client'
import { useState } from 'react'
import { getLocationCoorDinates } from '@/lib/getLocationCoordinates'

interface LocationFormProps {
  onLocationChange?: (coords: { lat: number; lon: number }) => void
}

export const LocationForm = ({ onLocationChange }: LocationFormProps) => {
  const [area, setArea] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const send = async () => {
    if (!area || !selectedCity) return

    setIsLoading(true)
    const coords = await getLocationCoorDinates(`${area}, ${selectedCity}`)
    if (coords) {
      onLocationChange?.(coords)
    }
    setIsLoading(false)
  }

  return (
    <div className="bg-black md:w-[345px] md:h-[280px] w-[90vw] h-auto rounded-xl flex flex-col justify-center items-center space-y-4 py-6">
      <input
        type="text"
        placeholder="Enter Your Location"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
      />
      <input type="date" className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white" />
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
      >
        <option value="">Select Your Area</option>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="San Diego">San Diego</option>
      </select>
      <button
        onClick={send}
        disabled={isLoading}
        className="bg-red-600 rounded-lg text-white py-3 px-10"
      >
        {isLoading ? 'Loading...' : 'Check Availability'}
      </button>
    </div>
  )
}
