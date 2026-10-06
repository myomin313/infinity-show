'use client'

import React from 'react'
import Head from 'next/head'
import Header from '@/parts/v2/header'
import CreateAccount from '@/parts/auth/createAccount'

export default function Registration() {
  return (
    <>
      <Head>
        <title>Registration | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <CreateAccount />
      </main>
    </>
  )
}
