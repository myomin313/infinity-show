'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white">
      <Image
        src='/assets/images/hr-hero-bg.png'
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#182C6C] via-[#36206E]/40 to-transparent z-10" />
    </section>
  )
}
