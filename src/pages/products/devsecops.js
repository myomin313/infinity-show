import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar'
import FloatingContact from '@/components/FloatingContact'
import BriefSection from '@/parts/briefSection'
import AboutVixa from '@/parts/aboutVixa'
import Header from '@/parts/header'
import Hero from '@/parts/hero'
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '@/components/CardInfo'
import Workflow from '@/parts/workflow'
import IntegrationsCard from '@/components/integrationsCard';
import WelcomeCard from '@/components/WelcomeCard'
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function DevSecOps() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "What is DevSecOps?"
  const paragraphs = [
    <>
      DevSecOps (Development, Security, and Operations) is an approach that integrates security practices into the DevOps pipeline. Instead of treating security as a separate phase, DevSecOps ensures that security is embedded throughout the software development lifecycle (SDLC), from planning to deployment and operations.
    </>
  ]

  const cardData = [
    {
      title: '',
      items: [
        '✅ Stronger security with proactive risk management.',
        '✅ Faster releases without sacrificing safety.',
        '✅ Lower costs by preventing late-stage security fixes.',
        '✅ Better compliance with automated audits and reporting.',
        '✅ A collaborative culture where security is everyone’s responsibility.',
      ],
    }
  ]

  const heading = 'Your investment and Results'
  const description = 'At Ost Infinity, we ensure that security is embedded throughout the software development lifecycle (SDLC), from planning to deployment and operations.'

  return (
    <>
      <Head>
        <title>DevSecOps | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero heading={`DevSecOps`} desc='For modern enterprises adopting cloud-native and<br /> agile methodologies, DevSecOps is no longer<br /> optional, it’s a strategic necessity to stay secure,<br /> compliant, and competitive' button='Talk to Us' activeMenu='eigth' />
        <PromoBar />
        <FloatingContact />
        <BriefSection title="DevSecOps" />
        <AboutVixa title={title} paragraphs={paragraphs} />
        <ProductNavigation
          illustrationSrc={["devsecops-workflow"]}
          illustrationAlt="VIXA DevSecOps Workflow"
        />
        <IntegrationsCard heading={heading} desc={description}/>
        <CardInfo data={cardData} />
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text='Explore More About ViXa Platform Capability' />
        )}
        {showAll && (
          <>
            <section id="capabilities">
              <Workflow
                illustrationSrc={["devsecops-principles"]}
                illustrationAlt="VIXA DevSecOps Principles"
              />
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
  )
}
