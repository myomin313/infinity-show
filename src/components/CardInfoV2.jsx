import React from 'react'
import Image from 'next/image'

export default function InfoCardsSection({data}) {
  return (
    <section className="container px-4 py-12 mx-auto sm:px-8 md:px-16">
      <h2 className={`mb-6 text-4xl font-semibold uppercase bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent`}>
          {data.title}
      </h2>
      <p className={`mb-8 text-xl text-white/90`}>
          {data.description}
      </p>
      <div className="grid grid-cols-3 gap-15">
        {data.cards.map(({ title, subtitle, icon }) => (
          <div
            key={title}
            className="w-full p-0.5 rounded-3xl bg-gradient-to-r from-[#F98D11] to-[#199AE2]"
          >
            <div className="bg-[#111865] rounded-3xl p-8 flex flex-col space-y-3">
              <div className="relative w-18 h-25">
                <Image
                  src={icon}
                  alt={title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 className="text-xl font-semibold text-white">{title}</h4>
              <p className="text-white/80">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
