import React, { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { BASE_IMAGE_URL } from '@/pages/api/endpoint'

export default function ProductNavigationNoImg({ illustrationSrc, illustrationAlt }) {
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { label: 'Select Product', href: '#', active: true },
    { label: 'Penetration Testing', href: '/products/penetration-testing' },
    { label: 'Managed Risk', href: '/products/managed-risk' },
    { label: 'Managed Security Journey', href: '/products/managed-security' },
    { label: 'Incident Response', href: '/products/incident-response' },
    { label: 'DevSecOps', href: '/products/devsecops' },
    { label: 'Vulnerability Management', href: '/products/vulnerability-assessment' },
    { label: 'SOC', href: 'products/cybersecurity-operation-centre' },
    { label: 'Threat Hunting', href: 'products/threat-hunting' }
  ]

  const filteredTabs = tabs.filter(tab =>
    tab.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section>
      
      <div className="container px-6 py-8 mx-auto md:px-16">
  {illustrationSrc.map((src, i) => (
    <div key={src} className="relative w-full mb-12">
      {/* Button on top of image */}
      {/* <div className="absolute  left-1/2 transform -translate-x-1/2 z-10">
        <Link
          href="#learn-more"
          className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition"
        >
          <span>HOW IT WORKS</span>
          <ArrowRight className="w-5 h-5 ml-3" />
        </Link>
      </div> */}

      {/* Image */}
      <img
        src={`${BASE_IMAGE_URL}/${src}.png`}
        alt={illustrationAlt}
        className="block w-full h-auto"
      />
    </div>
  ))}
</div>

      {/* <div className="container px-6 py-8 mx-auto md:px-16">
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
              src={`${BASE_IMAGE_URL}/assets/images/${src}.png`}
              alt={illustrationAlt}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div> */}
    </section>
  )
}
