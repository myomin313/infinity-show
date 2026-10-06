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

export default function OSTInfinityDeck() {
  const [showAll, setShowAll] = useState(false)
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = 'About Us'
  const paragraphs = [
    <>
      <p className='my-4 mb-6'>Ost Infinity is the global leader in Digital Security, serving as a powerhouse in Cybersecurity Threat Detection & Response and Network Performance Monitoring & Observability. We specialise in cutting-edge software development, IT management consultations, and innovative solutions designed to maximise threat risk detection, response efficiency, and network observability effectiveness. AI-Driven incident response, predictive threat intelligence logs, network traffic, endpoints, zero-day attacks, fileless malware, unusual login times, data exfiltration in real time 24/7 SOC & Human in the loop.</p>
      <p className='mb-6'>Since 2022,our contributions to society in Germany, Europe and beyond have helped shape one of the most modern and progressive public sectors in the world.</p>
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

  //hash change
// useEffect(() => {
//     const handleHashChange = () => {
//       console.log("show");
//       const hash = window.location.hash.substring(1);
//       if (hash) {
//         setActiveSection(hash);
//         setShowAll(true);
        
//         setTimeout(() => {
//           const el = document.getElementById(hash);
//           if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }, 100);
//       }
//     };

//     handleHashChange();
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);


  const [hash, setHash] = useState("");

   useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      setHash(currentHash);

      if (currentHash) {
        setShowAll(true); // show section if hash is present

        // Optional: Scroll into view
        const el = document.getElementById(currentHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Run on mount
    handleHashChange();

    // Listen to hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  //hash change end 
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
        <Hero
          heading={`About Us`}
          desc="Ost Infinity is cybersecurity and Network performance monitoring company that continuous monitoring & detection, behavioural analytics & anomaly detection, automated threat correlation & prioritisation. "
          activeMenu="six"
          setShowAll={setShowAll}
        />
        <PromoBar />
        <FloatingContact />
          <div id="about-us" >
        <AboutVixa title={title} paragraphs={paragraphs} center />
        </div>
        {!showAll && (
          <ExploreMore onClick={() => setShowAll(true)} text="Learn More" />
        )}

        {showAll && (
          <section id="capabilities">
            {/* <CardInfo data={cardData} center /> */}
             {/* Mission Section */}
            <div id="mission" >
              <CardInfo data={[cardData[0]]} center />
            </div>

            {/* Vision Section */}
            <div id="vision" >
              <CardInfo data={[cardData[1]]} center />
            </div>

            {/* Values Section */}
            <div id="values" >
              <CardInfo data={[cardData[2]]} center />
            </div>

            <section className="container px-6 py-12 mx-auto md:px-16">
              <Image
                src="/assets/images/core-offerings.png"
                alt="Core Offerings"
                width={1920}
                height={1080}
                className="w-full h-auto my-30" id="core-offerings"
              />
              <Image
                src="/assets/images/key-highlights.png"
                alt="Core Offerings"
                width={1920}
                height={1080}
                className="w-full h-auto my-30"
                id="key-highlights"
              />
            </section>
            <WelcomeCard />
          </section>
        )}
        <ContactForm />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  )
}
