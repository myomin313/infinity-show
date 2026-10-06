import React from 'react'
import Head from 'next/head'
import FloatingContact from '@/components/FloatingContact'
import Header from '../parts/header'
import WelcomeCard from '@/components/WelcomeCard'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>

      <main>
        <Header />
        <FloatingContact />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  )
}
