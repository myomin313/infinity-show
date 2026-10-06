import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '@/parts/hr/hero'
import JobDetailSection from '@/parts/careers/JobDetailSection'
import WhyOstInfinity from '@/parts/hr/whyOstInfinity'
import Header from '@/parts/header'
import Footer from '@/parts/footer'

export default function PositionDetail() {
  return (
    <>
      <Head>
        <title>Position Detail | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <JobDetailSection />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
