'use client'

export default function SystemRequirementsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#530570] via-[#0e2478] to-[#003d62]">
      <div className="container px-6 mx-auto md:px-16">
        <div className="w-full p-10 text-black bg-white border border-blue-200 rounded-lg shadow-md">
          <h2 className="mb-6 text-4xl font-bold">System Requirements</h2>

          <h3 className="mb-4 text-lg font-semibold">
            ViXa Identity-First Platforms system requirements
          </h3>

          <p className="mb-4 text-sm">
            This topic applies to all Ost Infinity ViXa Identity-First Platforms (self-hosted) products.
            Requirements depend on various variables, such as:
          </p>

          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>
              Ost Infinity ViXa Identity-First Platforms deployment in the cloud vs on premises.
            </li>
            <li>
              Size of the environment to be monitored. This topic provides requirements for small, medium,
              large and extra large deployments, based on the number of monitored elements, such as nodes,
              interfaces, or component monitors, based on your Subscription. See Subscription model for Ost
              Infinity Identity-First Observability Self-Hosted.
            </li>
            <li>
              Review your product Administrator Guides and release notes for the exact product requirements
              beyond these minimums.
            </li>
            <li>
              Ost Infinity Identity-First recommends reviewing the latest Ost Infinity Identity-First
              Platforms Release Notes.
            </li>
            <li>
              Ost Infinity Identity-First does not provide a comprehensive list of all supported devices. If
              your device supports standard SNMP MIB2, it can be monitored with the Ost Infinity
              Identity-First Platforms. See Supported vendors and devices.
            </li>
          </ul>
          <div className="mt-10">
            <h4 className="mb-2 text-base font-semibold">
                What requirements are you looking for?
            </h4>
            <ul className="space-y-2 text-sm list-disc list-inside">
                <li>
                Requirements for supported cloud solutions:
                <ul className="mt-1 ml-6 space-y-1 list-disc list-inside">
                    <li>Amazon Web Service</li>
                    <li>Microsoft Azure</li>
                </ul>
                </li>
                <li>
                On-premises deployment requirements overview:
                <ul className="mt-1 ml-6 space-y-1 list-disc list-inside">
                    <li>Server hardware details</li>
                    <li>Server software details</li>
                    <li>Database server details</li>
                    <li>Ports to open</li>
                    <li>Ost Infinity Identity-First Platforms Web Console browser requirements</li>
                </ul>
                </li>
            </ul>
          </div>
            <div className="mt-16 overflow-x-auto">
            <h4 className="mb-4 text-xl font-semibold">Amazon Web Service</h4>
            <table className="min-w-full text-sm border border-gray-300">
                <thead className="text-left bg-gray-100">
                <tr>
                    <th className="p-3 font-bold border border-gray-300">Requirements</th>
                    <th className="p-3 font-bold border border-gray-300">Small<br />(up to 500 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">Medium<br />(501–2,000 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">Large<br />(more than 2,000 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">XL<br />(up to 1,000,000 elements)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="p-3 border border-gray-300">Ost Infinity Identity-First Platforms server</td>
                    <td className="p-3 border border-gray-300">m4.xlarge</td>
                    <td className="p-3 border border-gray-300">m4.2xlarge</td>
                    <td className="p-3 border border-gray-300">m5.2xlarge</td>
                    <td className="p-3 border border-gray-300">m5.4xlarge</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">
                    Ost Infinity Identity-First Platforms database using Azure SQL DB
                    </td>
                    <td colSpan={4} className="p-3 border border-gray-300">
                    All installed products must run on ViXa Identity-First Platforms 2019.2 or later.<br />
                    Time zone setting of the server must be the same as Azure SQL DB time zone (UTC).
                    </td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300"> </td>
                    <td className="p-3 border border-gray-300">
                    DTU Standard Tier S3 or better<br />
                    vCore General Purpose Tier 2 or better
                    </td>
                    <td className="p-3 border border-gray-300">
                    DTU Standard Tier S3 or better<br />
                    vCore General Purpose Tier 2 or better
                    </td>
                    <td className="p-3 border border-gray-300">
                    DTU Standard Tier S4 or better<br />
                    vCore General Purpose Tier 2 or better
                    </td>
                    <td className="p-3 border border-gray-300">
                    DTU P15<br />
                    vCore Hyper-Scale 40 vCPU
                    </td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">
                    Ost Infinity Identity-First Platforms database using Azure SQL Database managed instance
                    </td>
                    <td className="p-3 border border-gray-300">Gen5<br />4 vCores</td>
                    <td className="p-3 border border-gray-300">Gen5<br />8 vCores</td>
                    <td className="p-3 border border-gray-300">Gen5<br />16 vCores</td>
                    <td className="p-3 border border-gray-300">Gen5<br />40 vCores</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">
                    Ost Infinity Identity-First Platforms database deployed in an Azure VM
                    </td>
                    <td className="p-3 border border-gray-300">A4_v2</td>
                    <td className="p-3 border border-gray-300">DS4_v2 Standard</td>
                    <td className="p-3 border border-gray-300">E8s_v3</td>
                    <td className="p-3 border border-gray-300">E64as_v4<br />IOPS 30,000+</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Additional Polling Engine</td>
                    <td colSpan={2} className="p-3 border border-gray-300">
                    Only relevant for environments that monitor over 12,000 elements at default polling intervals.
                    </td>
                    <td className="p-3 border border-gray-300">D4s_v3</td>
                    <td className="p-3 border border-gray-300">D4s_v3</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Additional Web Server</td>
                    <td colSpan={2} className="p-3 border border-gray-300">
                    Less than 50 concurrent users: DS12_v2<br />
                    More than 50 concurrent users: DS4_v2 or larger
                    </td>
                    <td colSpan={2} className="p-3 border border-gray-300">DS4_v2 or larger</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="mt-16 text-sm">
                <h4 className="mb-4 text-xl font-semibold">On premises</h4>

                <p className="mb-3">
                    To deploy a single Ost Infinity Identity-First Platforms product locally, on a server, review the following recommendations.
                </p>

                <p className="mb-3">
                    The minimum/recommended requirements are based on the most common element distribution
                    (nodes, volumes, and interfaces) and polling technology used (ICMP/SNMPv2).
                </p>

                <p>
                    Using other polling methods (Ost Infinity Identity-First Platforms Agent, WMI, or SNMPv3) with authentication or
                    more complex element types (applications, firewalls, load balancers, or wireless controllers) will increase hardware
                    requirements for the server.
                </p>
            </div>
            <div className="mt-16 overflow-x-auto">
            <h4 className="mb-4 text-xl font-semibold">Ost Infinity Identity-First Observability Self-Hosted</h4>

            <p className="mb-6 text-sm font-medium">Minimum / Recommended</p>

            <table className="min-w-full text-sm border border-gray-300">
                <thead className="text-left bg-gray-100">
                <tr>
                    <th className="p-3 font-bold border border-gray-300">Requirements</th>
                    <th className="p-3 font-bold border border-gray-300">Small<br />(up to 500 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">Medium<br />(501–2,000 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">Large<br />(more than 2,000 elements)</th>
                    <th className="p-3 font-bold border border-gray-300">XL<br />(up to 1,000,000 elements)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="p-3 border border-gray-300">Server Hardware</td>
                    <td className="p-3 border border-gray-300">CPU: 4 Cores / 8 Cores<br />RAM: 16 GB / 32 GB</td>
                    <td className="p-3 border border-gray-300">CPU: 4 Cores / 8 Cores<br />RAM: 16 GB / 32 GB</td>
                    <td className="p-3 border border-gray-300">CPU: 8 Cores / 12 Cores<br />RAM: 32 GB / 64 GB</td>
                    <td className="p-3 border border-gray-300">CPU: 8 Cores / 12 Cores<br />RAM: 32 GB / 64 GB</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Server Software</td>
                    <td colSpan={4} className="p-3 border border-gray-300">
                    Windows Server 2025, 2022, 2019, 2016<br />
                    <em>Desktop OS only for evaluations; NOT recommended for production environments</em><br />
                    FIPS-compliant OS, STIG-compliant OS, Device Guard-compliant OS
                    </td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Database Server</td>
                    <td colSpan={4} className="p-3 space-y-2 border border-gray-300">
                    <p className="mb-2">
                        <strong>Production environment requirements:</strong><br />
                        In production environments, the server and database must be deployed on separate machines.
                        If using virtual machine, database must be on a different physical drive.
                    </p>
                    <p>
                        <strong>Recommended:</strong><br />
                        For XL environments, use SQL Server Enterprise 2019 CU4+ on Windows Server 2019.
                    </p>
                    <p>
                        <strong>Supported:</strong><br />
                        SQL Server 2016 SP1 and later
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
                        <div>
                        <p className="font-semibold">Quad core</p>
                        <p>8 GB / 16 GB RAM<br />20 GB / 40 GB HD</p>
                        </div>
                        <div>
                        <p className="font-semibold">Dual quad core</p>
                        <p>16 GB / 64 GB RAM<br />50 GB / 100 GB HD</p>
                        </div>
                        <div>
                        <p className="font-semibold">Dual quad core+</p>
                        <p>64 GB / 128 GB RAM<br />100 GB / 400 GB HD</p>
                        </div>
                        <div>
                        <p className="font-semibold">High performance</p>
                        <p>
                            CPUs with 32,000+ PassMark<br />
                            256 GB RAM / 512 GB RAM<br />
                            2 TB HD<br />
                            IOPS: 30,000 / 190,000<br />
                            SSD strongly recommended
                        </p>
                        </div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Additional Polling Engines</td>
                    <td colSpan={2} className="p-3 border border-gray-300">
                    CPU: 4 Cores / 8 Cores<br />
                    RAM: 16 GB / 32 GB<br />
                    Windows Server 2025, 2022, 2019, 2016
                    </td>
                    <td colSpan={2} className="p-3 border border-gray-300">
                    CPU: 8 Cores / 12 Cores<br />
                    RAM: 32 GB / 64 GB
                    </td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-300">Additional Web Server</td>
                    <td colSpan={4} className="p-3 border border-gray-300">
                    Relevant for environments near 50 concurrent users.<br />
                    8-core CPU or better, 16 GB RAM, 60 GB HD<br />
                    Windows Server 2025, 2022, 2019, 2016<br />
                    <em>Requirements depend on the number of concurrent users. If multiple users are logged in at the same time, the more RAM, HD space, and cores you need.</em>
                    </td>
                </tr>
                <tr>
                <td className="p-3 border border-gray-300">Ports to open</td>
                <td colSpan={4} className="p-3 text-sm border border-gray-300">
                    <strong>Outbound:</strong> 22, 25, 465, 587, 1433, 1434<br />
                    <strong>Inbound:</strong> 80, 162, 443, 514, 17778<br />
                    <strong>Bi-directional:</strong> 53, 135, 161, 5671, 17777
                </td>
                </tr>

                <tr>
                <td className="p-3 border border-gray-300">Account privileges</td>
                <td colSpan={4} className="p-3 space-y-2 text-sm border border-gray-300">
                    <p>
                    Ost Infinity Identity-First recommends that administrators have local administrator privileges on the
                    server to ensure full functionality of local tools.
                    </p>
                    <p>
                    Web Console user accounts do not require local administrator privileges.
                    </p>
                    <p>
                    Users running Configuration wizard must have DBO specified as the default DB schema. All services run
                    under LocalSystem to protect certificates and credentials from shared lower-privilege accounts.
                    </p>
                </td>
                </tr>

                <tr>
                <td className="p-3 border border-gray-300">Latency</td>
                <td colSpan={4} className="p-3 text-sm border border-gray-300">
                    The latency (RTT) between the engine and database server should be below 200 ms.
                    Latency may begin to degrade at 100 ms depending on deployment size and utilization.
                    Higher latency will affect large deployments more significantly.
                    <br />
                    <br />
                    Use ping to the SQL Server to verify latency and ensure stable connections.
                </td>
                </tr>

                <tr>
                <td className="p-3 border border-gray-300">Other</td>
                <td colSpan={4} className="p-3 text-sm border border-gray-300">
                    Localization constraints: German and Japanese only for self-hosted environments.<br />
                    Supported systems: NPM, NTA, LA, NCM, SAM, and VMAN<br />
                    Calendar constraints: Gregorian calendar only
                </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
      </div>
    </section>
  )
}
