'use client'
import { useEffect, useState } from 'react'

const growthData = [
  { value: 40, label: 'Year 1' },
  { value: 50, label: 'Year 2' },
  { value: 60, label: 'Year 3' },
  { value: 78, label: 'Year 4' }
]

export default function IntegratedAnimatedBars() {
  const [heights, setHeights] = useState(Array(growthData.length).fill(10))
  const [activeIndex, setActiveIndex] = useState(-1)
  const [completedIndex, setCompletedIndex] = useState(-1)

  useEffect(() => {
    // Animate each bar one after another
    growthData.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndex(i)
        // Grow the bar to its target height (value * 3.5 for visualization)
        setHeights(prev => prev.map((h, j) => 
          j === i ? growthData[i].value * 3.5 : h
        ))
        
        // Mark as completed after growth animation finishes
        setTimeout(() => {
          setCompletedIndex(i)
        }, 700)
      }, i * 600) // Delay each animation by 600ms
    })
  }, [])

  return (
    <section className="w-full bg-gradient-to-r from-[#3B0D61] to-[#0D2F87] py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Bottom line */}
        <div className="h-[2px] bg-gray-400 w-full mb-4"></div>
        
        <div className="flex items-end justify-between gap-6 relative">
          {growthData.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {/* Percentage label */}
              <div className={`mb-2 text-2xl font-bold transition-all duration-300 ${
                activeIndex >= i ? 'text-orange-400' : 'text-gray-400'
              }`}>
                {item.value}%
              </div>
              
              {/* Vertical bar container */}
              <div className="relative">
                {/* Main vertical bar */}
                <div
                  className="w-6 rounded-t-lg transition-all duration-700 ease-in-out bg-gradient-to-t from-[#F98D11] to-[#199AE2]"
                  style={{
                    height: `${heights[i]}px`,
                  }}
                />
                
                {/* Horizontal extension at top */}
                {completedIndex >= i && (
                  <div 
                    className="absolute top-0 left-full h-[6px] bg-gradient-to-r from-[#F98D11] to-[#199AE2] transition-all duration-300 ease-out"
                    style={{
                      width: '0px',
                      animation: 'extendRight 0.5s forwards 0.2s'
                    }}
                  />
                )}
              </div>
              
              {/* Year label */}
              <div className={`mt-4 text-sm transition-all ${
                activeIndex >= i ? 'text-white opacity-90' : 'text-gray-400 opacity-70'
              }`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes extendRight {
          from { width: 0px; opacity: 0; }
          to { width: 40px; opacity: 1; }
        }
      `}</style>
    </section>
  )
}