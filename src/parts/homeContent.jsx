import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react'
import HeroIllustration from '@/components/HeroIllustration'
import HomeIllustration from '@/components/HomeIllustration'

const primary = [
  { number: '01', label: 'ViXa Platform', href: '/' },
  { number: '02', label: 'Extended Detection and Response', href: '/products/extended-detection-and-response' },
  { number: '03', label: 'Managed Threat Detection and Response', href: '/threat-detection' },
  { number: '04', label: 'Network Performance Monitoring and Observability', href: '/network-monitoring' },
  { number: '05', label: 'Platform Integrations', href: '/integrations' },
  // { number: '06', label: 'Concierge', href: '/concierge' },
  { number: '06', label: 'Managed Security Service', href: '/products/managed-security' },
  // { number: '08', label: 'Cyber Security Operation Centre', href: '/products/cybersecurity-operation-centre' },
  // { number: '09', label: 'Incident Response', href: '/products/incident-response' },
  // { number: '10', label: 'Managed Risk', href: '/products/managed-risk' },
  // { number: '11', label: 'Vulnerability Assessment', href: '/products/vulnerability-assessment' },
  // { number: '12', label: 'Penetration Testing', href: '/products/penetration-testing' },
  // { number: '13', label: 'Security Journey', href: '/products/security-journey' },
  // { number: '14', label: 'Threat Hunting', href: '/products/threat-hunting' },
  // { number: '15', label: 'Training Awareness', href: '/products/training-awareness' },
  // { number: '16', label: 'DevSecOps', href: '/products/devsecops' },
]

const threatdetection = [
  { number: '01', label: 'Threat Detection and Response', href: '/threat-detection' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Managed Threat Detection & Response Overview', href: '#overview' },
]

const networkmonitor = [
  { number: '01', label: 'Network Performance Monitoring and Observability ', href: '/network-monitoring' },
  { number: '02', label: 'How It Works', href: '#how-it-Work' },
  { number: '03', label: 'Network Monitoring & Observability Overview', href: '#overview' },
]

const cybersecurityoperation = [
  { number: '01', label: 'Cyber Security Operation Centre', href: '/products/cybersecurity-operation-centre' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Cyber Security Operation Centre Overview', href: '#overview' },
]

const incidentResponse = [
  { number: '01', label: 'Incident Response', href: '/products/incident-response' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '02', label: 'Why Do you need Incident Response?', href: '#why-do-you-need' },
  { number: '03', label: 'Incident Response Overview', href: '#overview' },
]

const managedRisk = [
  { number: '01', label: 'Managed Risk', href: '/products/managed-risk' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Managed Risk Overview', href: '#overview' },
]

const vulnerabilityAssessment = [
  { number: '01', label: 'Vulnerability Assessment', href: '/products/vulnerability-assessment' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Vulnerability Assessment Overview', href: '#overview' },
]

const penetrationTesting = [
  { number: '01', label: 'Penetration Testing', href: '/products/penetration-testing' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Penetration Testing Overview', href: '#overview' },
  { number: '04', label: 'Synergies combining Pen Testing and XDR', href: '#testing-xdr' },
]

const securityJourney = [
  { number: '01', label: 'Security Journey', href: '/products/security-journey' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Security Journey Overview', href: '#overview' },
]

const threatHunting= [
  { number: '01', label: 'Threat Hunting', href: '/products/threat-hunting' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Threat Hunting Overview', href: '#overview' },
]

const trainingAwareness= [
  { number: '01', label: 'Training Awareness', href: '/products/training-awareness' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Cyber Security Awareness Overview', href: '#overview' },
]
const platformIntegration= [
  { number: '01', label: 'Platform  Integrations', href: '/integrations' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Platform  Integrations Overview', href: '#overview' },
]
const devsecops= [
  { number: '01', label: 'DevSecOps', href: '/products/devsecops' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'DevSecOps Overview', href: '#overview' },
]
const managedSecurity= [
  { number: '01', label: 'Managed Security Service', href: '/products/managed-security' },
  { number: '02', label: 'How It Works', href: '#how-it-work' },
  { number: '03', label: 'Managed Security Service Overview', href: '#overview' },
]

const support= [
  { number: '01', label: 'Concierge Support', href: '/support' },
  { number: '02', label: 'Community Forums', href: '#communication' },
  { number: '02', label: 'Support Tires', href: '#communication' },
  { number: '02', label: 'Resources', href: '#communication' },
]
const posture= [
  { number: '01', label: 'Cyber Security Posture Management', href: '/products/cyber-security-posture-management' },
  { number: '02', label: 'How It works', href: '#how-it-work' },
  { number: '03', label: 'Cyber Security Posture Overview', href: '#overview' },
  { number: '04', label: 'Improve Cybersecurity Posture', href: '#improve-posture' },
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
const fourty = [
  { number: '01', label: 'ViXa Platform', href: '/' },
  { number: '02', label: 'How It Works', href: '/how-it-works' },
  { number: '03', label: 'Threat Detection and Response & Observability', href: '/threat-detection' },
  { number: '04', label: 'Network Monitoring and Observability', href: '/network-monitoring' },
  { number: '05', label: 'Platform Integrations', href: '/integrations' },
  { number: '06', label: 'Concierge', href: '/concierge' },
  { number: '07', label: 'Managed Security Service', href: '/products/managed-security' },
]

const primaryIllustrations = [
  'home/vixa-platforms.svg',
  'login/xdr-img.svg',
  'threat-detection/threat-detection.svg',
  'network-monitoring/network-monitoring.svg',
  'integrations/platform-integration.svg',
  'managed-security/managed-security.svg',
]

const secondaryIllustrations = [
  'pricing/vixa-icon.svg',
  // 'pricing/product-icon.svg',
  // 'pricing/managed-security.svg',
]

const fourthIllustrations = [
  'about-us/ost-infinity-deck.png',
  'about-us/ost-infinity-deck.png',
  'about-us/ost-infinity-deck.png',
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
const fourtyIllustrations= [
  'social.svg',
  'vixa-icon.svg',
  'managed-security.svg',
  'product-icon.svg',
]
const twentyIllustrations = [
  'concierge.svg',
  'vixa-platforms.svg',
  'threat-detection.svg',
  'network-monitoring.svg',
  'platform-integration.svg',
  'managed-security.svg',
]

const threatdetectionIllustrations = [
  'threat-detection/threat-detection.svg',
]
const networkmonitorIllustrations = [
 'network-monitoring/network-monitoring.svg',
  //'network.svg'
]
const cybersecurityoperationIllustrations = [
  'cybersecurity-operation-centre/social.svg',
]

const incidentResponseIllustrations = [
  'incident-response/incident-response.png'
]

const managedRiskIllustrations = [
 // 'vixa-platforms.svg'
    'managed-risk/risk-management.svg'
]

const vulnerabilityAssessmentIllustrations = [
  'vulnerability-assessment/vixa-platforms.svg'
]

const penetrationTestingIllustrations = [
  'penetration-testing/penetration-testing.svg'
]
const securityjourneyIllustrations = [
  'security-journey/security-journey.svg'
]
const threatHuntingIllustrations = [
  'threat-hunting/threat-hunting.svg'
]
const trainingAwarenessIllustrations = [
  'training-awareness/training-awareness.svg'
]
const platformintegrationIllustrations = [
  'integrations/platform-integration.svg'
]
const devsecopsIllustrations = [
    'devsecops/devsecops.svg'
]
const managedSecurityIllustrations=[
    'managed-security/managed-security.svg'
]
const supportIllustrations=[
    'support/concierge.svg',
]
const postureIllustrations=[
    'cyber-security-posture-management/posture.svg'
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
  thirty:fourthIllustrations,
  fourty:fourtyIllustrations,
  threatdetection:threatdetectionIllustrations,
  networkmonitor:networkmonitorIllustrations,
  cybersecurityoperation:cybersecurityoperationIllustrations,
  incidentResponse:incidentResponseIllustrations,
  managedRisk:managedRiskIllustrations,
  vulnerabilityAssessment:vulnerabilityAssessmentIllustrations,
  penetrationTesting:penetrationTestingIllustrations,
  securityJourney:securityjourneyIllustrations,
  threatHunting:threatHuntingIllustrations,
  trainingAwareness:trainingAwarenessIllustrations,
  platformIntegration:platformintegrationIllustrations,
  devsecops:devsecopsIllustrations,
  managedSecurity:managedSecurityIllustrations,
  posture:postureIllustrations,
  support:supportIllustrations
}


export default function HomeContent({
  button = 'Learn More',
  activeMenu = 'primary',
  setShowAll
}) {
  const { pathname } = useRouter()
  const [menuRank, setMenuRank] = useState(activeMenu)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Define your content for each menu item
  const contentMap = {
    primary: [
      {
        heading: "ViXa Identity-First Platform",
      //  desc: "The Ost Infinity is global leader in Extended Detection and Response (XDR). The ViXa Platform integrates security tools and unifies cyber security operations across all security layers such as users, endpoints, email, applications, networks, cloud and hybrid workloads and data powered by AI/ML."
        desc:"The next-gen security solution that enhances threat detection, investigation, and response by consolidating security data and applying AI-driven analytics."
      },{
        heading: "Extended Detection And Response",
       // desc: "Advanced cybersecurity solution unifies multiple security technologies into a cybersecurity platform to improve threat detection, investigation, and response across cloud-native environments."
          desc:"The evolution of cybersecurity by breaking down silos and providing a more proactive, intelligent approach to threat management."
      },
      {
        heading: "Managed Threat Detection and Response",
        // desc: "ViXa platform MTDR monitors, detects, investigates, and responds to threats on behalf of an organization. We combine human expertise with automated tools including XDR and SIEM; 24/7 Security Monitoring, Threat Intelligence Integration, Incident Response, and Compliance Reporting."
         desc:"We provide outsourced, advanced cybersecurity that combines AI-driven detection and human expertise to stop breaches before they cause damage."
      },
      {
        heading: "Network Performance Monitoring",
        //desc: "ViXa Platform's Network Performance Observability platforms provide real-time visibility into network health, performance, and security across on-premises, cloud, and Entire IT environments."
         // desc:"Real-time metrics, deep packet inspection, log analytics, and AI-driven insights to ensure network reliability, performance optimization, and rapid incident resolution."
          desc:`We combine real-time metrics, deep packet inspection, log analytics,  and AI-driven insights to ensure network reliability, performance optimisation, and rapid incident resolution.`
         // desc:"Real-time metrics, deep packet inspection, log analytics, and AI-driven insights to ensure network reliability, performance optimisation, and rapid incident resolution across complex, distributed environments."
      },
       {
        heading: "Platform Integrations",
        //desc: "The ViXa Identity-First Platform is a next-generation cloud native cybersecurity solution that prioritizes identity as the primary security perimeter. It integrates with XDR to unify security tools that consolidates threat detection and response across endpoints, networks, cloud, and identities."
          desc:"The ViXa Platform integrates capabilities to enhance threat detection, investigation, and response across multiple security layers."  
      },
      {
        heading: "Managed Security Service",
        desc :"End-to-end cybersecurity operations, enabling organizations to defend against evolving threats while maintaining compliance and operational efficiency."
       // desc: "Ost Infinity combined with Extended Detection and Response delivers a proactive, AI-driven cybersecurity solution that enhances threat detection, investigation, and response across an organization's entire IT environment."
      }
      // Add more content for other menu items as needed
    ],
    threatdetection: [
      // Add content for threat detection menu
    ],
    // Add content for other menus
  }
//   const xdr = 'extended-detection-and-response/xdr.svg';
  const menuMap = { 
    primary,
    // threatdetection, 
    // networkmonitor, 
    // ... other menus
  }
  
  const menu = menuMap[menuRank] || []
  const illustrations = illusMap[menuRank] || []
  const currentContent = contentMap[menuRank]?.[currentSlide] || { heading: '', desc: '' }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % menu.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [menu.length])

 const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-gradient-to-b from-[#0D0F49] to-transparent pointer-events-none" />
      <div className="container relative z-10 flex flex-col items-start px-6 mx-auto md:px-16 lg:flex-row lg:items-center">
        <div className="w-full pt-20  space-y-8 lg:w-1/2">
          {/* Animated heading and description */}

          <div className="font-bold space-y-2 text-[22px] min-h-[400px] mb-30">
  <div className="relative h-full">
    {menu.map((item, i) => (
      <div 
        key={`content-${i}`}
        className={`transition-opacity duration-1000 absolute top-0 left-0 w-full h-full ${
          i === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >

          <div className="flex flex-col min-h-[350px]">
  {/* <div className="flex-grow mb-6">  */}
    <h1 className="text-5xl max-w-[90%] mb-8">
      {contentMap[menuRank]?.[i]?.heading || item.label}
    </h1>
    <div className="min-h-[120px] mb-8"> 
      <p className="max-w-[88%]">
        {contentMap[menuRank]?.[i]?.desc || ''}
      </p>
    </div>
  {/* </div> */}
  <Link
    href="#learn-more"
    className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90 transition self-start"
  >
    <span>{button}</span>
    <ArrowRight className="w-4 h-8 ml-15" />
  </Link>
</div>
          
      </div>
    ))}
  </div>
</div>

         

          {/* Menu items */}
          <nav className="space-y-4 text-[22px] mb-8">
            {menu.map((item, i) => {
              const isActive = i === currentSlide
              const isFive = menuRank === 'five'
              const linkShiftClass = isFive ? 'hover:ml-[20px] transition-all duration-200' : ''
              const hoverGradientClass = !isFive
                ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F98D11] group-hover:to-[#199AE2] group-hover:bg-clip-text'
                : ''
              const isML = isFive ? 'ml-15' : ''

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      setShowAll?.(true)
                    }
                    setCurrentSlide(i) // Update slide when manually selecting an item
                  }}
                  className={`flex items-center space-x-4 group ${linkShiftClass}`}
                >
                  <span className={`font-mono transition-colors duration-200 ${
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
          <HomeIllustration 
            src={illustrations} 
            current={currentSlide % illustrations.length}
            onSlideChange={handleSlideChange}
            autoSlide={false}
          />
        </div>
      </div>
    </section>
  )
}