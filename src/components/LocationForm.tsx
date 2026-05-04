import { useState } from 'react'
import { getLocationCoorDinates } from '@/lib/getLocationCoordinates'

export const LocationForm = () => {
  const [area, setarea] = useState<string>('')

  const send = async () => {
    await getLocationCoorDinates(area)
  }
  return (
    <>
      <div className="bg-black md:w-[345px] md:h-[266px] w-[90vw] h-auto rounded-xl flex flex-col justify-center items-center space-y-4 py-4">
        <input
          type="text"
          placeholder="Enter Your Location"
          className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
          onChange={(e) => setarea(e.target.value)}
        />
        <input
          type="date"
          className="text-gray-500 bg-white flex justify-start size-10 border w-[90%] h-auto px-3 py-3 rounded-lg S[&::-webkit-datetime-edit]:hidden"
        />
        <select
          name="places"
          id="places"
          className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
        >
          <option defaultValue="null">Select Your Area</option>
          <option value="london">London</option>
          <option value="newyork">New York</option>
          <option value="sandiego">San Diego</option>
        </select>
        <button
          className="bg-red-600 rounded-lg text-white py-3 px-10 flex items-start"
          onClick={send}
        >
          Check Availability
        </button>
      </div>
    </>
  )
}
