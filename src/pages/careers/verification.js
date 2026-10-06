import React from 'react'
import Head from 'next/head'
import Hero from '@/parts/hr/hero'
import EmailVerificationNotice from '@/parts/careers/EmailVerificationNotice'
import WhyOstInfinity from '@/parts/hr/whyOstInfinity'
import Header from '@/parts/header'
import Footer from '@/parts/footer'

export default function PositionDetail() {
  return (
    <>
      <Head>
        <title>Verification | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <EmailVerificationNotice />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
