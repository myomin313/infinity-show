import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header'
import PrivacyPolice from '../parts/privacy'
import Footer from '@/parts/footer'

export default function PrivacyCookiePolicy() {
  return (
    <>
      <Head>
        <title>Privacy and Cookie Policy | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <PrivacyPolice />
        <Footer />
      </main>
    </>
  )
}
