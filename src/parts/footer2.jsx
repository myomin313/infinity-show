import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Link from "next/link"
import SOCIAL_ICONS from "@/data/footer/social-icons.json"
import LINK_GROUPS from "@/data/footer/link-groups.json"
import PAYMENT_METHODS from "@/data/footer/payment-methods.json"

const footerLinks = [
  { title: 'About', links: ['About ViXa Platform', 'Pricing Models', 'Products', 'Customers', 'Partners', 'Case Studies'] },
  { title: 'Promotions', links: ['Free Trial', 'Discount'] },
  { title: 'Explore', links: ['Licence', 'Getting Started', 'Blog', 'Onboarding', 'Tutorials', 'Training & Certification'] },
  { title: 'Support', links: ['Sales Account Manager', 'Submit a Ticket', 'After-Sales Support', 'Security Report', 'Feedback', 'Pricing Calculator', 'Support Structure'] },
  { title: 'Resources', links: ['Documentation Centre', 'Security & Compliance', 'Press Room', 'Site Map', 'Status'] },
  { title: 'Products', links: ['Ost Infinity Applications', 'Managed Threat Detection And Response', 'Network Performance Monitoring & Observability'] },
  { title: 'Solutions', links: ['Managed Security Services (MSS)', 'Cybersecurity Operation Centre', 'Incident Response', 'Managed Risk', 'Vulnerability Management', 'Penetration Testing', 'Managed Security Journey', 'Threat Hunting', 'Cyber Security Posture Management', 'DevSecOps'] },
  { title: 'Recommended', links: ['Topic Centre', 'Industries', 'Developers', 'Tutorials'] },
  { title: 'Legal & Safety', links: ['Privacy Policy', 'Terms Of Use', 'Report Vulnerabilities'] },
];

export default function Footer2() {
  return (
 <footer className="bg-gradient-to-tr from-[#0D0F49] to-[#0448AD] text-white py-16 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-12">

      {/* Left Column */}
      <div className="w-full lg:w-64 space-y-6">
        <img src="/assets/images/ost-infinity-logo.svg" alt="OST INFINITY" className="h-8" />

        <div className='mt-10'>
          <p className="text-orange-400 font-bold">TOLL FREE NUMBER</p>
          <p className="mt-1">+0800 285 19 19</p>
          <a href="mailto:talk@ostinfinity.net" className="flex items-center gap-2 mt-2 text-sm hover:text-orange-400">
          <Mail className="w-4 h-4 text-orange-400" />
            talk@ostinfinity.net
          </a>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Germany</p>
            <p>Taunusanlage 9-10<br />60329 Frankfurt am Main<br />Hessen</p>
            <a href="tel:+4916095878645" className="flex items-center gap-2 mt-2 hover:text-orange-400">
              <Phone className="w-4 h-4 text-orange-400" /> +49 160 9587 8645
            </a>
          </div>

          <div>
            <p className="font-semibold">Vietnam</p>
            <p>Saigon Times Square<br />22-36 Nguyen Hue Street<br />Ho Chi Minh City</p>
            <a href="tel:+84355883570" className="flex items-center gap-2 mt-2 hover:text-orange-400">
             <Phone className="w-4 h-4 text-orange-400" /> +84 35 58 83 570
            </a>
          </div>

          <div>
            <p className="font-semibold">Cambodia</p>
            <p>Exchange Square<br />106 Corner St. 61<br />Phnom Penh, KH 12202</p>
          </div>
        </div>
      </div>

      <div>
          <h4 className="mb-3 font-semibold">About</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-15">
              <li><Link href="/about-us" className="hover:underline">About ViXa Platform</Link></li>
              <li><Link href="/pricing" className="hover:underline">Pricing Models</Link></li>
              <li><Link href="" className="hover:underline">Products</Link></li>
              <li><Link href="" className="hover:underline">Customer</Link></li>
              <li><Link href="" className="hover:underline">Partners</Link></li>
              <li><Link href="" className="hover:underline">Case Studies</Link></li>
            </ul>
           <h4 className="mb-3 font-semibold">Resources</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-5">
              <li><Link href="/documentation-centre" className="hover:underline">Documentation Centre</Link></li>
              <li><Link href="/security-compliance" className="hover:underline">Security & Compliance</Link></li>
              <li><Link href="/press-room" className="hover:underline">Press Room</Link></li>
              <li><Link href="/site-map" className="hover:underline">Site Map</Link></li>
              <li><Link href="/status" className="hover:underline">Status</Link></li>
            </ul>
            <h4 className="mb-3 font-semibold">Legal & Safety</h4>
            <ul className="space-y-1 text-white/90 text-sm">
              <li><Link href="/privacy-policy" className="hover:underline">Privacy & Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms Of Use</Link></li>
              <li><Link href="#" className="hover:underline">Report Vulnerabilities</Link></li>
            </ul>
          </div>
      <div>
           <h4 className="mb-3 font-semibold">Promotions</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-40">
              <li><Link href="/contact-us" className="hover:underline">Free Trial</Link></li>
              <li><Link href="#" className="hover:underline">Discount</Link></li>
            </ul>
           <h4 className="mb-3 font-semibold">Products</h4>
            <ul className="space-y-1 text-white/90 text-sm">
              <li>Ost Infinity Application</li>
               <ul className='ml-3'>
                  <li><Link href="#" className="hover:underline">Managed Threat Detection <br></br> And Response</Link></li>
                  <li><Link href="#" className="hover:underline">Network Performance <br></br> Monitoring & Observability </Link></li>
                  
               </ul>
            </ul>
      </div>


        <div>
           <h4 className="mb-3 font-semibold">Explore</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-15">
              <li><Link href="" className="hover:underline">License</Link></li>
              <li><Link href="" className="hover:underline">getting Started</Link></li>
              <li><Link href="" className="hover:underline">Blog</Link></li>
              <li><Link href="" className="hover:underline">Onboading</Link></li>
              <li><Link href="" className="hover:underline">Tutorial</Link></li>
              <li><Link href="" className="hover:underline">Training & Certification</Link></li>
            </ul>
           <h4 className="mb-3 font-semibold mt-10">Solutions</h4>
            <ul className="space-y-1 text-white/90 text-sm">
              <li>Managed Security Services (MSS)</li>
               <ul className='ml-3'>
                  <li><Link href="/products/cybersecurity-operation-centre" className="hover:underline">Cybersecurity Operation Centre</Link></li>
                  <li><Link href="/products/incident-response" className="hover:underline">Incident Response </Link></li>
                  <li><Link href="/products/managed-risk" className="hover:underline">Managed Risk</Link></li>
                  <li><Link href="/products/vulnerability-assessment" className="hover:underline">Vulnerability Management</Link></li>
                  <li><Link href="/products/penetration-testing" className="hover:underline">Penetration Testing</Link></li>
                  <li><Link href="/products/security-journey" className="hover:underline">Managed Security Journey</Link></li>
                  <li><Link href="/products/threat-hunting" className="hover:underline">Threat Hunting</Link></li>
                  <li><Link href="/products/threat-hunting" className="hover:underline">Cyber Security Posture <br></br> Management</Link></li>
               </ul>
               <li><Link href="/products/devsecops" className="hover:underline">DevSecOps</Link></li>
            </ul>
      </div>

      <div>
           <h4 className="mb-3 font-semibold">Support</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-10">
              <li><Link href="" className="hover:underline">Sale Account Manager</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Submit A Ticket</Link></li>
              <li><Link href="/contact-us" className="hover:underline">After-Sale Support</Link></li>
              <li><Link href="" className="hover:underline">Security Support</Link></li>
              <li><Link href="" className="hover:underline">Feedback</Link></li>
              <li><Link href="" className="hover:underline">Pricing Calculator</Link></li>
              <li><Link href="/support" className="hover:underline">Support Structure</Link></li>
            </ul>
           <h4 className="mb-3 font-semibold mt-2">Recommended</h4>
            <ul className="space-y-1 text-white/90 text-sm mb-10">
              <li>Ost Infinity Application</li>
               <ul className='ml-3'>
                  <li><Link href="" className="hover:underline">Managed Threat Detection <br></br> And Response</Link></li>
                  <li><Link href="" className="hover:underline">Network Performance <br></br> Monitoring & Observability </Link></li>
                  
               </ul>
            </ul>
      </div>


      {/* Right Multi-Column Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
        {[
          { title: 'About', links: ['About ViXa Platform', 'Pricing Models', 'Products', 'Customers', 'Partners', 'Case Studies'] },
          { title: 'Promotions', links: ['Free Trial', 'Discount'] },
          { title: 'Explore', links: ['Licence', 'Getting Started', 'Blog', 'Onboarding', 'Tutorials', 'Training & Certification'] },
          { title: 'Support', links: ['Sales Account Manager', 'Submit a Ticket', 'After-Sales Support', 'Security Report', 'Feedback', 'Pricing Calculator', 'Support Structure'] },
          { title: 'Resources', links: ['Documentation Centre', 'Security & Compliance', 'Press Room', 'Site Map', 'Status'] },
          { title: 'Products', links: ['Ost Infinity Applications', 'Managed Threat Detection And Response', 'Network Performance', 'Monitoring & Observability'] },
          { title: 'Solutions', links: ['Managed Security Services (MSS)', 'Cybersecurity Operation Centre', 'Incident Response', 'Managed Risk', 'Vulnerability Management', 'Penetration Testing', 'Managed Security Journey', 'Threat Hunting', 'Cyber Security Posture Management', 'DevSecOps'] },
          { title: 'Recommended', links: ['Topic Centre', 'Industries', 'Developers', 'Tutorials'] },
          { title: 'Legal & Safety', links: ['Privacy Policy', 'Terms Of Use', 'Report Vulnerabilities'] },
        ].map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 font-semibold">{group.title}</h4>
            <ul className="space-y-1 text-white/90 text-sm">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    {/* Bottom Row */}
    {/* <div className="mt-12 pt-8 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center gap-6">
      <div className="flex gap-4">
        <a href="#"><img src="/icons/linkedin.svg" className="w-5 h-5" alt="LinkedIn" /></a>
        <a href="#"><img src="/icons/tiktok.svg" className="w-5 h-5" alt="TikTok" /></a>
        <a href="#"><img src="/icons/youtube.svg" className="w-5 h-5" alt="YouTube" /></a>
        <a href="#"><img src="/icons/facebook.svg" className="w-5 h-5" alt="Facebook" /></a>
      </div>
      <div>
        <h4 className="text-sm mb-2 font-semibold text-center lg:text-left">Payment Methods We Support</h4>
        <div className="flex gap-3">
          <img src="/payments/visa.svg" className="h-6" alt="Visa" />
          <img src="/payments/mastercard.svg" className="h-6" alt="Mastercard" />
          <img src="/payments/amex.svg" className="h-6" alt="Amex" />
          <img src="/payments/alipay.svg" className="h-6" alt="Alipay" />
          <img src="/payments/wechat.svg" className="h-6" alt="WeChat" />
        </div>
      </div>
    </div> */}
     <div className="grid items-start grid-cols-1 gap-8 pt-12 mt-12 border-t border-white/10 md:grid-cols-2 lg:grid-cols-5">
              <div className="pt-8">
                <img
                  src="/assets/images/ost-infinity-logo.svg"
                  alt="OST INFINITY"
                  className="h-8"
                />
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Find Us</h4>
                <div className="flex space-x-4">
                  {SOCIAL_ICONS.map((icon) => (
                    <a
                      key={icon.name}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:opacity-100 opacity-70"
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div></div>
              <div>
                <h4 className="mb-4 font-semibold text-white">
                  Payment Methods We Support
                </h4>
                <div className="flex items-center space-x-3">
                  {PAYMENT_METHODS.map((method) => (
                    <img
                      key={method.name}
                      src={method.src}
                      alt={method.name}
                      className={`w-auto h-${method.height}`}
                    />
                  ))}
                </div>
              </div>
            </div>
  </div>
</footer>
  );
}
