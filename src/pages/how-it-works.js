import React from 'react';
import Head from 'next/head'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '../parts/briefSection';
import Header from '../parts/header';
import Hero from '@/parts/hero'
import WelcomeCard from '../components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>How it Works | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero />
        <PromoBar/>
        <FloatingContact />
        <BriefSection/>
        
        <WelcomeCard />
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  );
}


