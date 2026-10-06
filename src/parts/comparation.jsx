import React from "react";
import Table from '../components/Table';
import CardInfo from '../components/CardInfo';

export default function Comparation() {
  const tableData = {
    title: 'Overview of ost mdr & traditional firewall/av',
    headers: ['Feature', 'Ost Infinity MDR', 'Traditional Firewall/AV'],
    rows: [
        {
          feature: 'Primary Focus',
          concierge: 'Detection + Response',
          standard: 'Prevention',
        },
        {
          feature: 'Threat Detection',
          concierge: 'Unknown/advanced threats (behavioural)',
          standard: 'Known threats (signature-based)',
        },
        {
          feature: 'Response Capability',
          concierge: 'Human-led investigation & remediation',
          standard: 'Automated blocking',
        },
        {
          feature: 'Coverage',
          concierge: 'Endpoints, hybrid cloud, network, identity',
          standard: 'Perimeter & endpoints',
        },
        {
          feature: 'Scalability',
          concierge: 'High (via managed service)',
          standard: 'Limited',
        },
        {
          feature: 'Best For',
          concierge: 'Organizations needing 24/7 monitoring',
          standard: 'Basic security needs',
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
    {
      title: "OST INFINITY CAPABILITY",
      items: [
        <>
          <ul className="ml-4 list-disc list-inside">
            <li>Stopping ransomware before encryption.</li>
            <li>Detecting insider threats or compromised credentials.</li>
            <li>Preventing data exfiltration by advanced persistent threats (APTs).</li>
          </ul>
        </>
      ],
    },
  ];
  
  return (
    <section className="my-10">
      <div className="container px-4 mx-auto md:px-16">
        <h1 className="font-semibold text-[50px] mb-20">Ost Infinity MTDR Compare to traditional firewall/antivirus</h1>
        <div
          className="relative p-0.5 rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(to right, #F98D11, #199AE2)" }}
        >
          <div className="bg-[#111865] p-4 rounded-t-3xl">
            <h3 className="text-xl font-semibold text-center text-white">
              DIFFERENCE BETWEEN A OST INFINITY MTDR & TRADITIONAL FIREWALL / ANTIVIRUS
            </h3>
          </div>

          <div className="bg-[#111865] p-4 rounded-b-3xl">
            <div
              className="flex overflow-hidden font-semibold text-center text-white"
              style={{ background: "linear-gradient(to right, #F98D11, #199AE2)" }}
            >
              <div className="flex-1 p-5">Ost Infinity MTDR</div>
              <div className="flex-1 p-5 border-l border-white/20">
                Traditional Firewall/Antivirus
              </div>
            </div>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              <div>
                <div className="p-4 text-white">
                  <h4 className="mb-2 font-semibold text-white">MDR</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>
                      Detects unknown threats via behavioural analysis (e.g., unusual
                      login attempts, data exfiltration).
                    </li>
                    <li>
                      Correlates events across endpoints, networks, and cloud environments.
                    </li>
                    <li>
                      Provides real-time investigation and remediation (e.g., isolating
                      infected devices).
                    </li>
                  </ul>
                </div>
                <div className="p-4 text-white border-t border-[#2a2a6b]">
                  <h4 className="mb-2 font-semibold text-white">MDR</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>
                      24/7 Concierge & SOC Monitoring: Human analysts investigate and
                      validate threats.
                    </li>
                    <li>
                      Custom Playbooks: Tailored response actions (e.g., killing
                      processes, revoking access).
                    </li>
                    <li>
                      Post-Incident Analysis: Root cause investigation and mitigation
                      guidance.
                    </li>
                  </ul>
                </div>
                <div className="p-4 text-white border-t border-[#2a2a6b]">
                  <h4 className="mb-2 font-semibold text-white">MDR</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>
                      Covers endpoints, networks, cloud, and identity systems.
                    </li>
                    <li>
                      Scales with threat intelligence updates and expert oversight.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:border-l border-[#2a2a6b]">
                <div className="p-4 text-white">
                  <h4 className="mb-2 font-semibold text-white">Traditional Firewall/AV Solutions</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>
                      Preventive: Focuses on blocking known threats using signatures,
                      rules, and basic heuristics.
                    </li>
                    <li>
                      Static Rules: Relies on predefined policies (e.g., allow/deny
                      traffic based on ports/IPs).
                    </li>
                    <li>
                      Signature-Based Detection: AV scans for known malware patterns but
                      struggles with zero-day threats.
                    </li>
                  </ul>
                </div>
                <div className="p-4 text-white border-t border-[#2a2a6b]">
                  <h4 className="mb-2 font-semibold text-white">Firewall/AV</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>
                      Automated blocking based on rules but lacks human-led response.
                    </li>
                    <li>
                      No context for alerts, leading to false positives/negatives.
                    </li>
                  </ul>
                </div>
                <div className="p-4 text-white border-t border-[#2a2a6b]">
                  <h4 className="mb-2 font-semibold text-white">Firewall/AV</h4>
                  <ul className="list-disc space-y-0.5 text-sm text-white/90 leading-tight pl-4">
                    <li>Limited to perimeter defense and endpoint scanning.</li>
                    <li>Struggles with cloud, IoT, and hybrid environments.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table data={tableData} />
      <CardInfo data={cardData}/>
    </section>
  );
}
