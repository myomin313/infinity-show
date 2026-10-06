import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import AboutVixa from '@/parts/aboutVixa';
import TextSection from '@/parts/textSection';
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import ProductNavigationThree from '@/parts/productNavigationThree'
import CardInfo from '@/components/CardInfo';
import IntegrationsCard from '@/components/integrationsCard';
import WelcomeCard from '@/components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function ThreatHunting() {
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "Why Do You Need Threat Hunting ?";
  const paragraphs = [
    <>
     Our team of skilled analysts, armed with cutting-edge techniques and tools, proactively hunts for threats
     across your digital infrastructure,providing peace of mind that your organization’s security is in capable
     hands,We continuously monitor for emerging threats,adapt strategies to evolving attack techniques,
     and offer personalised threat intelligence reports tailored to your organization’s needs. With seamless integration into your existing cybersecurity framework, our service complements 
     current defences, enhancing overall visibility into your digital environment.
 
    </>
  ];
  const textparagraphs = [
    <>
     Choosing our Threat Hunting Service is not just about acquiring a solution; It’s a strategic decision to
     enter a dedicated paternership  focused on protecting your digital assests.Our proactive defence approach
     goes beyond traditional cybersecurity measures,actively seeking and neutralising potential threats before 
     compromising your organisation’s integrity.
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

  const heading = 'WHY SHOULD WORK WITH OST INFINITY'
  // const description = ["At OSt Infinity,we are proud to offer our Threat Hunting Service,a proactive and advanced cybersecurity solution designed to
  // safeguard your digital assets againt meering trackSynchronousRequestDataAccessInDev.Our team of skilled analysts utilises cutting-edge techniques 
  // and tools to proactively hunt for threats across your digital infrastructure, providing you with peace of mind knowing that your
  // organisation's security is in capable hands.",
  //   <br key="br1" />,
  // <br key="br2" />,
  
  // "Beyond traditional security measures,out Threat Hunting Service continuously monitors for emerging threat, adapts strategies to evolving attack techniques, and offers personalised threat intelligence reports and recommendatios tailored to your organisation's specific needs."
  // <br key="br1" />,
  // <br key="br2" />,
  // "By parterning with us you gain access to a dedicated team of experts committed to understanding your unique risk landscape and providing proactive measures to mitigate potential threats effectively. Our service operates seamlessly within your existing cybersecurity framework, complementing your current defences and enchancing overall visibility into your digital environment."
  // <br key="br1" />
  // <br key="br2" />
  // "With our comprehensive approach to threat detection and response,we enable you to stay one step ahead of cyber adversaries and maintain the integrity of your critical infrastructure, data, and operations."]


  const description = [
  "At OSt Infinity, we are proud to offer our Threat Hunting Service, a proactive and advanced cybersecurity solution designed to safeguard your digital assets against emerging threats. Our team of skilled analysts utilizes cutting-edge techniques and tools to proactively hunt for threats across your digital infrastructure, providing you with peace of mind knowing that your organization's security is in capable hands.",
  <br key="br1" />,
  <br key="br2" />,
  "Beyond traditional security measures, our Threat Hunting Service continuously monitors for emerging threats, adapts strategies to evolving attack techniques, and offers personalized threat intelligence reports and recommendations tailored to your organization's specific needs.",
  <br key="br3" />,
  <br key="br4" />,
  "By partnering with us you gain access to a dedicated team of experts committed to understanding your unique risk landscape and providing proactive measures to mitigate potential threats effectively. Our service operates seamlessly within your existing cybersecurity framework, complementing your current defenses and enhancing overall visibility into your digital environment.",
  <br key="br5" />,
  <br key="br6" />,
  "With our comprehensive approach to threat detection and response, we enable you to stay one step ahead of cyber adversaries and maintain the integrity of your critical infrastructure, data, and operations."
];
  return (
    <>
      <Head>
        <title>Threat Hunting | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Threat Hunting`} desc={`Out Threat Hunting Service is a proactive and advanced cybersecurity solution designed to safeguard your digital assets by actively seeking out
            and neutralising potential security threads before they can compromise your organization's integrity`} activeMenu="twelve" illustrationSrc="thread-hunting.svg" illustrationAlt="VIXA Platforms" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Threat Hunting for Organizations"/>
        <AboutVixa paragraphs={textparagraphs}/>
        <AboutVixa title={title} paragraphs={paragraphs}/>
        <ProductNavigationThree head="Threat Handling Approach" illustrationSrc={["threat-hunting-src"]} illustrationAlt="Managed Risk"/>
         <IntegrationsCard heading={heading} desc={description}/> 
        
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  );
}


