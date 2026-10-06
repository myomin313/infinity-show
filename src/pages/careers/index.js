import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../../parts/hr/hero'
import Jobs from '../../parts/hr/jobs'
import WhyOstInfinity from '../../parts/hr/whyOstInfinity'
import Header from '../../parts/header'
import Footer from '@/parts/footer'

export default function OSTInfinityDeck() {
  return (
    <>
      <Head>
        <title>Careers | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Jobs />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
