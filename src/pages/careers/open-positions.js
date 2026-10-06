import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '@/parts/hr/hero'
import JobListSection from '@/parts/careers/JobListSection'
import WhyOstInfinity from '@/parts/hr/whyOstInfinity'
import Header from '@/parts/header'
import Footer from '@/parts/footer'

export default function OpenPositions() {
  return (
    <>
      <Head>
        <title>Open Positions | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <JobListSection />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
