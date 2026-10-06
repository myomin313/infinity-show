import React from 'react';
import Head from 'next/head'
import Header from '../parts/header';
import Hero from '@/parts/hero'
import PromoBar from '../parts/promoBar';
import FloatingContact from '@/components/FloatingContact'
import AboutVixa from '../parts/aboutVixa';
import ProblemSection from '@/parts/problemSection';

import CardInfoV2 from '@/components/CardInfoV2'

import InvestmentSection from '@/parts/investmentSection';
import WelcomeCard from '../components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'

export default function OSTInfinityDeck() {
  const title = "ViXa Identity-First Platform";
  const paragraphs = [
    <>
      <p className='my-4'>ViXa Identity-First built as a Cyber Threat Intelligence (CTI) Platform powered by AI and Machine Learning (ML) is an advanced security solution that automates the collection, analysis, and dissemination of threat data to enhance our customers’ cybersecurity posture.</p>
      <p>By leveraging AI/ML, the platform can process vast amounts of threat intelligence at scale, detect anomalies, predict threats, and provide actionable insights in real time.</p>
    </>
  ];

  const PROBLEM_CARDS = [
    {
        title: 'Problem Statement',
        description:'Cyber threats are becoming increasingly sophisticated, with attackers using advanced techniques like malware, phishing, and ransomware to exploit vulnerabilities.',
        cards: [
            {
                number: '01',
                title: 'Rise of Advanced Threats',
                text:
                'The emergence of AI-powered attacks and sophisticated malware poses significant challenges to traditional security measures.',
            },
            {
                number: '02',
                title: 'Data Breaches and Privacy Concerns',
                text:
                'Data breaches are becoming more frequent and impactful, exposing sensitive information and jeopardizing privacy.',
            },
            {
                number: '03',
                title: 'Evolving Attack Vectors',
                text:
                'Attackers are constantly seeking new ways to penetrate defenses, utilizing evolving attack vectors and exploiting emerging technologies.',
            },
        ],
    },
        {
            title: 'AI-Driven Security',
            description: 'ViXa Identity-First’s AI-powered algorithms augment your human analysts by automating tedious triage and surfacing the highest-risk events first.',
            cards: [
                {
                    number: '01',
                    title: 'Anomaly Detection',
                    text:
                    'AI-powered algorithms can identify unusual patterns in network traffic, user behaviour, and system logs, flagging potential threats.',
                },
                {
                    number: '02',
                    title: 'Malware Analysis',
                    text:
                    'AI can analyse malware code, identify malicious signatures, and classify threats, helping organizations stay ahead of the curve.',
                },
            ],
        },
   ];

    const CARD_DATA = {
        title: 'VIXA IDENTITY-FIRST AI-POWERED VULNERABILITY ANALYSIS',
        description: 'ViXa platform AI-powered can automate the process of vulnerability scanning and assessment, identifying weaknesses in systems and applications before they can be exploited.',
        cards: [
            {
                title: 'Vulnerability Discovery',
                subtitle: 'ViXa platform AI-powered can scan and identify vulnerabilities in software, hardware, and network infrastructure more quickly and efficiently than traditional methods.',
                icon: '/assets/images/icons/vulnerability-discovery.png',
            },
            {
                title: 'Risk Prioritization',
                subtitle: 'Ost Infinity AI algorithms can prioritize vulnerabilities based on their severity, likelihood of exploitation, and impact on the organization.',
                icon: '/assets/images/icons/risk-prioritization.png',
            },
            {
                title: 'Automated Patching',
                subtitle: 'We automate the process of patching vulnerabilities, ensuring that systems are up-to-date and protected against known threats.',
                icon: '/assets/images/icons/automated-patching.png',
            }
        ],
    }

  return (
    <>
      <Head>
        <title>OST Infinity Deck | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Ost Infinity Product Deck`} desc='Table of Content' activeMenu='fourth' illustrationSrc="ost-infinity-deck.png" illustrationAlt="Pricing" />
        <PromoBar/>
        <FloatingContact />
        <AboutVixa title={title} paragraphs={paragraphs} center={true}/>
        <ProblemSection data={PROBLEM_CARDS[0]} />
        {/* <ProblemSection data={PROBLEM_CARDS[1]} /> alignClass="text-right" */}
        

        {/* <CardInfoV2 data={CARD_DATA}/> */}

        {/* <InvestmentSection /> */}
        <WelcomeCard />
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  );
}


