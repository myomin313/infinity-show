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
    { label: 'Incident Response', href: '#' },
    { label: 'DevSecOps', href: '/products/devsecops' },
    { label: 'Vulnerability Management', href: '/products/vulnerability-assessment' }
  ]

  const filteredTabs = tabs.filter(tab =>
    tab.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section>
      <div className="container px-6 py-8 mx-auto text-center md:px-16">
        <h1 className="py-6 text-3xl">Explore More about DevSecOps Principles and Practices </h1>
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
