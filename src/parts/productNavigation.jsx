import React, { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'

export default function ProductNavigation({ illustrationSrc, illustrationAlt }) {
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { label: 'Select Product', href: '#', active: true },
    { label: 'Penetration Testing', href: '/products/penetration-testing' },
    { label: 'Managed Risk', href: '/products/managed-risk' },
    { label: 'Managed Security Journey', href: '/products/managed-security' },
    { label: 'Incident Response', href: '/products/incident-response' },
    { label: 'DevSecOps', href: '/products/devsecops' },
    { label: 'Vulnerability Management', href: '/products/vulnerability-assessment' }
  ]

  const filteredTabs = tabs.filter(tab =>
    tab.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section>
      <div className="container px-6 mx-auto py-15 md:px-16">
        <div className="relative w-full md:w-1/3">
          <span className="absolute inset-y-0 flex items-center left-3">
            <Search className="w-5 h-5 text-white" />
          </span>
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full h-10 pl-10 pr-4
              bg-[#611C7E] bg-opacity-10 placeholder-white text-white
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] z-0" />
        <div className="container relative z-10 px-6 mx-auto md:px-16">
          <ul className="flex overflow-x-auto">
            {filteredTabs.length > 0 ? (
              filteredTabs.map(tab => (
                <li key={tab.label}>
                  <Link
                    href={tab.href}
                    className={`block px-4 py-3 text-[13px] whitespace-nowrap 
                      ${tab.active
                        ? 'px-8 bg-blue-500 text-white'
                        : 'text-white hover:bg-white/10'}`}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-white">No results found</li>
            )}
          </ul>
        </div>
      </div>
      <div className="container px-6 py-8 mx-auto md:px-16">
        <div className="flex justify-center mb-8">
          <Link
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition"
          >
            <span>HOW IT WORKS</span>
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>

        {illustrationSrc.map(src => (
          <div key={src} className="w-full mb-12">
            <img
              src={`/assets/images/${src}.png`}
              alt={illustrationAlt}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
