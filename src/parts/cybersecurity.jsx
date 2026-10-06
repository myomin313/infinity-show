import Link from 'next/link'
import React from "react"

export default function Cybersecurity() {
  return (
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full mb-8 lg:w-1/3 lg:mb-0">
          <h2 className="text-3xl font-bold leading-tight">
            Meet Complex Cybersecurity Management and Regulations with ViXa Platform
          </h2>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-12">
          <p className="mb-8 text-lg">
            Companies need to ensure the confidentiality, integrity, and accessibility of all their critical systems
            and data at all times. A security partner such as Ost Infinity can help you keep valuable customer and
            financial data away from the hands of cyber criminals, as well as ensure business continuity. We also
            assist you in navigating various laws and regulations regarding data protection, such as GDPR, so that
            you remain compliant.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
                href="/download"
                target='_blank'
                className="px-6 py-4 bg-orange-500 rounded-lg hover:bg-orange-600"
                >
              Get a 30-Day Free Trial  
              {/* redirect to download page and get download file apps */}
            </Link>
            <Link
                href="/system-requirements"
                className="px-6 py-4 text-black bg-white border border-white rounded-lg hover:bg-white/90"
                >
              System Requirements
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
