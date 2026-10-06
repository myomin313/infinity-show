import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../parts/header'
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar'
import FloatingContact from '@/components/FloatingContact'
import AboutVixa from '../parts/aboutVixa'
import CardInfo from '../components/CardInfo'
import WelcomeCard from '../components/WelcomeCard'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'
import ContactUs from '@/parts/contact-us'

export default function OSTInfinityDeck() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = 'About Us'
  const paragraphs = [
    <>
      <p className='my-4'>Ost Infinity is the global leader in Digital Security, serving as a powerhouse in Cybersecurity Threat Detection & Response and Network Performance Monitoring & Observability. We specialise in cutting-edge software development, IT management consultations, and innovative solutions designed to maximise threat risk detection, response efficiency, and network observability effectiveness.</p>
      <p>Our expertise empowers businesses to strengthen their security posture, optimise network performance, and mitigate cyber risks with unparalleled precision. Partner with Ost Infinity to transform your digital resilience and operational excellence.</p>
    </>
  ]

  const cardData = [
    {
      heading: 'Mission',
      items: [
        <>Our mission is to ensure companies have the modern digital cybersecurity solutions for critical infrastructure and data confidentiality, integrity, reliability and accessibility of all their critical systems and data at all times.</>,
        <><p className='my-4'>Ost Infinity aspires to be the preferred SEA countries and the European provider of business-critical software solutions within the governments, public services, financial industries, society and private sectors.</p></>
      ]
    },
    {
      heading: 'Vision',
      items: [
        <>At Ost Infinity, we envision a future where secure, innovative digital solutions are the foundation of efficient, progressive, and inclusive societies. As technology continues to shape the world, we strive to be at the forefront—empowering organisations, public sectors, and communities across Europe and beyond through adaptive IT and cybersecurity solutions that drive growth, welfare, and resilience in the digital age.</>
      ]
    },
    {
      heading: 'Values',
      items: [
        <>Our core values shape our vision, culture and reflect in what we do.</>,
        <><ul className="mt-10 list-disc list-inside">
            <li>Trust & Partnership</li>
            <li>Honesty & Integrity</li>
            <li>Commitment</li>
            <li>Professionalism</li>
            <li>Innovation</li>
            <li>Defaulting to Transparency</li>
            <li>Collaborating & Aligning</li>
            <li>Taking Full Ownership</li>
            <li>Driving to Mastery</li>
          </ul></>
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>About Us | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        {/* <Hero
          heading={`Ost Infinity<br/>Services`}
          desc="Complete visibility into your entire security and<br /> network infrastructure powered by AI"
          activeMenu="six"
        /> */}
        {/* <PromoBar /> */}
        {/* <FloatingContact /> */}
        {/* <AboutVixa id="mission" title={title} paragraphs={paragraphs} center />
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text="Learn More" />
        )} */}
{/* 
        {showAll && (
          <section id="capabilities">
            <CardInfo data={cardData} center />
            <section className="container px-6 py-12 mx-auto md:px-16">
              <Image
                src="/assets/images/core-offerings.png"
                alt="Core Offerings"
                width={1920}
                height={1080}
                className="w-full h-auto my-30"
              />
              <Image
                src="/assets/images/key-highlights.png"
                alt="Core Offerings"
                width={1920}
                height={1080}
                className="w-full h-auto my-30"
              />
            </section>
            <WelcomeCard />
          </section>
        )} */}
        {/* <ContactForm /> */}
        <ContactUs />
        {/* <Cybersecurity /> */}
        <Footer />
      </main>
    </>
  )
}
