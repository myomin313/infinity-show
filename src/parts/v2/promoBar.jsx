import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PromoBar() {
  return (
    <section className="container mx-auto mt-2 mb-10 text-white">
      <div className="flex px-16">
        <Link
          href="#communication"
          className="flex-1 inline-flex justify-between items-center px-6 py-4 bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] font-medium"
        >
          <span>Communication</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="#resources"
          className="flex-1 inline-flex justify-between items-center px-6 py-4 bg-[#F98D11] font-medium"
        >
          <span>Resources</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="#support-tiers"
          className="flex-1 inline-flex justify-between items-center px-6 py-4 bg-[#199AE2] font-medium"
        >
          <span>Support Tiers</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex px-16 py-6 space-x-8 text-base">
        <div className="flex flex-col flex-1 ml-5 space-y-3">
          <Link href="https://t.me/ostinfinity">Telegram (Real-Time Engagement)</Link>
          <Link href="/communication/mattermost">Mattermost (Real-Time Engagement)</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div className="flex flex-col flex-1 ml-5 space-y-3">
          <Link href="#">Documentation</Link>
          <Link href="#">Tutorials (Step-by-step user guidelines)</Link>
          <Link href="#">Webinars and videos</Link>
          <Link href="#">Blogs</Link>
          <Link href="#">FAQs</Link>
        </div>
        <div className="flex flex-col flex-1 ml-5 space-y-3">
          <Link href="#">Support Structure</Link>
        </div>
      </div>
    </section>
  )
}
