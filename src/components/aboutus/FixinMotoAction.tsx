'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FixinMotoAction() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full h-screen relative">
      {!playing ? (
        <>
          <Image
            src="/inActionImg.png"
            alt="video thumbnail"
            fill
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            <Image src="/PlayButton.png" alt="Play" width={64} height={64} />
          </div>

          <div className="absolute inset-0 flex justify-start items-end px-10 py-10">
            <h3 className="text-white bg-secondary inline-block text-5xl skew-x-[-6deg] px-1">
              See FixinMoto in Action
            </h3>
          </div>
        </>
      ) : (
        <video src="/inActionVideo.mp4" className="w-full h-full object-cover" autoPlay controls />
      )}
    </div>
  )
}
