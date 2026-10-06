import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header'
import Hero from '@/parts/hero'
import PromoBar from '../parts/v2/promoBar'
import SupportStructure from '../parts/SupportStructure'
import FloatingContact from '@/components/FloatingContact'
import WelcomeCard from '@/components/WelcomeCard'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'

export default function OSTInfinityDeck() {
  return (
    <>
      <Head>
        <title>Support | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero heading={`Concierge Support`} desc='Our specialised Concierge provides personalised and<br /> high-touch security support to our customers and<br /> critical business units.' button='Talk to Us' activeMenu="seven" />
        <section id="communication">
            <PromoBar />
        </section>
        <FloatingContact />
        <section id="structure">
            <SupportStructure />
        </section>
        <WelcomeCard />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  )
}
