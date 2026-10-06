'use client'

import React, { useState,useRef,useEffect } from 'react'
import Link from 'next/link'
import { Search, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function LoginProduction() {
      const [searchQuery, setSearchQuery] = useState('')
      const [scrollPosition, setScrollPosition] = useState(0);
      const [showLeftArrow, setShowLeftArrow] = useState(false);
      const [showRightArrow, setShowRightArrow] = useState(true);
      const scrollContainerRef = useRef(null);
    const tabs = [
    { label: 'Select Product', href: '#', active: true },
    { label: 'Penetration Testing', href: '/products/penetration-testing' },
    { label: 'Managed Risk', href: '/products/managed-risk' },
    { label: 'Managed Security Journey', href: '/products/managed-security' },
    { label: 'Incident Response', href: '/products/incident-response' },
    { label: 'DevSecOps', href: '/products/devsecops' },
    { label: 'Vulnerability Management', href: '/products/vulnerability-assessment' },
    { label: 'SOC', href: '/products/cybersecurity-operation-centre' },
    { label: 'Threat Hunting', href: '/products/threat-hunting' }
  ]
 const filteredTabs = tabs.filter(tab =>
    tab.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleScroll = (direction) => {
      const container = scrollContainerRef.current;
      const scrollAmount = 300; // Adjust scroll distance as needed
      
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    };
  
    const checkScrollPosition = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      setScrollPosition(container.scrollLeft);
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    };
  
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', checkScrollPosition);
        // Initial check
        checkScrollPosition();
      }
      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollPosition);
        }
      };
    }, [filteredTabs]);

  
  return (
    <>
    <section className='bg-[#12145E]'>
      {/* <div className="relative w-full md:w-1/3"> */}
       <div className="relative">
        <div className="absolute inset-0  z-0" />
        <div className="container relative py-15 z-10 px-6 mx-auto md:px-16">
          <div className="flex items-center">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button 
                onClick={() => handleScroll('left')}
                className="p-2 mr-2 text-white hover:bg-white/10 rounded-full transition z-10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="flex-1 relative overflow-hidden">
              <ul 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scroll-smooth hide-scrollbar py-1"
              >
                {filteredTabs.length > 0 ? (
                  filteredTabs.map(tab => (
                    <li key={tab.label} className="flex-shrink-0">
                      <Link
                        href={tab.href}
                        className={`block px-4 py-3 text-[13px] whitespace-nowrap transition-all
                          ${tab.active
                            ? 'px-8 bg-blue-500 text-white'
                            : 'text-white hover:bg-white/10'}`}
                      >
                        {tab.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-white flex-shrink-0">No results found</li>
                )}
              </ul>
              
              {/* Gradient fade effect */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0448AD] to-transparent pointer-events-none" />
            </div>

            {/* Right Arrow */}
            {showRightArrow && filteredTabs.length > 0 && (
              <button 
                onClick={() => handleScroll('right')}
                className="p-2 ml-2 text-white hover:bg-white/10 rounded-full transition z-10"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    <div className="px-4 py-15 bg-[#12145E]">
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center m-auto">
        <Link
            href="/download"
            target='_blank'
            className="px-40 py-6 bg-[#F98D11] rounded-lg"
        >
            FAQs
        </Link>
    </div>
</div>
</section>
    </>
  )
}
