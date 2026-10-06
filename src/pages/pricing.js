import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header';
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import CardInfoV2 from '@/components/CardInfoV2'
import Payment from '@/parts/payment';
import InvestmentSection from '@/parts/investmentSection';
import EvolutionMTDRSection from '@/parts/evolutionMTDRSection';
import WelcomeCard from '../components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'

export default function Pricing() {
  const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {
        if (showAll) {
        const el = document.getElementById('capabilities')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [showAll])

  const CARD_DATA = {
        cards: [
            {
                title: 'PRODUCT',
                subtitle: 'ViXa Identity-First Platform',
                icon: '/assets/images/product-icon.png',
            },
            {
                title: 'SERVICES',
                subtitle: 'Managed Security Services',
                icon: '/assets/images/services-icon.png',
            },
            {
                title: 'PRICE',
                subtitle: 'Revenue Model',
                icon: '/assets/images/price-icon.png',
            }
        ],
    }
  return (
    <>
      <Head>
        <title>Pricing | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Pricing`} desc="Discover Product and Services<br /> that best suit your IT landscape with the best<br /> pricing" activeMenu='secondary' illustrationSrc="vixa-icon.svg" illustrationAlt="Pricing" />
        <PromoBar/>
        <FloatingContact />
        <CardInfoV2 data={CARD_DATA}/>
        <Payment />
        <InvestmentSection />
        {!showAll && (
            <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
            )}
            {showAll && (
            <>
                <section id="capabilities">
                    <EvolutionMTDRSection heading="Evolutions of<br /> Managed Threat Detection & Response<br /> Network Performance Monitoring and Observability<br /> Managed Security Services"/>
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


