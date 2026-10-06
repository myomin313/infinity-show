import React, { useState } from 'react';

const MODELS = [
  { id: 1, name: 'Per-data usage pricing',        cost: '€35 - €600',      avg: '€3,500 - €60,000' },
  { id: 2, name: 'Per-device pricing',            cost: '€38 - €675',      avg: '€3,800 - €67,500' },
  { id: 3, name: 'Per-user pricing',              cost: '€35 - €600',      avg: '€3,500 - €60,000' },
  { id: 4, name: 'Cloud-based pricing',           cost: '€43 - €711',      avg: '€4,300 - €71,100' },
  { id: 5, name: 'Tiered pricing',                cost: '€50 - €970',      avg: '€5,000 - €97,000' },
];
const RECOMMENDED_ID = 5;

export default function InvestmentSection() {
  const [selectedId, setSelectedId] = useState(3);

  return (
    <section className="container px-4 mx-auto md:px-16">
      <h2 className="text-2xl text-center bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent uppercase mb-15">
        YOUR INVESTMENT FOR SOC/MSS PRICING MODELS WITH OST INFINITY
      </h2>
      <div className="relative p-px rounded-3xl bg-gradient-to-r from-[#F98D11] to-[#199AE2] overflow-hidden">
        <div className="bg-[#111865] rounded-3xl p-10">
          <div className="mb-6 space-y-5 text-2xl">
            <h3 className="font-semibold text-[#199AE2]">
              ViXa Platform
            </h3>
            <p className="mt-1 text-white/90">
              Managed Security Services
            </p>
            <hr className="mt-4 border-t border-white/20" />
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#F98D11] uppercase text-lg">
                <th className="py-2 text-left">Pricing Model Type</th>
                <th className="py-2 text-center">Cost per user/device/month</th>
                <th className="py-2 text-center">
                  Average monthly expense<br /> (estimated for 100 employees)
                </th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((m, idx) => {
                const isSel = m.id === selectedId;
                const isRec = m.id === RECOMMENDED_ID;
                let bgClass = '';
                // if (isRec) bgClass = 'bg-[#213A21]';
                if (isSel) bgClass = 'bg-[#213A21]';
                else if (idx % 2 === 0) bgClass = 'bg-white/10';

                return (
                  <tr key={m.id} className={`${bgClass} text-2xl uppercase`}>
                    <td className="px-2 py-3">{m.name}</td>
                    <td className="px-2 py-3 text-center">{m.cost}</td>
                    <td className="px-2 py-3 text-center">{m.avg}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col items-end mt-8 mr-10">
            <div className='space-y-5 '>
                <div className="flex items-center space-x-8">
                    <label htmlFor="revenue-model" className="text-sm font-medium text-[#199AE2]">
                    Revenue Model
                    </label>
                    <input
                    id="revenue-model"
                    type="number"
                    min={1}
                    max={MODELS.length}
                    value={selectedId}
                    onChange={e => setSelectedId(+e.target.value)}
                    className="w-20 bg-white text-gray-900 border border-white/40 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#199AE2]"
                    />
                </div>
                <button
                    className="w-full py-3 bg-[#F98D11] text-white text-sm font-semibold rounded-xl hover:bg-[#ea8d24] transition"
                >
                    Buy Now
                </button>
                <p className="text-sm text-white/80">
                    Not sure?{' '}
                    <a href="#" className="text-white underline hover:text-white/90">
                    Calculate services →
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}