'use client'

import React from 'react'
import Head from 'next/head'
import Header from '@/parts/v2/header'
import LoginSection from '@/parts/auth/loginSection'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Login | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <LoginSection />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  )
}
