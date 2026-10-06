import React from 'react'
import Head from 'next/head'
import Hero from '@/parts/hr/hero'
import SuccessfullyNotice from '@/parts/careers/SuccessfullyNotice'
import WhyOstInfinity from '@/parts/hr/whyOstInfinity'
import Header from '@/parts/header'
import Footer from '@/parts/footer'

export default function Successfully() {
  return (
    <>
      <Head>
        <title>Successfully | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <SuccessfullyNotice />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
