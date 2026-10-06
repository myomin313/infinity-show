'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { BASE_IMAGE_URL } from '@/pages/api/endpoint'

export default function HomeIllustration({ 
  src, 
  current, 
  onSlideChange,
  autoSlide = false, 
  interval = 5000 
}) {
  const images = Array.isArray(src) ? src : [src]
  const total = images.length
  
  const prev = () => onSlideChange(current === 0 ? total - 1 : current - 1)
  const next = () => onSlideChange(current === total - 1 ? 0 : current + 1)

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return
    const timer = setInterval(() => next(), interval)
    return () => clearInterval(timer)
  }, [autoSlide, interval, current])

  return (
    <div className="relative flex w-full h-full p-10">
      {/* <div className='flex items-center justify-center w-full p-10 overflow-hidden min-h-[280px] md:min-h-[800px]'> */}
       <div className='flex items-center justify-center w-full p-10 overflow-hidden min-h-[280px] md:min-h-[800px]'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000  ${
              index === current ? 'opacity-100' : 'opacity-0'
            } ml-15`}
          >
            
            <img
              src={`${BASE_IMAGE_URL}/${image}`}
              alt={`Slide ${index + 1}`}
              // width={600}
              // height={400}
              className="w-full max-w-lg -mr-20 mb-50 object-contain"
              priority={index === current}
            />
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="absolute flex items-center space-x-4 text-xs text-[#686868] bottom-4 left-4">
          <button 
            onClick={prev} 
            className="transition-colors hover:text-orange-400"
            aria-label="Previous image"
          >
            &lt;
          </button>
          <span className="text-white/50">
            <span className="font-mono">{String(current + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-[#199AE2]">/</span>
            <span className="font-mono">{String(total).padStart(2, '0')}</span>
          </span>
          <button 
            onClick={next} 
            className="transition-colors hover:text-orange-400"
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  )
}