'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Mail, Phone } from 'lucide-react'

import LINK_GROUPS from "@/data/footer/link-groups.json"
import SOCIAL_ICONS from "@/data/footer/social-icons.json"
import PAYMENT_METHODS from "@/data/footer/payment-methods.json"

export default function Footer3() {
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  // Split link groups into rows of 4 columns each
  const linkRows = [];
  for (let i = 0; i < LINK_GROUPS.length; i += 4) {
    const rowItems = LINK_GROUPS.slice(i, i + 4);
    // Pad the row with empty items if needed
    while (rowItems.length < 4) {
      rowItems.push({ title: null, links: [] });
    }
    linkRows.push(rowItems);
  }

  return (
    <footer className="bg-gradient-to-tr from-[#0D0F49] to-[#0448AD] py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left Column - Contact Information */}
          <div className="w-full lg:w-80 space-y-6">
            <img
              src="/assets/images/ost-infinity-logo.svg"
              alt="OST INFINITY"
              className="h-8 mb-4"
            />
            
            <div>
              <p className="text-orange-400 font-bold">TOLL FREE NUMBER</p>
              <p className="text-white">+0800 285 19 19</p>
              <a href="mailto:talk@ostinfinity.net" className="flex items-center gap-2 mt-2 text-sm text-white hover:text-orange-400">
                <Mail className="w-4 h-4 text-orange-400" /> talk@ostinfinity.net
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">Germany</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Taunusanlage 9-10<br />60329 Frankfurt am Main<br />Hessen
              </p>
              <a href="tel:+4916095878645" className="flex items-center gap-2 mt-2 text-sm text-white hover:text-orange-400">
                <Phone className="w-4 h-4 text-orange-400" /> +49 160 9587 8645
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">Vietnam</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Saigon Times Square<br />22-36 Nguyen Hue Street<br />Ho Chi Minh City
              </p>
              <a href="tel:+84355883570" className="flex items-center gap-2 mt-2 text-sm text-white hover:text-orange-400">
                <Phone className="w-4 h-4 text-orange-400" /> +84 35 58 83 570
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">Cambodia</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Exchange Square<br />106 Corner St. 61<br />Phnom Penh, KH 12202<br />Phnom Penh
              </p>
            </div>
          </div>

          {/* Right Column - Link Groups */}
          <div className="flex-1">
            <div className="space-y-8">
              {linkRows.map((row, rowIndex) => (
                <div 
                  key={`row-${rowIndex}`}
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                  {row.map((group) => (
                    <div key={group.title}>
                      {group.title && (
                        <h4 className="mb-4 font-semibold text-white">{group.title}</h4>
                      )}
                      <ul className="space-y-2 text-sm text-white/90">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            {link.children ? (
                              <>
                                <button
                                  onClick={() => toggleDropdown(link.label)}
                                  className="hover:underline focus:outline-none text-left w-full"
                                >
                                  {link.label}
                                </button>
                                <div
                                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                >
                                  <ul className="mt-2 ml-4 space-y-1 text-white/70">
                                    {link.children.map((child) => (
                                      <li key={child.href}>
                                        <Link href={child.href} className="hover:underline">
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            ) : (
                              <Link href={link.href} className="hover:underline">
                                {link.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
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
  )
}