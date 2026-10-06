import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar';
import BriefSection from '@/parts/briefSection';
import FloatingContact from '@/components/FloatingContact';
import AboutVixa from '@/parts/aboutVixa';
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '@/components/CardInfo';
import CapabilitiesOverview from '@/parts/capabilitiesOverview'
import WelcomeCard from '@/components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function IncidentResponse() {
  const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {
        if (showAll) {
        const el = document.getElementById('capabilities')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [showAll])

  const title = "Why do you need Incident Response?";
  const paragraphs = [
    <>
      Incident Handling &amp; Response (IH&amp;R) is a structured approach to managing and responding to security incidents within an organisation&rsquo;s information technology (IT) infrastructure.
    </>,
    <>
      It involves the processes, procedures, and tools used to detect, analyse, contain, mitigate, and recover from security breaches or incidents to minimise their impact on the organisation&rsquo;s operations and data.
    </>
  ];

  return (
    <>
      <Head>
        <title>Incident Response | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Incident Response`} desc='At Ost Infinity, our IR involves preparation,<br /> detection, containment, eradication, recovery, and<br /> post-incident analysis to minimize damage and<br /> restore normal operations quickly.' activeMenu='nineth' />
        <PromoBar/>
        <BriefSection title="Incident Response for Organizations"/>
        <FloatingContact />
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigation illustrationSrc={["incident-handling"]} illustrationAlt="Incident Handling Workflow"/>
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  );
}


