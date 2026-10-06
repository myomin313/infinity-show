import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import EvolutionMTDRSection from '@/parts/evolutionMTDRSection';
import AboutVixa from '@/parts/aboutVixa';
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '@/components/CardInfo';
import WelcomeCard from '@/components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'
import Footer2 from '@/parts/footer2'

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "What is Ost Infinity Managed Security Services? ";
  const paragraphs = [
    <>
      <p className='my-5'>Ost Infinity Managed Security Services combine with concierge, SOC/NOC specialists working together with our customers in-house security teams, we create a flexible, scalable, and cost-effective cybersecurity model that operate on 24/7.</p>
      <p>This approach allows our customers to have high maintaining control over critical security functions while team focus intensive tasks.</p>
    </>
  ];

  const cardData = [
    {
      title: 'Benefits of Hybrid MSS & Challenges & Mitigations',
      items: [
        <>
          ✅ <strong>Cost Efficiency:</strong> Reduce need for full in-house SOC.
        </>,
        <>
          ✅ <strong>Scalability:</strong> Easily adapt to growing threats.
        </>,
        <>
          ✅ <strong>Access to Expertise:</strong> Leverage MSSP’s advanced threat intelligence.
        </>,
        <>
          ✅ <strong>Faster Incident Response:</strong> 24/7 monitoring reduces dwell time.
        </>,
        <>
          ✅ <strong>Regulatory Compliance:</strong> MSSPs help meet industry standards.
        </>,
        <div className="mt-4 font-semibold" key="">Challenges & Mitigations</div>,
        <>
          • <strong>Integration Complexity</strong> – Use APIs and standardized protocols (e.g., Syslog, API-based SIEM integrations).
        </>,
        <>
          • <strong>Vendor Lock-in Risks</strong> – Choose MSSPs with open architecture.
        </>,
        <>
          • <strong>Internal vs. External Responsibility Gaps</strong> – Clear SLAs and communication protocols.
        </>,
      ],
    },
  ];


  return (
    <>
      <Head>
        <title>Manage Security Service | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Managed Security Service" desc="Ost Infinity’s XDR-powered MSS combines AI-driven automation with expert human oversight to provide end-to-end protection against modern cyber threats.  Our MSS combined with Extended Detection and Response (XDR) delivers a proactive, AI-driven cybersecurity solution that enhances threat detection, investigation, and response across an organization's entire IT environment. We transform raw security data into actionable intelligence, ensuring organizations stay resilient against evolving attacks." illustrationSrc="managed-security.svg" illustrationAlt="Manage Security" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Managed Security Services"/>
        <EvolutionMTDRSection heading="Evolutions of Managed Security Services (MSS/MSP) by numbers"/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigation illustrationSrc={["manage-security-secvice"]} illustrationAlt="Manage Security Secvice"/>
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
        )}
        {showAll && (
          <>
            <section id="capabilities">  
              <CardInfo data={cardData}/>
            </section>
          </>
        )}
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer2 />
      </main>
    </>
  );
}


