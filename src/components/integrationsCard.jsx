import React from 'react';

export default function IntegrationsCard({heading, desc}) {
  return (
    <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden rounded-3xl p-05 bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px]"
        >
        <div className="bg-[#111865] rounded-3xl overflow-hidden">
            <div
            className="p-5 text-2xl font-semibold uppercase"
            style={{ background: 'linear-gradient(90deg, #F98D11 0%, #1D9BF0 100%)' }}
            >
            {heading}
            </div>

            <div className="p-10 text-2xl leading-relaxed">
            {desc}
            </div>
        </div>
        </div>
    </section>
  );
}
