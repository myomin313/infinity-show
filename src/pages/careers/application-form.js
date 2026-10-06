import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../../parts/hr/hero'
import Form from '../../parts/hr/form'
import WhyOstInfinity from '../../parts/hr/whyOstInfinity'
import Header from '../../parts/header'
import Footer from '@/parts/footer'

export default function ApplicationForm() {
  return (
    <>
      <Head>
        <title>Application Form | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Form />
        <WhyOstInfinity />
        <Footer />
      </main>
    </>
  )
}
