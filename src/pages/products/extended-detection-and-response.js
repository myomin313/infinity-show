import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PromoBar from '@/parts/promoBar';
import FloatingContact from '@/components/FloatingContact';
import BriefSection from '@/parts/briefSection';
import AboutVixa from '@/parts/aboutVixa';
import TextSection from '@/parts/textSection';
import Header from '@/parts/header';
import Hero from '@/parts/hero';
import PenetratingHeroContent from '@/parts/penetratingHero';
import ProductNavigationThree from '@/parts/ProductNavigationThree';
import ProductNavigation from '@/parts/productNavigation';
import CardInfo from '@/components/CardInfo';
import IntegrationsCard from '@/components/integrationsCard';
import WelcomeCard from '@/components/WelcomeCard';
import OverviewAndStatsSection from '@/parts/statsSection'
import ContactForm from '@/parts/contactForm'
import Cybersecurity from '@/parts/cybersecurity'
import ExploreMore from '@/components/ExploreMore'
import Footer from '@/parts/footer'
import { BASE_IMAGE_URL } from '../api/endpoint';
import XdrComparation from '@/parts/xdrComparation';

export default function ExtendedDetectionAndResponse() {
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    if (showAll) {
      const el = document.getElementById('capabilities')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const title = "Some Of Core Features of XDR";
  const paragraphs = [
    <>
    <p> ViXa platform XDR provide a holistic approach by integrating XDR provide a holistic approach by integrating data from endpoints, networks, cloud workloads, and identity systems.
</p> <br></br>
    
    </>
  ];
  const textparagraphs = [
    <>
    <strong className='text-3xl'>Ost Infinity ViXa Identity-First Cloud-Native XDR </strong> platform is essential for modern enterprises adopting multi-cloud and hybrid environments. We help to consolidating security telemetry, applying AI-driven analytics, and enabling automated responses, the ViXa platform significantly enhances an organization’s ability to detect and mitigate sophisticated cyber threats in real time.
    Ost Infinity aims to strengthens Zero Trust Security for modern cloud-native deployments.
    </>
  ];

  const cardData = [
    {
      title: "Kubernetes Security",
      items: [
        <>
          <ul className="ml-4 list-disc list-inside text-lg">
            <li>Unified Threat Detection
               <ul className="ml-6 list-disc list-inside text-lg">
              <li>XDR integrates telemetry from Kubernetes clusters (logs, API server audits, runtime events) with other cloud and on-premises data sources.</li>
              <li>Correlates threats across containers, pods, nodes, and cloud services.</li>
            </ul>
            </li>
            
            <li>Runtime Security:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Monitors container behaviours using eBPF or kernel-level instrumentation to detect anomalies (e.g., privilege escalation, cryptojacking).</li>
              <li>Integrates with Falco, Aqua Security, or Sysdig for runtime threat detection.</li>
            </ul>
            </li>

             <li>Kubernetes API Monitoring:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Tracks suspicious API calls (e.g., unauthorized role bindings, pod creation in kube-system namespace).</li>
              <li>Detects lateral movement and persistence attacks (e.g., malicious kubectl commands).</li>
            </ul>
            </li>

            <li>Cloud-Native Threat Intelligence:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Uses threat feeds tailored for Kubernetes (e.g., malicious container images, CVEs in Helm charts).</li>
              <li>Detects misconfigurations (e.g., exposed etcd, overly permissive RBAC policies).</li>
            </ul>
            </li>
             <li>Cloud-Native Threat Intelligence:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Uses threat feeds tailored for Kubernetes (e.g., malicious container images, CVEs in Helm charts).</li>
              <li>Detects misconfigurations (e.g., exposed etcd, overly permissive RBAC policies).</li>
            </ul>
            </li>
          </ul>
        </>
      ],
    },

    {
      title: "AI/ML in ViXa platform XDR for Enhanced Threat Detection.",
      items: [
        <>
         <p className="ml-2">AI and ML play a crucial role in improving XDR’s effectiveness by reducing false positives and detecting advanced threats.</p>
          <ul className="ml-4 list-disc list-inside text-lg">
            <li>Anomaly Detection:
               <ul className="ml-6 list-disc list-inside text-lg">
              <li>Learns normal Kubernetes behaviours (e.g., pod scheduling patterns, network flows) and flags deviations.</li>
              <li>Example: Detecting a sudden spike in exec commands inside containers.</li>
            </ul>
            </li>
            
            <li>Behavioural Analysis:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Uses unsupervised ML to identify suspicious activity (e.g., a pod communicating with a known C2 server).</li>
              <li>Example: Detecting living-off-the-land (LOTL) attacks using kubectl or curl inside containers.</li>
            </ul>
            </li>

             <li>Threat Correlation:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>AI models correlate events across Kubernetes, cloud, and endpoints to identify multi-stage attacks.</li>
              <li>Example: Linking a compromised IAM role to a malicious pod deployment.</li>
            </ul>
            </li>

            <li>Predictive Threat Intelligence:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>ML models predict attack paths based on MITRE ATT&CK for Containers.</li>
              <li>Example: Identifying a potential privilege escalation path via a vulnerable sidecar container.</li>
            </ul>
            </li>
             <li>Automated Investigation (SOAR-like capabilities):
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>AI-driven Root Cause Analysis (RCA) helps prioritize incidents.</li>
              <li>Example: Auto-generating a timeline of events leading to a crypto-mining attack.</li>
            </ul>
            </li>
          </ul>
        </>
      ],
    },
      {
      title: "Compliance Automation Platforms for Kubernetes",
      items: [
        <>
         <p className="ml-2">Compliance automation ensures Kubernetes environments adhere to CIS Benchmarks, GDPR, HIPAA, PCI-DSS, and NIST SP 800-190.
ViXa platform Compliance Automation Platforms</p>
          <ul className="ml-4 list-disc list-inside text-lg">
            <li>Continuous Compliance Scanning:
               <ul className="ml-6 list-disc list-inside text-lg">
              <li>Scans Kubernetes clusters against CIS Kubernetes Benchmark, NSA hardening guides.</li>
            </ul>
            </li>
            
            <li>Policy-as-Code (PaC):
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Open Policy Agent (OPA), Kyverno, AWS/Azure Policy to enforce compliance rules.</li>
              <li>Example: Blocking deployments with privileged: true.</li>
            </ul>
            </li>

             <li>Drift Detection & Remediation:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Detects configuration drifts (e.g., a namespace suddenly allowing hostPath mounts).</li>
              <li>Auto-remediates via GitOps (e.g., Argo CD syncs to desired state).</li>
            </ul>
            </li>

            <li>Audit Logging & Reporting:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Generates compliance reports for auditors (e.g., SOC 2, ISO 27001).</li>
              <li>Integrates with SIEM/XDR for compliance-related alerts.</li>
            </ul>
            </li>
             <li>Integration with XDR:
              <ul className="ml-6 list-disc list-inside text-lg">
              <li>Correlates compliance violations with security incidents.</li>
              <li>Example: A misconfigured Network Policy leading to a breach.</li>
            </ul>
            </li>
          </ul>
        </>
      ],
    },

    // {
    //   title: "Why do you Need Managed Risk",
    //   items: [
    //     <>
    //       <ul className="ml-4 list-disc list-inside">
    //         <li>Protects assets and reduces losses.</li>
    //         <li>Enhances decision-making and operational efficiency.</li>
    //         <li>Ensures compliance with laws and regulations.</li>
    //         <li>Improves stakeholder confidence.</li>
    //       </ul>
    //     </>
    //   ],
    // },
    // {
    //   title: "Risk Assessment and Identification",
    //   items: [
    //     <>
    //       <ul className="ml-4 list-disc list-inside">
    //         <li><strong>ISO 31000:</strong> International standard for risk management.</li>
    //         <li><strong>COSO ERM:</strong> A model for enterprise risk management.</li>
    //         <li><strong>NIST</strong> Cybersecurity Framework: For managing cyber risks.</li>
    //       </ul>
    //     </>
    //   ],
    // }
  ];

  const heading = 'WHY SHOULD YOU WORK WITH OST INFINITY'
  // const description = ["At OSt Infinity,we are proud to offer our Threat Hunting Service,a proactive and advanced cybersecurity solution designed to
  // safeguard your digital assets againt meering trackSynchronousRequestDataAccessInDev.Our team of skilled analysts utilises cutting-edge techniques 
  // and tools to proactively hunt for threats across your digital infrastructure, providing you with peace of mind knowing that your
  // organisation's security is in capable hands.",
  //   <br key="br1" />,
  // <br key="br2" />,
  
  // "Beyond traditional security measures,out Threat Hunting Service continuously monitors for emerging threat, adapts strategies to evolving attack techniques, and offers personalised threat intelligence reports and recommendatios tailored to your organisation's specific needs."
  // <br key="br1" />,
  // <br key="br2" />,
  // "By parterning with us you gain access to a dedicated team of experts committed to understanding your unique risk landscape and providing proactive measures to mitigate potential threats effectively. Our service operates seamlessly within your existing cybersecurity framework, complementing your current defences and enchancing overall visibility into your digital environment."
  // <br key="br1" />
  // <br key="br2" />
  // "With our comprehensive approach to threat detection and response,we enable you to stay one step ahead of cyber adversaries and maintain the integrity of your critical infrastructure, data, and operations."]


  const description =
  "Ost Infinity offers organisations a proactive and effective approach to cybersecurity, leveraging advanced technologies and expert cybersecurity professionals to protect against evolving cyber threats and ensure security of their digital assets.";

  return (
    <>
      <Head>
        <title>Cybersecurity Operation Centre | Ost Infinity - ViXa Identity First Platform</title>
          <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <main>
        <Header/>
        <PenetratingHeroContent heading={`Extended Detection And Response (XDR)`} desc={`The evolution of cybersecurity by breaking down silos and providing a more proactive, intelligent approach to threat management.`} activeMenu="xdr" illustrationSrc="social.svg" illustrationAlt="VIXA Platforms" />
 
        <PromoBar/>
        <FloatingContact />
          <div id="overview">
        <BriefSection title="Extended Detection And Response (XDR)"/>
         </div>
        {/* <AboutVixa paragraphs={textparagraphs}/> */}
       
        <AboutVixa title={title} paragraphs={paragraphs} />
       
        <div id="how-it-work">
        <ProductNavigation  illustrationSrc={["extended-detection-and-response/xdr-how-works"]} illustrationAlt="Extended detection and response"/>
        </div>
         <AboutVixa title={title} paragraphs={paragraphs} />

          <CardInfo data={cardData} left/>
          <XdrComparation />

          <AboutVixa paragraphs={textparagraphs} />
         {/* <IntegrationsCard heading={heading} desc={description}/>  */}
        
        <OverviewAndStatsSection />
        <ContactForm />
        <Cybersecurity />
        <WelcomeCard />
        <Footer />
      </main>
    </>
  );
}


