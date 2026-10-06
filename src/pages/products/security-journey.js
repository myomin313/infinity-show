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
import Image from 'next/image'

const heading = 'Security Outcome Deliver'
const description ='Moderm Cyber threats are evolving on daily bases.Cybersecurity must evolve ahead of these cyber risks too.The Ost Infinity Security Jounery helps businesses address cyber risk continuously, enabling them to evolve and adapt them to evolve and adapt with the thread landscape to achieve security desirable outcomes'


const heading2 = 'WE ADDRESS CYBERSECURITY AND NETWORK PERFORMANCE MONITORING END-TO-END'
const description2 ='Ost Infinity works with you to holistically address cyber risk by equipping you  with the tools and expertise to VulnerabilityAssessment, mitigate and transfer your cyber threats and risk'
export default function SecurityJourney() {
    const [showAll, setShowAll] = useState(false)
    
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
        <title>Security Journey | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href="/assets/images/logos/favicon.svg" />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <Hero heading={`Business Security Journey`} desc={`Assess, mitigate, and transfer your cyber risk`} activeMenu="ten" illustrationSrc="business-security.svg" illustrationAlt="VIXA Platforms" />
        <PromoBar/>
        <FloatingContact />
        <BriefSection title="Security Journey For Organizations"/>
        {/* <AboutVixa title={aboutVixa[0].title} paragraphs={aboutVixa[0].paragraphs}/> */}
       {/* <ProductNavigation illustrationSrc={["managed-risk"]} illustrationAlt="Managed Risk"/> */}
       <ProductNavigationTwo />
        {/* <CardInfo data={cardData[0]}/> */}
        {/* <Table data={tableData[0]} /> */}
        {/* <AboutVixa title={aboutVixa[1].title} paragraphs={aboutVixa[1].paragraphs}/> */}
           {/* <OverviewAndStatsSection /> */}
             <IntegrationsCard heading={heading} desc={description}/>
            {/* <h1>Business Security Journey</h1> */}
             {/* <h2 className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent text-3xl font-extrabold mb-4">
           Business Security Journey
          </h2> */}
             <section>
                 <div className="max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mt-20 md:text-5xl">Bussiness’ Security Journey</h2>
        </div>
             </section>
             <IntegrationsCard heading={heading2} desc={description2}/>
            
            <section className="container px-6 mt-20 mb-5 md:px-16">
                 <div className="max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mt-20 md:text-5xl">Bussiness’ Cyber And Network Performance Threats</h2>
        </div>
             </section>

             

              <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden  p-05  p-[2px]"
        >
        <div className="bg-[#111865]  overflow-hidden">
            

            <div className="p-10 text-2xl leading-relaxed">
                <Image
    src="/assets/images/business-security.svg"
    alt="Business Security"
    fill
    className="text-4xl font-semibold text-center mt-20 md:text-5xl"
  />
            
            </div>
             </div>
           </div>
        </section>


         <section className="container px-6 mx-auto mt-20 mb-5 md:px-16">
        <div
        className="relative overflow-hidden  p-05"
        >
     
             <h1 className='text-5xl mb-6'>Your investment</h1>
            
            <div className="text-2xl leading-relaxed">
             <p className='mb-5'>Programmatically address cyber risk  end to end throught a single partner with the tools and security
             expertise to mitigate cyber risks and understand the implications they have on your overall cyber risk
             <br></br>profile.</p>
             <p>Understand the value of the investment you’re making in your security program and how those 
                investments reduce your exposure costs.Highlight your outcomes with stakeholder-ready reporting.
                Easily provide artifacts of your security posture to third-party stakeholders,including auditors, cyber
                insurers, and current and prospective business partners.
             </p>

            </div>
             </div>
           
        </section>


         <div className="container px-6 pb-10 mx-auto space-y-8 md:px-16 mt-16">
        <>
          <div
            
            className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px] rounded"
          >
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
    </div>

            
       
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


