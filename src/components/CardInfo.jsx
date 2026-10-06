import React from 'react'

export default function CardInfo({data, center}) {
  const alignClass = center ? "text-center" : "text-left";

  return (
    <div className="container px-6 pb-10 mx-auto space-y-8 md:px-16">
      {data.map((card, index) => (
        <>
          <h1 className={`font-bold text-[50px] mt-25 mb-15 ${alignClass}`}>
            {card.heading}
          </h1>
          <div
            key={index}
            className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px] rounded-3xl"
          >
            <div className={`p-10 bg-[#111865] backdrop-blur-sm rounded-3xl ${alignClass}`}>
              <p className="text-[24px] leading-10 mb-5 uppercase font-semibold">
                {card.title}
              </p>
              <ol className="text-2xl leading-relaxed list-inside">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}