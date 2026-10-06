import React from 'react';
import Head from 'next/head'
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import CaseStudiesGrid from '@/parts/caseStudiesGrid';
import WelcomeCard from '../components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading="Case Studies" activeMenu="thirty" desc="Table Of Content" illustrationSrc="fc-southampton" illustrationAlt="FC Ssouthampton" />
        <PromoBar/>
        <FloatingContact />
        <CaseStudiesGrid />
        <WelcomeCard />
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  );
}


