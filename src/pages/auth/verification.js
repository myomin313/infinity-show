import React from 'react'
import Head from 'next/head'
import Header from '@/parts/v2/header'
import AuthVerification from '@/parts/auth/authVerification'

export default function Verify() {
  return (
    <>
      <Head>
        <title>Email Verification | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <AuthVerification />
      </main>
    </>
  )
}
