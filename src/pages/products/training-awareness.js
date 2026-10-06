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

const heading = 'Ost Infinity Managed Security Awareness'
const description ='Ost Infinity Managed Security Awareness prepares your employees to recognize and neutralize social engineering attacks and human error through microlearning content, shame-free automated phishing simulations, and awareness coaching — all delivered by our Security Teams. Experience a month’s worth of content, microlearning sessions, quizzes, and a look at a phishing simulation with our interactive Managed Security Awareness Journey.'

import { X } from "lucide-react";
import { Plus } from "lucide-react";

const heading2 = 'WE ADDRESS CYBERSECURITY AND NETWORK PERFORMANCE MONITORING END-TO-END'
const description2 ='Ost Infinity works with you to holistically address cyber risk by equipping you  with the tools and expertise to VulnerabilityAssessment, mitigate and transfer your cyber threats and risk'
export default function TrainingAwareness() {
    const [showAll, setShowAll] = useState(false)
    const [isOneVisible, setIsOneVisible] = useState(true)
    const [isTwoVisible, setIsTwoVisible] = useState(true)
    const [isThreeVisible, setIsThreeVisible] = useState(true)
    const [isFourVisible, setIsFourVisible] = useState(true)
    const [isFiveVisible, setIsFiveVisible] = useState(true)
    
    useEffect(() => {
    if (showAll) {
        const el = document.getElementById('capabilities')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    }, [showAll])

    const aboutVixa = [
        {
            title: 'Penetration Testing',
            paragraphs: [
                <>
                    A penetration test is a simulated cyberattack against a computer system, network, or web application to identify and exploit vulnerabilities before malicious hackers can. The goal is to assess security weaknesses and provide recommendations for strengthening defences.
                </>
            ]
        },
        {
            title: 'Penetration Testing',
            paragraphs: [
                <>
                    Penetration testing (pentesting) is a simulated cyberattack against a system, network, or application to identify vulnerabilities before malicious actors exploit them. To ensure maximum effectiveness, penetration testing Ost Infinity strictly follow:
                </>,
                <>
                    <ul className="ml-4 list-disc list-inside">
                        <li><strong>Contextual</strong> - Tailored to the specific environment, business needs, and threat landscape.</li>
                        <li><strong>Systematic</strong> - Follows a structured methodology to ensure thorough coverage.</li>
                        <li><strong>Effective</strong> - Provides actionable insights and real-world attack simulation</li>
                    </ul>
                </>
            ]
        }
    ]

    const cardData = [
        [
            {
                title: 'Key Objectives',
                items: [
                    <>
                    <strong>1. Identify Vulnerabilities</strong> - Discover security flaws (e.g., misconfigurations, outdated software, weak passwords).
                    </>,
                    <>
                    <strong>2. Exploit Weaknesses</strong> - Attempt to breach systems ethically to assess real-world attack risks.
                    </>,
                    <>
                    <strong>3. Evaluate Security Controls</strong> - Test firewalls, intrusion detection systems (IDS), and encryption effectiveness.
                    </>,
                    <>
                    <strong>3. Provide Remediation Guidance</strong> - Offer actionable fixes to improve security posture.
                    </>,
                ],
            }
        ],
        [
            {
                title: 'Contextual Penetration Testing',
                items: [
                    <>
                        A contextual approach ensures testing aligns with the organization’s unique risks, compliance requirements, and operational environment.
                    </>,
                    <>
                        <p className='mt-4'>Key Aspects:</p>
                    </>,
                    <>
                        <>
                            <ul className="ml-4 list-disc list-inside">
                                <li><strong>Business-Aligned Objectives:</strong> Focuses on critical assets (e.g., customer data, intellectual property).</li>
                                <li><strong>Threat Modelling:</strong> Identifies likely attack vectors based on industry-specific threats (e.g., ransomware for healthcare, API attacks for fintech).</li>
                                <li><strong>Compliance-Driven:</strong> Ensures adherence to standards like PCI-DSS, HIPAA, ISO 27001, GDPR.</li>
                                <li><strong>Real-World Attack Simulation:</strong> Mimics tactics, techniques, and procedures (TTPs) used by adversaries targeting the organization.</li>
                            </ul>
                        </>
                    </>,
                    <>
                        <p className='my-4'>Example:</p>
                    </>,
                    <>
                        A financial institution prioritizes testing online banking APIs and fraud detection bypasses, while a manufacturing firm focuses on ICS/SCADA vulnerabilities.
                    </>
                ],
            }
        ],
        [
            {
            title: 'Systematic Penetration Testing',
            items: [
                <>
                    <p className='mb-4'>A structured, repeatable methodology ensures consistency and thoroughness.</p>
                </>,
                <>
                    <strong>Ost Infinity Pentesting Frameworks:</strong>
                </>,
                <>
                <ul className="my-4 ml-4 list-disc list-inside">
                    <li>
                    <strong>OSSTMM (Open Source Security Testing Methodology Manual):</strong> Focuses on operational security.
                    </li>
                    <li>
                    <strong>NIST SP 800-115:</strong> Provides technical guidelines for penetration testing.
                    </li>
                    <li>
                    <strong>PTES (Penetration Testing Execution Standard):</strong> Covers pre-engagement, intelligence gathering, exploitation, and reporting.
                    </li>
                    <li>
                    <strong>MITRE ATT&CK® Framework:</strong> Maps attacker behaviours for realistic testing.
                    </li>
                </ul>
                </>,
                <>
                <strong>Phases of Systematic Testing:</strong>
                </>,
                <>
                <ul className="ml-4 list-disc list-inside">
                    <li>
                    <strong>Planning & Reconnaissance:</strong> Define scope, rules of engagement, and objectives; gather intelligence (OSINT, network scanning).
                    </li>
                    <li>
                    <strong>Vulnerability Analysis:</strong> Identify weaknesses (automated scans + manual verification).
                    </li>
                    <li>
                    <strong>Exploitation:</strong> Actively exploit flaws (e.g., SQLi, XSS, privilege escalation).
                    </li>
                    <li>
                    <strong>Post-Exploitation:</strong> Determine impact (data exfiltration, lateral movement).
                    </li>
                    <li>
                    <strong>Reporting & Remediation:</strong> Provide prioritized findings with mitigation steps.
                    </li>
                </ul>
                </>,
            ],
            },
        ],
        [
            {
                title: 'Effective Penetration Testing',
                items: [
                    <>
                        Effectiveness is measured by how well the test improves security posture
                    </>,
                    <>
                    <p className="mt-4">Characteristics of an Effective Test:</p>
                    </>,
                    <>
                    <ul className="ml-4 list-disc list-inside">
                        <li>
                        <strong>Actionable Results</strong> – Clear, prioritized vulnerabilities with remediation steps.
                        </li>
                        <li>
                        <strong>Realistic Attack Scenarios</strong> – Goes beyond automated scans to mimic advanced threats.
                        </li>
                        <li>
                        <strong>Red Team vs. Blue Team Collaboration</strong> – Encourages defensive improvements.
                        </li>
                        <li>
                        <strong>Continuous Improvement</strong> – Regular retesting to validate fixes.
                        </li>
                    </ul>
                    </>,
                    <>
                    <p className="mt-4">Example of Effectiveness:</p>
                    </>,
                    <>
                    <ul className="ml-4 list-disc list-inside">
                        <li>
                        A pentest uncovers an <strong>unauthenticated API endpoint</strong> exposing customer PII.
                        </li>
                        <li>
                        The report provides:
                        <ul className="ml-6 list-disc list-inside">
                            <li><strong>CVSS Score</strong> (e.g., 9.8 Critical).</li>
                            <li><strong>Proof-of-Concept Exploit</strong>.</li>
                            <li><strong>Patch Recommendations</strong> (e.g., implement OAuth2.0).</li>
                        </ul>
                        </li>
                        <li>
                        The organization patches the flaw, preventing a potential breach.
                        </li>
                    </ul>
                    </>,
                ],
            },
        ],
        [
            {
                title: 'Standards & Frameworks',
                items: [
                    <>
                        <ul className="ml-4 list-disc list-inside">
                            <li><strong>OSSTMM</strong> (Open Source Security Testing Methodology Manual)</li>
                            <li><strong>PTES</strong> (Penetration Testing Execution Standard)</li>
                            <li><strong>NIST SP 800-115</strong> (Technical Guide to Penetration Testing)</li>
                            <li><strong>OWASP Testing Guide</strong> (Web Application Focus)</li>
                        </ul>
                    </>
                ],
            },
        ],
        [
            {
                title: 'conclusion',
                items: [
                    <>
                        A structured penetration testing methodology ensures thorough security assessments while minimizing risks. The process involves reconnaissance, vulnerability analysis, exploitation, reporting, and retesting, tailored to the engagement scope (black/gray/white-box). Following industry standards helps maintain consistency and reliability in findings.
                    </>
                ]
            }
        ],
        [
            {
                title: 'Conclusion',
                items: [
                <>
                    <ul className="ml-4 list-disc list-inside">
                    <li><strong>Web Apps:</strong> Focus on OWASP Top 10, APIs, and business logic.</li>
                    <li><strong>Cloud:</strong> Test IAM, storage, and cloud-native services.</li>
                    <li><strong>IoT:</strong> Analyze hardware, firmware, and wireless protocols.</li>
                    </ul>
                </>,
                <>
                    <p className="mt-4">
                        <strong>A hybrid approach</strong> (automated scans + manual testing) ensures comprehensive security assessments. Always follow <strong>legal agreements</strong> and <strong>responsible disclosure policies</strong>.
                    </p>
                </>,
                ],
            },
        ]
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
        <title>Training Awareness | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Training Awareness`} desc={`Assess, mitigate, and transfer your cyber risk`} activeMenu="eleven" illustrationSrc="security.svg" illustrationAlt="VIXA Platforms" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Security Journey For Organizations"/>
       <ProductNavigationTwo />

        <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden  p-05"
        >
     
             <h1 className='text-5xl mb-6'>What is Security Awareness Training</h1>
            
            <div className="text-2xl leading-relaxed">
             <p className='mb-5'></p>
             <p>Security awareness is a standardized process that provides employees,contractors,vendors, and other third-party stakeholders with cybersecurity education.
                Security awareness training is designed to prepare users to recognize and neutralize social engineering attacks and human error.
                Security awareness training is a core pillar of proactive security operations. 
             </p>

            </div>
             </div>
           
        </section>

            
   
    <div className={`relative p-6 leading-tight ${isOneVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border items-center border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto`}>
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
      <h3 className={`text-lg font-semibold ${isOneVisible ? 'mb-10' : ''}`}>1. What Is Security Awareness Training? </h3>
      {isOneVisible && (
        <>
      <p className="text-white text-lg mb-5 leading-10">
       A security awareness training program is the compilation of compliance training, phishing lessons, and any efforts (videos, quizzes, events, content) created to train employees to meet compliance requirements and grow in their knowledge and application of security best practices.  
      </p>
      <p className="text-white text-lg mt-2 leading-10">
      Examples include annual HIPAA compliance training for an organization in the healthcare industry, a video on phishing, or even a mandatory reading on common security issues in the workplace. Security awareness training programs take many forms and are commonplace in organizations that have a digital presence. 
      </p>
      </>
      )}
    </div>


     <div className={`relative mt-5 p-6 leading-tight ${isTwoVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto`}>
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
   
      <h3 className={`text-lg font-semibold ${isTwoVisible ? 'mb-10' : ''}`}>2. Why Do Employees Need Security Awareness Training? </h3>
       {isTwoVisible && (
      <p className="text-white text-lg mb-5 leading-10">
       Ultimately, the goal of a security awareness training program is to change behaviour through education. These programs help employees identify risky habits and replace them with secure ones, as well as instruct users on how to both recognize the signs of an attack and how to react to an attack.
        The most effective security awareness training programs are long-term and utilize a variety of teaching methods to meet compliance and legal requirements of your industry as well as permanently change user behaviour.   
      </p>
     )}
    </div>


     <div className={`relative mt-5 p-6 leading-tight ${isThreeVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto`}>
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
      <h3 className={`text-lg font-semibold ${isThreeVisible ? 'mb-10' : ''}`}>3. 5 Features of a Successful Security Awareness Program </h3>
       {isThreeVisible && (
        <>
      <p className="text-white text-lg mb-8 leading-10">
       According to The State of Cybersecurity 2023 Trends Report, 90% of the threats Ost Infinity responded to in 2022 actively targeted employees or users. With the vast majority of 
       threat actors targeting the human element of cybersecurity, it’s crucial that any security awareness program be optimized for effectiveness. Here are five features of an effective
        security awareness training program. 
      </p>
      <h4 className="text-lg font-semibold">1. Greater Frequency </h4>
      <p className="text-white text-lg leading-10 mb-8">
      People forget more than 80 percent of what they’ve learned in less than a month, making the need for frequent engagement a necessity for building a culture of security. Frequency 
      is key in helping employees take in — and remember — what was learned in training, as well as making sure it’s actively applied, not just scanned and forgotten. Effective security awareness programs engage employees more than once a month to ensure they will retain the information better and for longer. 
      </p>
      <h4 className="text-lg font-semibold">2. Fully Managed Administration </h4>
      <p className="text-white text-lg leading-10 mb-8">
     Because of the nature of traditional security awareness solutions, management and administration of the program 
     typically falls to someone inside the organization. This can often be an overwhelming role, as they will be tasked with building out campaigns, as well as reviewing and
      editing content and phishing simulations. More effective programs are fully managed by the solution provider, eliminating administrative tasks for the organization. 
      </p>
       <h4 className="text-lg font-semibold">4. Bite-sized Content </h4>
      <p className="text-white text-lg leading-10 mb-8">
    Having employees memorize every aspect of industry-specific compliance requirements during a single training 
    session all but ensures the information won’t be retained. The human brain is best at absorbing four to seven pieces of information at a time, and if security awareness training is only happening yearly or quarterly, 
    the amount of information employees is being asked to retain far exceeds their capacity to do so – leading to forgetfulness, learning loss, and a lack of engagement.
      </p>
      <p className="text-white text-lg leading-10 mb-8">
      Effective security awareness training programs utilize microlearning, which teaches cybersecurity information
       in small chunks over short periods that are easy to learn and absorb and recall.
      </p>
       <p className="text-white text-lg leading-10 mb-8">
     Instead of taking employees away from their jobs for hours or days at a time with a fire hose full of information they soon forget, microlearning 
     sessions are easy to digest, and can become a convenient part of an employee’s normal routine. 
      </p>
       <h4 className="text-lg font-semibold">4. Current Content </h4>
      <p className="text-white text-lg leading-10 mb-8">
        The cyberthreat landscape is constantly evolving as threat actors unleash terrible new innovations to their tactics, techniques, and procedures on a perpetual basis. It’s why the frequency 
        with which a security awareness training program engages with users is so important.
      </p>
       <p className="text-white text-lg leading-10 mb-8">
     However, if the program’s content isn’t frequently updated to reflect the current threat landscape, the efforts will be wasted. The most effective programs utilize training content that is informed by real-world threat intel 
     and industry trends, ensuring timely, relevant training that keeps your team from falling a step behind threat actors.  
      </p>
      <h4 className="text-lg font-semibold">5. Shame-free Behaviour Correction </h4>
      <p className="text-white text-lg leading-10 mb-8">
    Phishing simulations are often a part of a security awareness program. However, many programs attempt to influence behaviour through 
    negative reinforcement or shaming. When an employee falls for a phishing simulation it can lead to consequences like additional training, 
    discussions with supervisors or even a meeting with HR. To be effective, security awareness training should be free of shaming or other negative consequences. <br></br>

    Instead, when a person clicks on a phishing simulation, they should be given specific information that helps them to build their skills in recognizing real phishing emails. 
      </p>
      </>
     )}
    </div>


    <div className={`relative mt-5 p-6 leading-tight ${isFourVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto`}>
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
      <h3 className={`text-lg font-semibold ${isFourVisible ? 'mb-10' : ''}`}>4. What Topics Should Be in A Security Awareness Program? </h3>
      {isFourVisible && (
        <>
      <p className="text-white text-lg mb-5 leading-8">
      While the bread and butter of any security awareness training program should be education around the latest social engineering tactics and attack methods,
       there are additional topics that effective programs include. When evaluating security awareness programs, look for solutions that offer training on a robust, regularly updated suite of topics 
      </p>

       <h3 className="text-lg font-semibold">Social Engineering</h3>
      {/* <p className="text-white text-lg mb-5 leading-10"> */}
        <ul className='list-disc list-inside text-lg mb-5 leading-10'>
        <li>Phishing Emails</li> 
        <li>Spear Phishing Emails</li>
        <li>Vishing Calls</li>
        <li>Smishing </li>
        </ul>
      {/* </p> */}

      <h3 className="text-lg font-semibold">Security Best Practices</h3>
      {/* <p className="text-white text-lg mb-5 leading-10"> */}
        <ul className='list-disc list-inside text-lg mb-5 leading-10'>
          <li>Remote Work Best Practices</li>
          <li>Cyber Hygiene Best Practices</li>
          <li>Preventing Account Takeover</li>
          <li>Defending Against Credential Theft and Brute Force Attacks</li>
          <li>Identifying Spoofed Websites</li>
          <li>Recognizing Insider Threats</li>
        </ul>
      {/* </p> */}

      <h3 className="text-lg font-semibold">Physical Security</h3>
      {/* <p className="text-white text-lg mb-5 leading-10"> */}
        <ul className='list-disc list-inside'>
           <ul className="list-disc list-inside text-lg mb-5 leading-10">
    <li>Dangers of Device Sharing</li>
    <li>Dangers of Public Wi-Fi</li>
    <li>Dangers of Lost or Stolen Devices</li>
    <li>Threat of Shoulder Surfing</li>
    <li>Threat of Dumpster Diving</li>
    <li>Threat of Tailgating</li>
  </ul>
        </ul>
      {/* </p> */}

      <h3 className="text-lg font-semibold mb-10">Compliance Training Content </h3>
      <p className="text-white text-lg mb-5 leading-10">
      Requirements for compliance training topics vary depending on industry. It’s important to find a
       solution that offers a wide variety of compliance courses that will be helpful for your organization.
      </p>


     <h3 className="text-lg font-semibold">Compliance-specific training can include topics like: </h3>
      {/* <p className="text-white text-lg mb-5 leading-10"> */}
        <ul className='list-disc list-inside text-lg mb-5 leading-10'>
    <li>PCI</li>
    <li>HIPAA</li>
    <li>Title IX</li>
    <li>FERPA</li>
    <li>Anti-Discrimination</li>
    <li>Sexual Harassment Prevention</li>
    <li>Affirmative Action and Equal Opportunity Employment</li>
    <li>FMLA</li>
    <li>Security Essentials</li>
  </ul>
      {/* </p> */}


       {/* <h3 className="text-lg font-semibold mb-10">How to Implement a Security Awareness Training Program </h3>
      <p className="text-white text-lg mb-5 leading-10">
       Security awareness is one of few programs that regularly interacts with employees, so proper implementation is crucial. Clearly defining and communicating security awareness goals and initiatives should be the lifeline of any program. Training that doesn’t engage with employees or doesn’t connect with the unique culture of a company will quickly fail.  
        A key element to the success of any security awareness program, then, involves establishing a series of goals and initiatives that gain approval from a small, internal committee. The Complete Security Awareness Program and Strategy Guide outlines the steps to proper program creation, development, and implementation

      </p> */}

      </>
      )}
    </div>

     <div className={`relative mt-5 p-6 leading-tight  ${isFiveVisible ? 'bg-[#111865]' : 'bg-gradient-to-r from-[#5D0E71] to-[#03396B]'} backdrop-blur-sm border border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto`}>
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
      <h3 className={`text-lg font-semibold ${isFiveVisible ? 'mb-10' : ''}`}>5. How to Implement a Security Awareness Training Program  </h3>
       {isFiveVisible && (
        <>
      <p className="text-white text-lg mb-5 leading-10">
     Security awareness is one of few programs that regularly interacts with employees, so proper implementation is crucial. Clearly defining and communicating security awareness goals and initiatives should be the lifeline of any program. Training that doesn’t engage with employees or doesn’t connect with the unique culture of a company will quickly fail. <br></br> 
        A key element to the success of any security awareness program, then, involves establishing a series of goals and initiatives that gain approval from a small, internal committee. The Complete Security Awareness Program and Strategy Guide outlines the steps to proper program creation, development, and implementation:
      </p>

      <ul className="list-decimal list-inside text-white text-base leading-relaxed space-y-1 text-lg mb-5 leading-10">
       <li>Choose a mission statement</li>
       <li>Define roles and responsibilities</li>
       <li>Establish an advisory board</li>
       <li>Identify key users and roles</li>
       <li>Build the training</li>
       <li>Deliver it effectively</li>
       <li>Implement awareness initiatives</li>
       <li>Analyse performance metrics</li>
    </ul>
     </>
       )}
      </div>

    {/* <div className="container px-6 pb-10 mx-auto space-y-8 md:px-32 mt-16">
        <>
          <div  className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px] rounded">
            <div className={`p-10 bg-[#111865] backdrop-blur-sm rounded`}>
                 <h1 className={`font-bold text-[30px] mb-5`}>Access Your Cyber Risk with the Ost Infinity Cyber Resilience Assessment</h1>
              <p className="text-[24px] leading-10 mb-5">
                 The Ost Infinity Security Journey is how we end cyber risk together.That journey truly begins by
                 understanding your cyber risk. To start your journey, assess your risk with Ost Infinity Cyber
                 Resilience Assessment.
              </p>
            </div>
          </div>
        </>
    </div> */}
       

         <IntegrationsCard heading={heading} desc={description}/>     
       
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


