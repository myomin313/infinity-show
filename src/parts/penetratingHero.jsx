import Link from 'next/link'
import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react'
import PeneHeroIllustration from '@/components/PeneHeroIllustration'


export default function PenetratingHeroContent({
  heading,
  desc,
  button = 'Learn More',
  activeMenu = 'primary',
  setShowAll
}) {
  const { pathname } = useRouter()
  const [menuRank, setMenuRank] = useState(activeMenu)

  // Menu & Illustration mapping logic
  const menuMap = { penetrationTesting: [
    { number: '01', label: 'Penetration Testing', href: '/products/penetration-testing' },
    { number: '02', label: 'How It Works', href: '#how-it-work' },
    { number: '03', label: 'Penetration Testing Overview', href: '#overview' },
    { number: '04', label: 'Synergies combining Pen Testing and XDR', href: '#testing-xdr' },
  ],
   managedRisk : [
  { number: '01', label: 'Managed Risk', href: '/products/managed-risk' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Managed Risk Overview', href: '#overview' },
],
 securityJourney : [
  { number: '01', label: 'Security Journey', href: '/products/security-journey' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Security Journey Overview', href: '#overview' },
],
 threatHunting: [
  { number: '01', label: 'Threat Hunting', href: '/products/threat-hunting' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Threat Hunting Overview', href: '#overview' },
],
trainingAwareness: [
  { number: '01', label: 'Training Awareness', href: '/products/training-awareness' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Cyber Security Awareness Overview', href: '#overview' },
],
devsecops:[
  { number: '01', label: 'DevSecOps', href: '/products/devsecops' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'DevSecOps Overview', href: '#overview' },
],
xdr:[
  { number: '01', label: 'Extended Detection and Response (XDR)', href: '/products/extended-detection-and-response' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Why ViXa Identity-First platform Cloud-Native XDR', href: '#overview' },
],
vulnerabilityAssessment:[
  { number: '01', label: 'Vulnerability Assessment', href: '/products/vulnerability-assessment' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Vulnerability Assessment Overview', href: '#overview' },
]
}

  const illusMap = {
    penetrationTesting: ['penetration-testing/penetration-testing.svg'],
    managedRisk:['managed-risk/risk-management.svg'],
    securityJourney:['security-journey/security-journey.svg'],
    threatHunting:['threat-hunting/threat-hunting.svg'],
    trainingAwareness:['training-awareness/training-awareness.svg'],
    devsecops:['devsecops/devsecops.svg'],
    xdr:['extended-detection-and-response/xdr.svg'],
    vulnerabilityAssessment:['vulnerability-assessment/vulnerability-assessment.svg']
  }

  const menu = menuMap[menuRank] || []
  const illustrations = illusMap[menuRank] || []
  const isFive = menuRank === 'five'

  const initialIndex = useMemo(() => {
    const idx = menu.findIndex(item => item.href === pathname)
    return idx >= 0 ? idx + 1 : 1
  }, [menu, pathname])

  return (
    <section className="relative overflow-hidden">
      {/* Full-width layout */}
      <div className="container relative z-10 flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 pt-20 pb-10 space-y-8">
          {/* <div className="font-bold space-y-2 text-[22px]">
            <h1 className="text-5xl max-w-[90%] mb-4" dangerouslySetInnerHTML={{ __html: heading }} />
            <p className='max-w-[90%] mb-6' dangerouslySetInnerHTML={{ __html: desc }} />
          </div> */}
          <div className="font-bold space-y-2 text-[22px] min-h-[400px] mb-30">
            <div className='relative h-full'>
              <div className='flex flex-col min-h-[350px]'>
            <h1 className="text-5xl max-w-[90%] mb-8" dangerouslySetInnerHTML={{ __html: heading }} />
             <div className='min-h-[120px] mb-8'>
             <p className='max-w-[88%] mb-6' dangerouslySetInnerHTML={{ __html: desc }} />
             </div>
              <Link
                 href="#learn-more"
                 className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition self-start"
               >
            <span>{button}</span>
            <ArrowRight className="w-4 h-8 ml-15" />
          </Link>
            </div>
            </div>
          </div> 

          {/* <Link
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition"
          >
            <span>{button}</span>
            <ArrowRight className="w-4 h-8 ml-15" />
          </Link> */}

          <nav className="space-y-4 text-[22px]">
            {menu.map((item, i) => {
              const isActive = pathname === item.href
              const linkShiftClass = isFive ? 'hover:ml-[20px] transition-all duration-200' : ''
              const hoverGradientClass = !isFive
                ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F98D11] group-hover:to-[#199AE2] group-hover:bg-clip-text'
                : ''
              const numberVisibilityClass = isFive && !isActive ? 'hidden' : 'inline-block'
              const isML = isFive ? 'ml-15' : ''

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      setShowAll?.(true)
                    }
                  }}
                  className={`flex items-center space-x-4 group ${linkShiftClass}`}
                >
                  <span className={`${numberVisibilityClass} font-mono transition-colors duration-200 ${
                    isActive ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-400'
                  }`}>{item.number}</span>
                  <span className={`transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent'
                      : `text-white ${isML}`
                  } ${hoverGradientClass}`}>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 min-h-[700px] lg:h-screen">
          <PeneHeroIllustration src={illustrations} initial={initialIndex} />
        </div>
      </div>
    </section>
  )
}
