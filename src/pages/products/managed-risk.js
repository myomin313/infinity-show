import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import AboutVixa from '@/parts/aboutVixa';
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '@/components/CardInfo';
import IntegrationsCard from '@/components/integrationsCard';
import WelcomeCard from '@/components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function RiskManagement() {
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "Managed Risk";
  const paragraphs = [
    <>
      Empowers businesses to discover, assess, and harden your entire infrastructure environment against digital risks by contextualising the attack surface coverage across your cloud and hybrid network environments.
Gain a comprehensive understanding of your organisation’s digital risks for more effective risk assessment and management with Ost Infinity Managed Risk.
 
    </>
  ];

  const cardData = [
    {
      title: "Types of Risks",
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li><strong>Strategic Risks:</strong> Competition, market shifts.</li>
            <li><strong>Operational Risks:</strong> Process failures, supply chain issues.</li>
            <li><strong>Financial Risks:</strong> Market volatility, credit risks.</li>
            <li><strong>Compliance Risks:</strong> Legal and regulatory violations.</li>
            <li><strong>Reputational Risks:</strong> Public perception, brand damage.</li>
            <li><strong>Cybersecurity Risks:</strong> Data breaches, hacking.</li>
          </ul>
        </>
      ],
    },
    {
      title: "Why do you Need Managed Risk",
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li>Protects assets and reduces losses.</li>
            <li>Enhances decision-making and operational efficiency.</li>
            <li>Ensures compliance with laws and regulations.</li>
            <li>Improves stakeholder confidence.</li>
          </ul>
        </>
      ],
    },
    {
      title: "Risk Assessment and Identification",
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li><strong>ISO 31000:</strong> International standard for risk management.</li>
            <li><strong>COSO ERM:</strong> A model for enterprise risk management.</li>
            <li><strong>NIST</strong> Cybersecurity Framework: For managing cyber risks.</li>
          </ul>
        </>
      ],
    }
  ];

  const heading = 'Risk Management methodology'
  const description = 'Managing risks in hybrid, cloud, IoT, and web applications requires a structured approach that addresses unique security challenges across these environments.  Ost Infinity recommend a comprehensive methodology:'

  return (
    <>
      <Head>
        <title>Managed Risk | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Managed Risk`} desc={`We transform cybersecurity from a reactive cost centre into a strategic business enabler. By continuously assessing and mitigating risks.`} activeMenu="five" illustrationSrc="vixa-platforms.svg" illustrationAlt="VIXA Platforms" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Managed Risk"/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigation illustrationSrc={["risk-management"]} illustrationAlt="Managed Risk"/>
        <CardInfo data={cardData}/>
        {!showAll && (
            <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
          )}
          {showAll && (
            <>
              <section id="capabilities">  
                <IntegrationsCard heading={heading} desc={description}/>
                <ProductNavigation illustrationSrc={["risk-assesment-identification"]} illustrationAlt="Risk Management"/>
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


