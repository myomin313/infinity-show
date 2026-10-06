'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function JobsSection() {
  return (
    <section className="px-6 pb-20 text-white pt-50 md:px-20">
      <div className="grid gap-10 mx-auto text-2xl max-w-7xl md:grid-cols-2">
        <div className='-mt-20'>
          <h2 className="mb-6 text-5xl font-bold">Jobs</h2>
          <p>
            We pride ourselves on being a top employer of choice at Ost Infinity. We are always looking for
            passionate and energetic people who are looking to improve the transit experience of our riding
            public and serve and support our communities to planning the future of transit.
          </p>
          <p className="my-10">
            So, if you like resolving complex problems and are thrilled at the prospect of helping for global
            business and international, check out our current job opportunities.
          </p>
          <Link
            href="/careers/open-positions"
            className="block w-full bg-[#F98D11] px-6 py-2 text-white font-medium rounded-md text-center"
            >
            Click to view current openings
          </Link>
        </div>
        <div className="overflow-hidden text-black bg-white">
          <div className="bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] text-white p-6">
            <h3 className="text-3xl font-semibold">Apply here!</h3>
            <p className="my-5 text-xl">View current opportunities with Ost Infinity.</p>
            <div className="flex justify-end mt-2">
                <a
                href="/careers/open-positions"
                className="inline-block my-6 text-sm text-right text-white underline hover:text-blue-200"
                >
                Click Here &gt;
                </a>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <Image
                src="/assets/images/team-photo-bg.png"
                alt="Team working together"
                fill
                className="object-cover rounded-b-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
