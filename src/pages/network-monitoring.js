import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header';
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '../parts/briefSection';
import EvolutionMTDRSection from '@/parts/evolutionMTDRSection';
import AboutVixa from '../parts/aboutVixa';
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '../components/CardInfo';
import WelcomeCard from '../components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'
// import Footer2 from '@/parts/footer2'

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "Network Monitoring and Observability";
  const paragraphs = [
    <>
      Ost Infinity offers a platform that measures for <strong>network performance monitoring and observability</strong> ensure that telemetry data is accurate, available, and protected from threats while maintaining system integrity. 
    </>
  ];

  const cardData = [
    {
      title: "Key Tools with Security Features",
      items: [
        <>• <strong>ViXa Identity-First</strong> (with TLS/mTLS)</>,
        <>• <strong>ViXa Identity-First</strong> (PBAC, RBAC, SAML/OIDC integration)</>,
        <>• <strong>ViXa Identity-First</strong> (encrypted packet analysis)</>,
        <>• <strong>ViXa Identity-First</strong> (data encryption, SOC integration)</>,
        <>• <strong>ViXa Identity-First</strong> (secure synthetic monitoring)</>,
      ],
    },
    {
      title: "Benefits of Our Dynamic Hybrid Network Performance Monitoring and Observability:",
      items: [
        <>
          Ost Infinity <strong>hybrid network performance monitoring and observability</strong> combines:
        </>,
        <>
          • <strong>On-prem & cloud-based tools</strong> for full-stack visibility.
        </>,
        <>
          • <strong>Zero Trust & encryption</strong> to secure monitoring data.
        </>,
        <>
          • <strong>AI-driven analytics</strong> for proactive threat detection.
        </>,
        <>
          • <strong>Automated response (SOAR, XDR)</strong> to mitigate risks in real-time.
        </>,
        <>
          <p className='my-5'>
            Our robust network observability strategy balances visibility with security. By encrypting data, enforcing access controls,
            monitoring for anomalies, and maintaining compliance, our customers can detect performance issues without exposing
            themselves to cyber risks.
          </p>
        </>,
        <>
          This ensures <strong>resilient, secure, and high-performing networks</strong> across hybrid environments.
        </>,
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Network Monitoring | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Network Monitoring and Observability"  desc="Ost Infinity’s modern Network Performance Monitoring and Observability (NPMO) platform leverages AI and ML to provide intelligent insights, predictive analytics, and automated remediation for complex network environments. The ViXa platform go beyond traditional monitoring to offer deep visibility, contextual analysis, and proactive optimisation. ViXa Identity-First platform deployment Models: Cloud-Native SaaS, Hybrid Deployment, Edge AI, On-Premises AI." illustrationSrc="network-monitoring.svg" illustrationAlt="Network Monitoring" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Network Monitoring & Observability"/>
        <EvolutionMTDRSection heading="Evolutions of Network Monitoring & Observability"/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigation illustrationSrc={['network-monitoring-1','network-monitoring-2']} illustrationAlt="Network Monitoring"/>
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
        <Footer />
      </main>
    </>
  );
}
