'use client'
import { useState } from 'react'
import { useCitiesSearch } from './hooks/Places'
import { getLocationCoorDinates } from '@/lib/getLocationCoordinates'
import { toast } from 'react-toastify'
interface LocationFormProps {
  onLocationChange?: (coords: { lat: number; lon: number }) => void
}

export const LocationForm = ({ onLocationChange }: LocationFormProps) => {
  const [area, setArea] = useState<string>('')
  const [selectedState, setSelectedState] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { cities, searchCities } = useCitiesSearch(selectedState)

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setArea(value)
    searchCities(value)
  }
  const send = async () => {
    if (!selectedState) {
      toast.error('Please slect a state first')
      return
    }
    if (!area) {
      toast.error('Please slect area')
      return
    }
    const cityExists = cities.some((city: any) => city.name === area)

    if (!cityExists) {
      toast.error('Please select a city from the suggestions')
      setArea('')
      return
    }
    setIsLoading(true)
    const coords = await getLocationCoorDinates(`${area}, ${selectedState}`)
    if (coords) {
      onLocationChange?.(coords)
    }
    setIsLoading(false)
  }

  return (
    <div className="bg-black md:w-[345px] md:h-[280px] w-[90vw] h-auto rounded-xl flex flex-col justify-center items-center space-y-4 py-6">
      <div className="w-full ml-9 lg:ml-8 relative">
        <input
          type="text"
          placeholder="Enter Your Location"
          value={area}
          onChange={handleAreaChange}
          className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
        />
        {cities.length > 0 && (
          <div className="absolute top-full left-0 w-[90%] mt-1 bg-white border border-gray-300 rounded-lg z-10 max-h-20 overflow-y-auto">
            {cities.map((city: any) => (
              <div
                key={city.id}
                onClick={() => setArea(city.name)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {city.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <input type="date" className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white" />
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
        required
      >
        <option value="">Select Your Area</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
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
