import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import AboutVixa from '@/parts/aboutVixa';
import Header from '@/parts/header';
import Hero from '@/parts/hero'
import ProductNavigation from '@/parts/productNavigation'
import CardInfo from '@/components/CardInfo';
import IntegrationsCard from '@/components/integrationsCard';
import Table from '@/components/Table';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'
import ProductNavigationTwo from '@/parts/productNavigationTwo';
import { ShieldCheck } from 'lucide-react'
import PostureHero from '@/parts/postureHero';


const heading = 'Ost Infinity Managed Security Awareness'
const description ='Ost Infinity Managed Security Awareness prepares your employees to recognize and neutralize social engineering attacks and human error through microlearning content, shame-free automated phishing simulations, and awareness coaching — all delivered by our Security Teams. Experience a month’s worth of content, microlearning sessions, quizzes, and a look at a phishing simulation with our interactive Managed Security Awareness Journey.'

import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { BASE_IMAGE_URL } from '../api/endpoint';

const heading2 = 'WE ADDRESS CYBERSECURITY AND NETWORK PERFORMANCE MONITORING END-TO-END'
const description2 ='Ost Infinity works with you to holistically address cyber risk by equipping you  with the tools and expertise to VulnerabilityAssessment, mitigate and transfer your cyber threats and risk'
export default function CyberSecurityPostureManagement() {

    const [showAll, setShowAll] = useState(false)
    const [isOneVisible, setIsOneVisible] = useState(true)
    const [isTwoVisible, setIsTwoVisible] = useState(true)
    const [isThreeVisible, setIsThreeVisible] = useState(true)
    const [isFourVisible, setIsFourVisible] = useState(true)
    const [isFiveVisible, setIsFiveVisible] = useState(true)
    const [isSixVisible, setIsSixVisible] = useState(true)
    
    useEffect(() => {
    if (showAll) {
        const el = document.getElementById('capabilities')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    }, [showAll])

    const aboutVixa = [
        {
            title: 'Cyber Security Posture Management',
            paragraphs: [
                <>
                    Ost Infinity Cybersecurity Posture Management (CSPM) provide continuous process of assessing,monitoring, and imporving an organization’s security
                    stance to defend against cyber threats.We involves evaluating risks, implementation controls, and ensuring compliance with security policies and
                    regulations.Our strong cybersecurity posture helps organizations:<br></br>
                </>,
                <>
                 <ul className="ml-4 list-disc list-inside mt-5">
                   <li>Identify vulnerabilities and misconfigurations</li>
                   <li>Detect and respond to threats proactively</li>
                   <li>Maintain compliance with industry standard (eg., NIST, ISO 27001, GDPR )</li>
                   <li>Reduce attack surface and mitigate risks</li>
                 </ul>
                </>
               
            ]
        }
    ]

     const cardData = [
    {
      title: 'Ost Infinity Effective Cspm Approach',
      items: [
        '✅ Adopt a Risk-Based Approach - Prioritize high-impact risks.',
        '✅ Leverage AI & Automation - For faster threat detection.',
        '✅ Implement Zero Trust Security - Verify every access request.',
        '✅ Conduct Regular Audits & Pen Test - Identify gaps before attackers do.',
        '✅ Foster a Security-First Culture - Train employees continuously.',
      ],
    }
  ]

    const tableData = [
        {
            title: 'Types of Penetration Tests',
            headers: ['Type', 'Focus Area'],
            rows: [
                {
                    feature: 'Network Penetration',
                    concierge: 'Internal/External networks, routers, servers',
                    standard: '',
                },
                {
                    feature: 'Web Application',
                    concierge: 'Websites, APIs, SQLi, XSS, CSRF flaws',
                    standard: '',
                },
                {
                    feature: 'Wireless Security',
                    concierge: 'Wi-Fi networks, encryption weaknesses',
                    standard: '',
                },
                {
                    feature: 'Social Engineering',
                    concierge: 'Phishing, baiting, human vulnerabilities',
                    standard: '',
                },
                {
                    feature: 'Physical Security',
                    concierge: 'Unauthorized access to facilities/devices',
                    standard: '',
                },
            ]
        },
        {
            title: 'Ost Infinity Commonly Used Tools Across Domains',
            headers: ['Category', 'Tools'],
            rows: [
                {
                    feature: 'Web Apps',
                    concierge: 'Burp Suite, OWASP ZAP, SQLmap, Nikto',
                    standard: '',
                },
                {
                    feature: 'Cloud',
                    concierge: 'ScoutSuite, Pacu, CloudSploit, TruffleHog',
                    standard: '',
                },
                {
                    feature: 'IoT',
                    concierge: 'Binwalk, Firmadyne, HackRF, ChipWhisperer',
                    standard: '',
                },
                {
                    feature: 'Network',
                    concierge: 'Nmap, Wireshark, Metasploit',
                    standard: '',
                },
                {
                    feature: 'Vulnerability Scanners',
                    concierge: 'Nessus, OpenVAS, Qualys',
                    standard: '',
                },
            ]
        }
    ]

    const integrationsCard = [
        {
            heading: 'Ost Infinity Methodology and Approach for Penetration Testing',
            description: 'Penetration testing (pen testing) is a systematic process of evaluating the security of an IT infrastructure by simulating real-world attacks. A well-defined methodology ensures thorough testing while minimizing risks to the target systems. Below is a structured approach to penetration testing:'
        },
        {
            heading: 'Methodology & Approach for Cloud, IoT, & Web Apps Penetration Testing',
            description: 'Penetration testing (pentesting) for Cloud, IoT, and Web Applications involves identifying security vulnerabilities by simulating real-world attacks. Below is a structured methodology for each domain, following industry best practices (e.g., OWASP, NIST, PTES).'
        }

    ]

  return (
    <>
      <Head>
        <title>Cyber Security Posture Management | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <PostureHero heading={`Cyber Security Posture Management`} desc={`Ost Infinity provide ongoing Cybersecurity Posture Management process that leveraging automation,
          and fostering a security aware culture, organizations can significantly reduce cyber risks and enhance resilience against attacks.`} activeMenu="posture" illustrationSrc="security.svg" illustrationAlt="VIXA Platforms" />
        <PromoBar/>
        <FloatingContact />
        <div id="overview">
        <BriefSection title="Cyber Security Posture"/>
        </div>
        <AboutVixa title={aboutVixa[0].title} paragraphs={aboutVixa[0].paragraphs} />
       {/* <ProductNavigationTwo /> */}
         <div id="how-it-work">
       <ProductNavigation
                 illustrationSrc={["cyber-security-posture-management/devsecops-workflow"]}
                 illustrationAlt="VIXA DevSecOps Workflow"
               />
        </div>
        <div id="improve-posture">
        <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden  p-05"
        >
             <h1 className='text-5xl mb-6'>How to Improve Cyber Security Posture?</h1>
           </div>
        </section>

            
   
    <div className={`relative p-6 leading-tight ${isOneVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border items-center border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isOneVisible ? (
     <button
        onClick={() => setIsOneVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsOneVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
      <h3 className={`text-lg font-semibold ${isOneVisible ? 'mb-10' : ''}`}>Conduct a Security Assessment</h3>
      {isOneVisible && (

        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li> Perform  <strong className='text-bold text-lg'>penetration testing</strong> and <strong className='text-bold text-lg'>risk assessments</strong>.</li>
           <li> Use Frameworks such as <strong className='text-bold text-lg'>NIST CSF</strong> or <strong className='text-bold text-lg'>CIS Controls</strong>.</li>
         </ul>   
     
       
      )}
    </div>


     <div className={`relative mt-5 p-6 leading-tight ${isTwoVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isTwoVisible ? (
     <button
        onClick={() => setIsTwoVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsTwoVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
   
      <h3 className={`text-lg font-semibold ${isTwoVisible ? 'mb-10' : ''}`}>Implement Continuous Monitoring </h3>
       {isTwoVisible && (
      // <p className="mb-5 leading-10">
        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li>Deploy <strong className='text-bold text-lg'>SIEM,IDS/IPS (Intrusion Detection/Preventing Systems)</strong>.</li>
           <li>Use <strong className='text-bold text-lg'>UBEA (User and Entity Behaviour Analytics).</strong></li>
         </ul>   
      // </p>
     )}
    </div>


     <div className={`relative mt-5 p-6 leading-tight ${isThreeVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isThreeVisible ? (
     <button
        onClick={() => setIsThreeVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsThreeVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
      <h3 className={`text-lg font-semibold ${isThreeVisible ? 'mb-10' : ''}`}>Strength Access Controls</h3>
       {isThreeVisible && (
      //  <p className="mb-5 leading-10">
        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li>Enforce <strong className='text-bold text-lg'>MFA</strong> and <strong className='text-bold text-lg'>role-based access control (RBAC)</strong>.</li>
           <li>Adopt <strong className='text-bold text-lg'>Zero Trust Network Access (ZTNA)</strong>.</li>
         </ul>   
      // </p>
     )}
    </div>


    <div className={`relative mt-5 p-6 leading-tight ${isFourVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isFourVisible ? (
     <button
        onClick={() => setIsFourVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsFourVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
      <h3 className={`text-lg font-semibold ${isFourVisible ? 'mb-10' : ''}`}>Automate Security Processes </h3>
      {isFourVisible && (
        <>
       {/* <p className="mb-5 leading-10"> */}
        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li>Use <strong className='text-bold text-lg'>SOAR (Security Orchestration, Automation, and Response)</strong> tools.</li>
           <li>Automate <strong className='text-bold text-lg'>patch management</strong> and <strong className='text-bold text-lg'>threat detection</strong>.</li>
         </ul>   
      {/* </p> */}
      </>
      )}
    </div>
      
    
     <div className={`relative mt-5 p-6 leading-tight  ${isFiveVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isFiveVisible ? (
     <button
        onClick={() => setIsFiveVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsFiveVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
      <h3 className={`text-lg font-semibold ${isFiveVisible ? 'mb-10' : ''}`}>Regularly Update Policies & Train Employees </h3>
       {isFiveVisible && (
        //  <p className="mb-5 leading-10">
        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li>Conduct <strong className='text-bold text-lg'>security awareness programs</strong></li>
           <li>Update <strong className='text-bold text-lg'>incident response plans</strong> and <strong className='text-bold text-lg'>security policies</strong></li>
         </ul>   
      // </p>
       )}
      </div>


       <div className={`relative mt-5 p-6 leading-tight  ${isSixVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-6xl mx-auto`}>
     {isSixVisible ? (
     <button
        onClick={() => setIsSixVisible(false)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-5 h-5 text-6xl text-white" />
      </button>
      ):(
        <button
        onClick={() => setIsSixVisible(true)}
        className="absolute top-6 right-2 text-gray-500 hover:text-red-500 transition"
      >
        <Plus className="w-5 h-5 text-6xl text-white" />
      </button>
      )}
      <h3 className={`text-lg font-semibold ${isSixVisible ? 'mb-10' : ''}`}>Measure and Improve </h3>
       {isSixVisible && (
        //  <p className="mb-5 leading-10">
        <ul className="ml-4 list-disc list-inside mt-5 leading-10">
           <li>Track <strong className='text-bold text-lg'>KPIs</strong></li>
              <ul className="ml-4 list-disc list-inside">
                <li>Mean Time to Detect (MTTD) </li>
                <li>Mean Time to Response (MTTD) </li>
                <li>Number of unresolved vulnerabilities</li>
              </ul>
           <li>Continuously refine security strategies</li>
         </ul>   
      // </p>
       )}
      </div>

         <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden  p-05"
        >
             <h1 className='text-5xl mb-6'>Challenges Ost Infinity Addressing In Cybersecurity Posture Management</h1>
            
            <div className="text-2xl leading-relaxed">
             {/* <p className='mb-5'> */}
                <ul className="ml-4 list-disc list-inside">
                <li><strong>Complex IT Environment </strong>(Hybrid Cloud, IoT,OT).</li>
                <li><strong>Skill Shortages </strong> in cybersecurity expertise.</li>
                <li><strong>Evolving Threat Landscape</strong> (AI-powered attacks,ransomware).</li>
                <li><strong>Compliance Burden</strong> (Changing regulations).</li>
                <li><strong>False Positive & Alert Fatigue</strong> in monitoring tools.</li>
              </ul>

             {/* </p> */}
            </div>
             </div>
        </section>

        </div>

         <CardInfo data={cardData}/>

         {/* <IntegrationsCard heading={heading} desc={description}/>      */}
       
        {/* {!showAll && (
            <ExploreMore onClick={() => setShowAll(true)} text='Learn More' />
        )}
            {showAll && (
                <>
                <section id="capabilities">
                    <ProductNavigation illustrationSrc={["pre-engagement-phase"]} illustrationAlt="Pre-Engagement Phase"/>
                    <CardInfo data={cardData[4]}/>
                    <CardInfo data={cardData[5]}/>
                    <IntegrationsCard heading={integrationsCard[1].heading} desc={integrationsCard[1].description}/>
                    <ProductNavigation illustrationSrc={["web-application-penetration-testing"]} illustrationAlt="Pre-Engagement Phase"/>
                    <Table data={tableData[1]} />
                    <CardInfo data={cardData[6]}/>
                </section>
            </>
        )} */}
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <Footer />
      </main>
    </>
  );
}


