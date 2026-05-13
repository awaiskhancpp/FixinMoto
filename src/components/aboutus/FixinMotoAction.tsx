'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function FixinMotoAction() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [overlayOpen, setOverlayOpen] = useState(true)
  const handlePlay = async () => {
    setOverlayOpen(false)
    try {
      await videoRef.current?.play()
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="w-full h-screen md:h-[90vh] relative">
      <video
        src="/inActionVideo.mp4"
        className="w-full h-full object-cover"
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        controls={!overlayOpen}
      />
      {overlayOpen && (
        <div
          role="button"
          tabIndex={0}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={handlePlay}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              void handlePlay()
            }
          }}
          aria-label="Play video"
        >
          <span className="flex min-h-0 flex-1 items-center justify-center">
            <Image src="/PlayButton.png" alt="" width={64} height={64} aria-hidden />
          </span>
          <div className="flex w-full justify-start px-10 py-10">
            <h3 className="text-white bg-secondary inline-block text-5xl skew-x-[-6deg] px-1">
              See FixinMoto in Action
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}
