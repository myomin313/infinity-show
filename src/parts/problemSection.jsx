import React from 'react'
import InvestmentSection from '@/parts/investmentSection';

export default function InfoCardsSection({data, alignClass = "text-left"}) {
  return (
    <>
        <section className="container px-4 py-12 mx-auto sm:px-8 md:px-16">
            {/* <h2 className={`mb-6 text-4xl font-semibold ${alignClass}`}>
                {data.title}
            </h2>
            <p className={`mb-8 text-xl text-white/90 ${alignClass}`}>
                {data.description}
            </p> */}
            <div className="w-full mb-20">
                <img
                    src={`/assets/images/temp/group-1.png`}
                    alt=''
                    className="block w-full h-auto"
                />
                <img
                    src={`/assets/images/temp/group-2.png`}
                    alt=''
                    className="block w-full h-auto mt-50"
                />
            </div>
            <div className="grid justify-end grid-flow-col grid-cols-3 gap-15 auto-cols-fr">
            {/* {data.cards.map(({ title, text, number }) => (
                <div
                key={title}
                className="w-full p-0.5 rounded-3xl bg-gradient-to-r from-[#F98D11] to-[#199AE2]"
                >
                <div className="bg-[#111865] rounded-3xl p-12 flex flex-col space-y-3">
                <span className="text-[#F98D11] text-5xl font-semibold">
                {number}
                </span>
                <h4 className="my-4 text-xl font-semibold text-white">{title}</h4>
                        <p className="text-white/80">{text}</p>
                    </div>
                    </div>
                    ))} */}        
            </div>
        </section>
        <InvestmentSection />
        <section className="container px-4 py-12 mx-auto sm:px-8 md:px-16">
            <div className="w-full mb-20">
                <img
                    src={`/assets/images/temp/group-3.png`}
                    alt=''
                    className="block w-full h-auto"
                />
            </div>
        </section>
    </>
  )
}
