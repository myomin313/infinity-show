import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header';
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import Temp from '@/components/temp';
import BriefSection from '../parts/briefSection';
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '../components/CardInfo';
import Table from '../components/Table';
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

  const cardData = [
    {
      title: 'Who Benefits from a Cybersecurity Concierge?',
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li>C-level Executives (CEO, CFO, CISO)</li>
            <li>Board Members & High-Profile Employees</li>
            <li>R&D, Legal, & Finance Teams (handling sensitive data)</li>
            <li>Celebrities or Public Figures (in certain industries)</li>
          </ul>
        </>
      ]
    },
    {
      title: 'Why Your Organizations Need Ost Infinity Team ',
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li>Reduces risk of high-impact breaches (executives are prime targets for spear phishing & BEC).</li>
            <li>Improves security culture by engaging leadership directly.</li>
            <li>Enhances response times for critical incidents.</li>
            <li>Aligns cybersecurity with business priorities by offering a service-oriented approach.</li>
          </ul>
        </>
      ]
    },
    {
      title: 'Ost Infinity Concierge Scenarios Study Case',
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li>A CEO receives a suspicious email → The concierge team immediately investigates and blocks threats.</li>
            <li>A CFO travels to a high-risk country → The team provides a secured burner phone and VPN.</li>
            <li>A board member’s credentials appear in a leak → The concierge team forces a password reset and enables MFA.</li>
          </ul>
        </>
      ]
    }
  ]

  const tableData = {
    title: 'Difference Between a Concierge Team & Standard SOC',
    headers: ['Feature', 'Ost Infinity Concierge', 'Standard SOC'],
    rows: [
      {
        feature: 'Focus',
        concierge: 'VIPs & high-risk individuals',
        standard: 'Entire organization',
      },
      {
        feature: 'Approach',
        concierge: 'Proactive, personalized',
        standard: 'Reactive, broad',
      },
      {
        feature: 'Response Time',
        concierge: 'Immediate priority',
        standard: 'Standard SLAs',
      },
      {
        feature: 'Services',
        concierge: 'Training, travel security, dark web monitoring',
        standard: 'Log analysis, alert triage',
      },
    ],
    footer:
      'Ost Infinity has built an elite ' +
      '<strong>Cybersecurity Concierge Team</strong>, with customer-centric security unit that ensures high-value personnel receive top-tier protection. By combining rapid response, education, and tailored safeguards, we minimize risks for those most likely to be targeted by sophisticated threats.',
  };

  return (
    <>
      <Head>
        <title>Concierge | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Concierge" desc="Tailored security expertise and guided risk mitigation. Provides you with triaged alerts to reduce fatigue, continuous tailored guidance to enhance your organization’s security program, and security expertise on-demand to respond to threats in your environment.
 " illustrationSrc="concierge.svg" illustrationAlt="Concierge"  activeMenu="twenty"/>
        <PromoBar/>
        <FloatingContact />
        <Temp />
        <ProductNavigation illustrationSrc={["concierge-diagram"]} illustrationAlt="Concierge Diagram"/>
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
        )}
        {showAll && (
          <>
            <section id="capabilities">
              <CardInfo data={cardData}/>
              <Table data={tableData} />
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


