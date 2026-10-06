'use client'

export default function SupportStructureSection() {
  const rows = [
    { label: 'Access to Consulting', value: ['✔️', '✔️'], bg: 'bg-[#5C1F62]' },
    { label: 'Minimal (L4)', value: ['3 hours - 6 hours', '48 hours'], bg: 'bg-transparent' },
    { label: 'Limited (L3)', value: ['2 hours - 3 hours', '24 hours'], bg: 'bg-[#1A4221]' },
    { label: 'Significant (L2)', value: ['1 hour - 2 hours', '4 hours'], bg: 'bg-transparent' },
    { label: 'Critical (L1)', value: ['30 mins - 1 hour', '2 hours'], bg: 'bg-[#333E77]' },
    { label: 'Response Time', isTitle: true, bg: 'bg-transparent' },
    { label: 'Support hours', value: ['24/7', '24/7'], bg: 'bg-[#1A4221]' },
    { label: 'Support availability', value: ['24/7', '24/7'], bg: 'bg-transparent' },
    { label: 'Interactive ticket system', value: ['✔️', '✔️'], bg: 'bg-[#333E77]' },
    { label: 'Support contacts', value: ['7', '7'], bg: 'bg-transparent' },
    { label: 'Unlimited tickets', value: ['✔️', '✔️'], bg: 'bg-[#143667]' }
   ]

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-25 md:text-5xl">Support Structure</h2>
        <div className="grid grid-cols-[1fr_0.6fr_0.6fr] rounded-xl overflow-hidden items-end gap-0 min-h-[800px]">
          <div className="flex flex-col">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`py-4 px-6 text-left text-sm md:text-base font-medium ${row.bg}`}
              >
                {row.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col bg-gradient-to-r from-[#12145E] to-[#0448AD] h-full">
            <div className="py-4 font-semibold text-center">VIP</div>
            <div className="flex flex-col-reverse justify-start flex-grow font-bold">
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className={`py-4.5 px-4 text-center text-sm md:text-base ${
                    row.isTitle ? 'font-bold text-white/80' : ''
                  }`}
                >
                  {row.value ? row.value[0] : ''}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-gradient-to-r from-[#12145E] to-[#0448AD] h-full">
            <div className="py-4 font-semibold text-center">Enterprise</div>
            <div className="flex flex-col-reverse justify-start flex-grow font-bold">
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className={`py-4.5 px-4 text-center text-sm md:text-base ${
                    row.isTitle ? 'font-bold text-white/80' : ''
                  }`}
                >
                  {row.value ? row.value[1] : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
