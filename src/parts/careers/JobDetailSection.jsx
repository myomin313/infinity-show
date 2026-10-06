'use client'

import React from 'react'

export default function JobDetailSection() {
  return (
    <section className="relative z-10 px-6 pt-0 pb-16 text-white md:px-20">
      <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="bg-gradient-to-r from-[#12145E] to-[#0448AD] p-6 rounded-md shadow-lg max-w-100 -mt-[300px]">
            <h2 className="text-2xl font-semibold text-white">
              Secure Access Expert - <br />IAM, PAM, PKI
            </h2>
            <p className="mt-4 mb-6 text-sm text-white/80">Information Technology</p>
            <a href='/careers/application-form' className="mt-4 px-6 py-2 text-sm font-medium text-white bg-[#F98D11] hover:opacity-90 rounded-sm">
              Apply Now &gt;&gt;
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold mt-50">What you'll do</h3>
            <p className="mb-4 text-white/90">
              As a Secure Access Expert (IAM, PAM, PKI), you are responsible for protecting identities and
              helping to ensure the secure use of our infrastructure. You represent your specialist area and
              are keen to think outside the box and get involved in IT security projects.
            </p>
            <p className="mb-4 text-white/90">
              If you want to work with state-of-the-art technology based on the Microsoft stack, learn a lot
              of new things, develop your experience and work in a company for which security is a unique
              selling point instead of a rare cost center, then apply to us.
            </p>
            <ul className="pl-2 space-y-2 list-disc list-inside text-white/90">
              <li>Creation of a concept for Identity & Access Management and Privileged Access Management</li>
              <li>Support for the PKI and associated HSMs in our cloud environment</li>
              <li>Creation and adaptation of relevant processes and procedures</li>
              <li>Support for applications (planning up to go-live and responsibility for subsequent operations)</li>
              <li>Support with other IT-security-related tasks</li>
              <li>Regular exchange and cooperation with internal IT teams as well as external service providers and partners</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">What you bring</h3>
            <ul className="pl-2 space-y-2 list-disc list-inside text-white/90">
              <li>Proven knowledge in IAM, PAM, PKI especially in the cloud environment</li>
              <li>Hands-on experience in certificate management, cryptography, and secure key storage</li>
              <li>Ability to collaborate with multiple teams</li>
              <li>Experience with Windows Server and Active Directory</li>
              <li>Understanding of security architectures</li>
              <li>Strong written and spoken German and English</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">What we offer</h3>
            <ul className="pl-2 space-y-2 list-disc list-inside text-white/90">
              <li>A flexible work environment that promotes a healthy balance between personal and professional life</li>
              <li>Competitive salary</li>
              <li>Flexible working models such as Working from home flexibility as well as time off models</li>
              <li>In the office: free lunch, water, excellent coffee, and opportunities for outdoor sports activities</li>
              <li>Company pension plan</li>
              <li>Company car or -bike, option to flexible mobility program</li>
              <li>Top Equipment und innovative Tools to foster collaboration</li>
              <li>Additionally: we offer sources for Mental Health Assistance, Employee Assistance Programs, and counseling support.</li>
              <li>Excellent development opportunities</li>
               <p className="mt-5 text-sm text-white/70">#OstInfinity</p>
            </ul>
          </div>
        </div>

        {/* Right: Info Box */}
        <div>
          <div className='bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px] rounded-2xl mt-25'>
            <div className="bg-[#111865] p-6 rounded-xl border border-white/20 space-y-4 ">
              <a href='/careers/application-form' className="w-full px-4 py-2 text-sm font-medium text-white bg-[#F98D11] hover:opacity-90 rounded-sm"  >
                Apply Now &gt;&gt;
              </a>
              <div className="space-y-2 text-lg text-white/90 mt-4">
                <p>
                  <span className="font-semibold text-white">Requisition ID</span><br />
                  410689
                </p>
                <p>
                  <span className="font-semibold text-white">Posted Date</span><br />
                  Apr 16, 2025
                </p>
                <p>
                  <span className="font-semibold text-white">Work Area</span><br />
                  Information Technology
                </p>
                <p>
                  <span className="font-semibold text-white">Career Status</span><br />
                  Professional
                </p>
                <p>
                  <span className="font-semibold text-white">Employment Type</span><br />
                  Regular Full Time
                </p>
                <p>
                  <span className="font-semibold text-white">Expected Travel</span><br />
                  0 - 10%
                </p>
                <p>
                  <span className="font-semibold text-white">Location</span><br />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
