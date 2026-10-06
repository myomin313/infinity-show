import React from "react";
import Table from '../components/Table';
import CardInfo from '../components/CardInfo';

export default function XdrComparation() {
  const tableData = {
    // title: 'Overview of ost mdr & traditional firewall/av',
    headers: ['Feature', 'Benefit',],
    rows: [
        {
          feature: 'Unified Visibility',
          concierge: 'Eliminates silos between endpoint, network, and cloud security.',
        },
        {
          feature: 'Real-Time Detection',
          concierge: 'Cloud-native scalability enables faster threat detection.',
        },
        {
          feature: 'Automated Remediation',
          concierge: 'Reduces Mean Time to Respond (MTTR).',
        },
        {
          feature: 'AI-Driven Analytics',
          concierge: 'Reduces false positives and improves accuracy.',
        },
        {
          feature: 'Unified Visibility',
          concierge: 'DevSecOps Integration',
        },
    ]
  };
  
  const cardData = [
    {
      title: "BENEFITS OF OST INFINITY MTDR",
      items: [
        <>
          <strong>Faster Response Times:</strong>
          <ul className="ml-4 list-disc list-inside">
            <li>Reduces dwell time (time attackers remain undetected).</li>
          </ul>
        </>,
        <>
          <strong>Reduced Workload:</strong>
          <ul className="ml-4 list-disc list-inside">
            <li>Offloads threat monitoring to experts, freeing internal IT teams.</li>
          </ul>
        </>,
        <>
          <strong>Cost Efficiency:</strong>
          <ul className="ml-4 list-disc list-inside">
            <li>Lowers breach-related costs by preventing major incidents.</li>
          </ul>
        </>,
        <>
          <strong>Scalability:</strong>
          <ul className="ml-4 list-disc list-inside">
            <li>Adapts to growing networks and evolving threats.</li>
          </ul>
        </>,
      ],
    },
   
  ];
  
  return (
    <section className="my-10">
      <div className="container px-4 mx-auto md:px-16">
        <h1 className="font-semibold text-[45px] mb-10">Why ViXa Identity-First platform Cloud-Native XDR</h1>
          {/* <Table data={tableData} /> */}
      </div>
      <Table data={tableData} />
      {/* <CardInfo data={cardData}/> */}
    </section>
  );
}
