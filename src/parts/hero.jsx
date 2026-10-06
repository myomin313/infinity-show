import Link from 'next/link'
import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react'
import HeroIllustration from '@/components/HeroIllustration'

const primary = [
  { number: '01', label: 'ViXa Platform', href: '/' },
  { number: '02', label: 'How It Works', href: '/how-it-works' },
  { number: '03', label: 'Threat Detection and Response & Observability', href: '/threat-detection' },
  { number: '04', label: 'Network Monitoring and Observability', href: '/network-monitoring' },
  { number: '05', label: 'Platform Integrations', href: '/integrations' },
  { number: '06', label: 'Concierge', href: '/concierge' },
  { number: '07', label: 'Managed Security Service', href: '/products/managed-security' },
]

const secondary = [
  { number: '01', label: 'Product', href: '/' },
  { number: '02', label: 'Services', href: '/' },
  { number: '03', label: 'Price', href: '/' },
]

const third = []

const fourth = [
  { number: '01', label: 'Introduction', href: '/' },
  { number: '02', label: 'Problem Statement', href: '/' },
  { number: '03', label: 'Our Solution', href: '/' },
  { number: '04', label: 'Use of Funds', href: '/' },
  { number: '05', label: 'Accomplishments Date', href: '/' },
  { number: '06', label: 'Revenue Model', href: '/' },
  { number: '07', label: 'Traction', href: '/' },
]

const five = [
  { number: '01', label: 'Managed Security Services', href: '/products/managed-security' },
  { number: '02', label: 'Managed Risk', href: '/products/managed-risk' },
  { number: '03', label: 'How It Works', href: '/' },
  { number: '04', label: 'Vulnerability Assessment', href: '/products/vulnerability-assessment' },
  { number: '05', label: 'Penetration Testing', href: '/products/penetration-testing' },
  { number: '07', label: 'Training Awareness Training', href: '/' },
]

const six = [
  { number: '01', label: 'About Us', href: '#about-us' },
  { number: '02', label: 'Mission', href: '#mission' },
  { number: '03', label: 'Vision', href: '#vision' },
  { number: '04', label: 'Values', href: '#values' },
  { number: '05', label: 'Core Offerings', href: '#core-offerings' },
  { number: '06', label: 'Key Highlights', href: '#key-highlights' },
]

const seven = [
  { number: '01', label: 'Communication', href: '/support/#communication' },
  { number: '02', label: 'Community Forums', href: '/' },
  { number: '03', label: 'Support Tiers', href: '/' },
  { number: '04', label: 'Resources', href: '/' },
]

const eigth = [
  { number: '01', label: 'What is DevSecOps?', href: '#' },
  { number: '02', label: 'How It Works', href: '#' },
  { number: '03', label: 'Why your organizations need DevSecOps?', href: '#' },
  { number: '04', label: 'Your investment and result', href: '#' },
  { number: '05', label: 'DevSecOps Principles and Practices ', href: '#' },
]

const nineth = [
  { number: '01', label: 'Incident Response', href: '#' },
  { number: '02', label: 'How It Works', href: '#' },
  { number: '03', label: 'Why Do You Need Incident Response?', href: '#' },
  { number: '04', label: 'Incident Response Handling Approach', href: '#' }
]

const ten = [
  { number: '01', label: 'Security Outcomes Delivered', href: '#' },
  { number: '02', label: 'Business’ Security Journey', href: '#' },
  { number: '03', label: 'Business’ cyber and network performance thread', href: '#' },
  { number: '04', label: 'Your investments', href: '#' },
  { number: '05', label: 'Access Your Cyber Risk with the Ost infinity Cyber Resilience Assessment', href: '#' }
] 

const eleven = [
  { number: '01', label: 'Training Awareness for Organizations', href: '#' },
  { number: '02', label: 'How it works', href: '#' },
  { number: '03', label: 'What is Security Awareness Training ?', href: '#' },
  { number: '04', label: 'FAQs', href: '#' },
  { number: '05', label: 'Managed Security Awareness', href: '#' }
] 
const twelve = [
  { number: '01', label: 'Why do you need Thread Hunting ?', href: '#' },
  { number: '02', label: 'How it works', href: '#' },
  { number: '03', label: 'Why You Should Work with Ost Infinity', href: '#' },
] 

const thirteen = [
  { number: '01', label: 'Why Choose Our managed SOC ?', href: '#' },
  { number: '02', label: 'How it works', href: '#' },
  { number: '03', label: 'Why You Should Work with Ost Infinity', href: '#' },
] 

const twenty = [
  { number: '01', label: 'ViXa Platform', href: '/' },
  { number: '02', label: 'How It Works', href: '/how-it-works' },
  { number: '03', label: 'Threat Detection and Response & Observability', href: '/threat-detection' },
  { number: '04', label: 'Network Monitoring and Observability', href: '/network-monitoring' },
  { number: '05', label: 'Platform Integrations', href: '/integrations' },
  { number: '06', label: 'Concierge', href: '/concierge' },
  { number: '07', label: 'Managed Security Service', href: '/products/managed-security' },
]

const thirty = [
  { number: '01', label: 'First United Bank & Trust', href: '/' },
  { number: '02', label: 'CENTOGENE Medical', href: '/how-it-works' },
  { number: '03', label: 'Ulster Bank', href: '/threat-detection' },
  { number: '04', label: 'Parramatta Leagues Club', href: '/network-monitoring' },
  { number: '05', label: 'Southampton Football Club', href: '/integrations' },
  { number: '06', label: 'Eden Prairie Schools', href: '/concierge' }
]


const primaryIllustrations = [
  'vixa-platforms.svg',
  'threat-detection.svg',
  'network-monitoring.svg',
  'platform-integration.svg',
  'concierge.svg',
  'managed-security.svg',
  
]

const secondaryIllustrations = [
  'vixa-icon.svg',
  'product-icon.svg',
  'managed-security.svg',
]

const fourthIllustrations = [
  'ost-infinity-deck.png',
  'ost-infinity-deck.png',
  'ost-infinity-deck.png',
]

const seventhIllustrations = [
  'ost-infinity-deck.png',
  'ost-infinity-deck.png',
  'ost-infinity-deck.png',
  'ost-infinity-deck.png',
]

const eigthIllustrations = [
  'devsecops.svg'
]

const ninethIllustrations = [
  'incident-response.png'
]

const tenIllustrations = [
  'business-security.svg',
  'vixa-platforms.svg',
  'vixa-platforms.svg',
  'threat-detection.svg',
  'network-monitoring.svg',
  'platform-integration.svg',
  'concierge.svg',
  'managed-security.svg',
]
const elevenIllustrations = [
  'security.svg',
  'vixa-icon.svg',
  'product-icon.svg',
  'managed-security.svg',
]
const twelveIllustrations = [
  'threat-hunting.svg',
  'vixa-icon.svg',
  'product-icon.svg',
  'managed-security.svg',
]
const thirteenIllustrations = [
  'social.svg',
  'vixa-icon.svg',
  'product-icon.svg',
  'managed-security.svg',
]


const twentyIllustrations = [
  'concierge.svg',
  'vixa-platforms.svg',
  'threat-detection.svg',
  'network-monitoring.svg',
  'platform-integration.svg',
  'managed-security.svg',
]

const illusMap = {
  primary: primaryIllustrations,
  secondary: secondaryIllustrations,
  fourth: fourthIllustrations,
  five: primaryIllustrations,
  six: fourthIllustrations,
  seven: seventhIllustrations,
  eigth: eigthIllustrations,
  nineth: ninethIllustrations,
  ten: tenIllustrations,
  eleven:elevenIllustrations,
  twelve:twelveIllustrations,
  thirteen:thirteenIllustrations,
  twenty:twentyIllustrations,
  thirty:fourthIllustrations
}

export default function HeroContent({
  heading,
  desc,
  //desc=`We transform cybersecurity from a reactive cost centre into a strategic business enabler. By continuously assessing and mitigating risks.`,
  //desc = `Complete visibility into your entire security and<br /> network infrastructure powered by AI`,
  button = 'Learn More',
  activeMenu = 'primary',
  setShowAll
}) {
  const { pathname } = useRouter()
  const [menuRank, setMenuRank] = useState(activeMenu)

  const menuMap = { primary, secondary, third, fourth, five, six, seven, eigth, nineth ,ten,eleven,twelve,thirteen,twenty,thirty}
  const menu = menuMap[menuRank] || []
  const illustrations = illusMap[menuRank] || []
  const isFive = menuRank === 'five'

  const initialIndex = useMemo(() => {
    const idx = menu.findIndex(item => item.href === pathname)
    return idx >= 0 ? idx + 1 : 1
  }, [menu, pathname])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-gradient-to-b from-[#0D0F49] to-transparent pointer-events-none" />
      <div className="container relative z-10 flex flex-col items-start px-6 mx-auto md:px-16 lg:flex-row lg:items-center">
        <div className="w-full pt-20 pb-10 space-y-8 lg:w-1/2">
          <div className="font-bold space-y-2 text-[22px]">
            <h1 className="text-[32px] mb-4" dangerouslySetInnerHTML={{ __html: heading }} />
            <p dangerouslySetInnerHTML={{ __html: desc }} />
          </div>

          <Link
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition"
          >
            <span>{button}</span>
            <ArrowRight className="w-4 h-8 ml-15" />
          </Link>

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
                     setShowAll?.(true); // update showAll on hash-based internal nav
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
        <div className="flex justify-center w-full mt-8 lg:w-1/2 lg:mt-0">
          <HeroIllustration src={illustrations} initial={initialIndex} />
        </div>
      </div>
    </section>
  )
}
