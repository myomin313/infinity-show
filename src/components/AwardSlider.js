'use client'

import Image from 'next/image'
import { BASE_IMAGE_URL } from '@/pages/api/endpoint'

const slides = [
  { 
    title: 'Global Leader', 
    image: '/login/ViXa-circle.svg', 
    color: 'text-[#F98D11]',
    align: 'items-start'  // Align first item to container start
  },
  { 
    title: 'Highest User Adoption', 
    image: '/login/ViXa-circle.svg', 
    color: 'text-[#199AE2]',
    align: 'items-center' 
  },
  { 
    title: 'Europe Leader', 
    image: '/login/ViXa-circle.svg', 
    color: 'text-[#35A947]',
    align: 'items-center' 
  },
  { 
    title: 'Enterprise Leader', 
    image: '/login/ViXa-circle.svg', 
    color: 'text-[#03378A]',
    align: 'items-center' 
  }
]

export default function AwardSlider() {
  return (
    <section className="bg-gradient-to-r from-[#02356F] to-[#031641] py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {slides.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-6 transition-all duration-300 ${item.align}`}
            >
              <div className={`mb-6 w-40 h-40 flex ${idx === 0 ? 'justify-start' : 'justify-center'}`}>
                <Image
                  src={`${BASE_IMAGE_URL}${item.image}`}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className={`${idx === 0 ? 'text-left' : 'text-center'}`}>
                <h4 className={`text-2xl font-bold ${item.color} mb-2 whitespace-nowrap`}>
                  {item.title}
                </h4>
                <p className={`text-white/80 font-medium ${idx === 0 ? 'text-center' : ''}`}>
                  WINTER 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}