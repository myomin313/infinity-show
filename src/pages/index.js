import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '../parts/promoBar'
import FloatingContact from '@/components/FloatingContact'
import BriefSection from '../parts/briefSection'
import AboutVixa from '../parts/aboutVixa'
import Header from '../parts/header'
import Hero from '@/parts/hero'
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '../components/CardInfo'
import CapabilitiesOverview from '@/parts/capabilitiesOverview'
import WelcomeCard from '@/components/WelcomeCard'
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "ViXa Platform"
  const paragraphs = [
    
    <>
   The Ost Infinity ViXa Identity-First Platform processes vast data events daily and enriches them with threat intelligence and risk context to drive faster threat detection, simplify incident response, and eliminate alert fatigue. Transforming cybersecurity industries by automating tasks, enhancing decision-making, and enabling new applications.
    </>
  ]

  const cardData = [
    {
      title: 'Why you need Ost Infinity soc?',
      items: [
        '✅ Proactive Threat Hunting: Identifies threats before they impact the organization.',
        '✅ Reduced False Positives: ML improves accuracy in threat detection.',
        '✅ Automated Response: SOAR integration enables faster mitigation.',
        '✅ Adaptive Defence: Continuously learns from new attack patterns.',
      ],
    },
    {
      title: 'ViXa Platform Workflow',
      items: [
        <>
          <strong>1. ML model detects a new phishing campaign</strong> from dark web chatter.
        </>,
        <>
          <strong>2. CTI platform enriches IoCs</strong> (domains, hashes) and pushes them to SIEM.
        </>,
        <>
          <strong>3. SOC analysts</strong> receive alerts when a user clicks a malicious link.
        </>,
        <>
          <strong>4. SOAR automatically isolates</strong> the infected endpoint and blocks the domain.
        </>,
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Home | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero heading={`ViXa Identity-First Platform`}  desc={`The global leader in Extended detection and response (XDR). The ViXa Platform integrates security tools and unifies cyber security operations across all security layers such as users, endpoints, email, applications, networks, cloud and hybrid workloads and data powered by AL/ML.`}/>
        <PromoBar />
        <FloatingContact />
        <BriefSection title="ViXa Platform" />
        <AboutVixa title={title} paragraphs={paragraphs} />
        <ProductNavigation
          illustrationSrc={["vixa-platform-workflow"]}
          illustrationAlt="VIXA Platform Workflow"
        />
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text='Explore More About ViXa Platform Capability' />
        )}
        {showAll && (
          <>
            <section id="capabilities">
              <CapabilitiesOverview diagramSrc="vixa-platform-capability.png" />
            </section>
            <CardInfo data={cardData} />
          </>
        )}
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  )
}
