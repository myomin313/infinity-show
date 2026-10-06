import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import EvolutionMTDRSection from '@/parts/evolutionMTDRSection';
import AboutVixa from '../parts/aboutVixa';
import ProductNavigation from '@/parts/productNavigation'
import Comparation from '../parts/comparation';
import CardInfo from '../components/CardInfo';
import WelcomeCard from '../components/WelcomeCard';
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

  const title = "Managed Threat Detection and Response (MDR)";
  const paragraphs = [
    <>
      <strong>Ost Infinity Managed Threat Detection and Response (MTDR)</strong> is an advanced cybersecurity service that combines continuous network monitoring with proactive threat detection, analysis, and response to protect organizations from cyber threats. We leverage a mix of human expertise for automating with - ViXa AI, Machine learning, and behavioural analytics) to identify and mitigate risks in real time.
    </>
  ];

  const cardData = [
    {
      title: 'why do you need ost infinity mtdr?',
      items: [
        <>
          Our MTDR is essential for modern cybersecurity, providing real-time protection, threat intelligence, and rapid response to minimize risks in an evolving threat landscape. It bridges the gap between basic monitoring and full-scale Security Operations Centres (SOCs). 
        </>
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Threat Detection | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Managed Threat Detection and Response (MDR)" desc="Our MTDR is an advanced cybersecurity platform that combines AI and ML with human expertise providing 24×7 proactively monitoring, detect, analyse, and respond to cyber threats in real time."/>
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Managed Threat Detection & Response"/>
        <EvolutionMTDRSection heading="Evolutions of MTDR &amp; Network Monitoring"/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigation illustrationSrc={["mtdr-process-diagram"]} illustrationAlt="MTDR Process Diagram"/>
        {!showAll && (
            <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
          )}
          {showAll && (
            <>
              <section id="capabilities">
                <Comparation />
                <CardInfo data={cardData}/>
              </section>
            </>
          )}
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  );
}


