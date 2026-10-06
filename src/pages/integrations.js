import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header';
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '../parts/briefSection';
import AboutVixa from '../parts/aboutVixa';
import IntegrationsCard from '../components/integrationsCard';
import ProductNavigation from '@/parts/productNavigation'
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

  const title = "ViXa Integrations Multi Cloud & Hybrid";
  const paragraphs = [
    <>
      Azure, GCP, Kubernetes, Storage, Gateway, Visual Machines, Access points, AWS, Enterprise, Public cloud infrastructure and more
    </>
  ];

  const cardData = [
    {
      title: "Key Benefits of OST Infinity Hybrid Integration Across Industries:",
      items: [
        <>
          <span className="mr-1">✅</span>
          <strong>Unified Visibility:</strong> Single dashboard for on-prem, cloud, and edge security.
        </>,
        <>
          <span className="mr-1">✅</span>
          <strong>AI-Driven Threat Detection:</strong> Reduces false positives with machine learning.
        </>,
        <>
          <span className="mr-1">✅</span>
          <strong>Regulatory Compliance:</strong> Meets HIPAA, PCI-DSS, NIST, ISO 27001.
        </>,
        <>
          <span className="mr-1">✅</span>
          <strong>Scalability:</strong> Cloud-based analytics scale with growing infrastructure.
        </>,
        <>
          <span className="mr-1">✅</span>
          <strong>Proactive Incident Response:</strong> Automated playbooks for SOAR (Security Orchestration, Automation, and Response).
        </>,
      ],
    },
    {
      title: "Conclusion",
      items: [
        <>
          Ost Infinity <strong>hybrid cybersecurity and network monitoring platform</strong> ensures{" "}
          <strong>end-to-end protection</strong> across{" "}
          <strong>healthcare, finance, and manufacturing, Telecom, etc.</strong> adapting to each industrys unique risks. By
          combining <strong>on-prem security controls</strong>, <strong>cloud-based AI analytics</strong>, and{" "}
          <strong>real-time network monitoring</strong>, our customer can achieve{" "}
          <strong>resilient, compliant, and threat-aware operations</strong>.
        </>,
      ],
    },
  ];

  const heading = 'VIXA PLATFORM INTEGRATIONS MULTI CLOUDS & INDUSTRIES'
  const description = 'Ost Infinity robust the integration of ViXa Identity-First in hybrid environment focused on cybersecurity and network monitoring as essential for industries like healthcare, finance, manufacturing, and Telecom, where data security, regulatory compliance, and operational uptime are critical. A hybrid approach combines on-premises, cloud, and edge security solutions with real-time network monitoring to detect, prevent, and respond to threats across complex IT/OT environments.'
  return (
    <>
      <Head>
        <title>Platform Integrations | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Platform Integrations" desc="The Ost Infinity XDR (Extended Detection and Response) cybersecurity platform provides comprehensive threat detection, investigation, and response across multiple security layers. Ost Infinity ViXa Identity-First Platform processes aggregates data from various sources events per day in Real-Time Logs & Telemetry and enriches them with threat intelligence and risk context to drive faster threat detection, simplify incident response, and eliminate alert fatigue." illustrationSrc="platform-integration.svg" illustrationAlt="Platform Integrations" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Platform Integrations"/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <IntegrationsCard heading={heading} desc={description}/>
        <ProductNavigation illustrationSrc={["hybrid-security"]} illustrationAlt="Hybrid Security"/>
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


