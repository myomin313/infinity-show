'use client'

import { BASE_IMAGE_URL } from '@/pages/api/endpoint'
import Image from 'next/image'

const slides = [
  { bwImage: '/login/blackandwhite/agoda.png', colorImage: '/login/colour/Agoda.png' },
  { bwImage: '/login/blackandwhite/Akamai.png', colorImage: '/login/colour/akamai.png' },
  { bwImage: '/login/blackandwhite/all-logo.png', colorImage: '/login/colour/all-c-logo.png' },
  { bwImage: '/login/blackandwhite/Cubic.png', colorImage: '/login/colour/Cubic.png' },
  { bwImage: '/login/blackandwhite/Deutsch-Bahn.png', colorImage: '/login/colour/Deutsch-Bahn.png' },
  { bwImage: '/login/blackandwhite/DHL.png', colorImage: '/login/colour/DHL.png' },
  { bwImage: '/login/blackandwhite/Emirates.png', colorImage: '/login/colour/emirates.png' },
  { bwImage: '/login/blackandwhite/IHG-logo.png', colorImage: '/login/colour/IHG-c-logo.png' },
  { bwImage: '/login/blackandwhite/Ikea.png', colorImage: '/login/colour/Ikea.png' },
  { bwImage: '/login/blackandwhite/KLM.png', colorImage: '/login/colour/KLM.png' },
  { bwImage: '/login/blackandwhite/luftthansa-logo.png', colorImage: '/login/colour/lufthansa-c-logo.png' },
  { bwImage: '/login/blackandwhite/NS-Dutch.png', colorImage: '/login/colour/NS.png' },
  { bwImage: '/login/blackandwhite/Rijkswaterstaat.png', colorImage: '/login/colour/Rijkswaterstaat.png' },
  { bwImage: '/login/blackandwhite/standard-chartered.png', colorImage: '/login/colour/standard-chartered.png' },
  { bwImage: '/login/blackandwhite/t-mobile-logo.png', colorImage: '/login/colour/t-mobile-c-logo.png' },
  { bwImage: '/login/blackandwhite/vattenfall.png', colorImage: '/login/colour/Vattenfall.png' },
  { bwImage: '/login/blackandwhite/zara.png', colorImage: '/login/colour/Zara.png' },
]

export default function LoginCompanies() {
  const allSlides = [...slides, ...slides] // duplicate for looping effect

  return (
    <section className="bg-[#12145E]">
      {/* Inline animation styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container mx-auto py-10 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Heading */}
          <div className="md:w-2/5 flex justify-center md:justify-start items-center">
            <h1 className="text-2xl font-bold text-white text-center md:text-left">
              Over 100,000 companies trusting us
            </h1>
          </div>

          {/* Scrolling Logos */}
          <div className="md:w-3/5 overflow-hidden relative">
            <div
              className="flex gap-4 whitespace-nowrap"
              style={{
                animation: 'scroll 40s linear infinite',
                width: 'max-content',
              }}
            >
              {allSlides.map((item, idx) => (
                <div
                  key={idx}
                  className="relative w-[65px] h-[65px] flex-shrink-0 group"
                >
                  <Image
                    src={`${BASE_IMAGE_URL}${item.bwImage}`}
                    alt="Company logo"
                    fill
                    className="absolute object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={`${BASE_IMAGE_URL}${item.colorImage}`}
                    alt="Company logo"
                    fill
                    className="absolute object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
