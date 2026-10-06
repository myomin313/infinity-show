import React from 'react'

const statsData = [
  {
    value: 60,
    description:
      'Organisations that are required to adhere to six or more compliance frameworks.',
  },
  {
    value: 65,
    description:
      'Threats investigated by security teams that are low priority or false positives.',
  },
  {
    value: 84,
    description:
      'Cybersecurity professionals that report experiencing stress, fatigue, and burnout.',
  },
]

export default function StatsSection() {
  return (
    <section className="container px-6 mx-auto space-y-8 py-15 md:px-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-2 text-3xl font-extrabold">The Ost Infinity</h3>
          <h2 className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent text-3xl font-extrabold mb-4">
            ViXa Identity-First Platform
          </h2>
          <p className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent mb-6 text-lg font-medium">
            Broad visibility across endpoint, network, identity, and cloud,
            powered by ViXa AI
          </p>
          <p className="text-sm leading-relaxed">
            ViXa Identity-First Platform processes over 7 million events daily,
            and enriches them with threat intelligence, machine learning and
            risk context to drive faster threat detection, simplify incident
            response, and eliminate alert fatigue.
          </p>
        </div>
        <div className="space-y-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="space-y-3">
              <div className="relative w-full bg-[#1C387E] rounded-full h-8 border border-[#2a2a6b]/50 overflow-hidden">
                <div
                  className="relative bg-gradient-to-r from-[#0448AD] to-[#12145E] h-full rounded-full"
                  style={{ width: `${stat.value}%` }}
                >
                  <span className="absolute text-sm text-white transform -translate-y-1/2 right-1 top-1/2">
                    {stat.value}%
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/90">{stat.description}</p>
            </div>
          ))}
          <div className="flex items-center pt-4 space-x-2">
            <span className="text-xs text-white/60">+</span>
            <span className="text-xs text-white/60">Sources:</span>
          </div>
        </div>
      </div>
    </section>
  )
}
