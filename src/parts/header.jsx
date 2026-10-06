'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, ChevronDown , ChevronRight } from 'lucide-react'

import AI_SEARCH_DATA from "@/data/ai/ai-search.json";
import { userAgentFromString } from 'next/server'
import { useRouter } from 'next/router';

const LIMIT_RESULT = process.env.LIMIT_RESULT_CONFIG || 4;

const dropdownData = {
  'Why Us': [
    { label: 'About Us', href: '/about-us' },
    { label: 'Mission', href: '/about-us/#mission' },
  ],
  Pricing: [
    { label: 'Subscriptions', href: '/pricing' },
    { label: 'Contact Sales', href: '/contact-us' },
  ],
  Products: [
    { label: 'Threat Detection and Response', href: '/threat-detection' },
    { label: 'Network Monitoring and Observability', href: '/network-monitoring' }
  ],
  // Solutions: [
  //   { label: 'Managed Security Service', href: '/products/managed-security' }
  // ],
  Solutions: [
    {
      label: 'Managed Security Services',
      subItems: [
        { label: 'Cybersecurity Operation Centre', href: '/products/cybersecurity-operation-centre' },
        { label: 'Incident Response', href: '/products/incident-response' },
        { label: 'Managed Risk', href: '/products/managed-risk' },
        { label: 'Vulnerability Management', href: '/products/vulnerability-assessment' },
        { label: 'Penetration Testing', href: '/products/penetration-testing' },
        { label: 'Managed Security Journey', href: '/products/security-journey' },
        { label: 'Threat Hunting', href: '/products/threat-hunting' },
        { label: 'Training Awareness', href: '/products/training-awareness' }
      ]
    }
  ],
  Marketplace: [
    { label: 'Apps', href: '#' },
    { label: 'Integrations', href: '/integrations' },
  ],
  Developers: [
    { label: 'DevSecOps', href: '/products/devsecops' },
    { label: 'SDKs', href: '#' },
  ],
  Partners: [
    { label: 'Find a Partner - Coming Soon', href: '#' }
  ],
  Documentation: [
    { label: 'System Requirments Documentation', href: '/system-requirements' },
    { label: 'Platform Version', href: '#' },
  ],
  Services: [
    { label: 'Managed Security Service', href: '/products/managed-security' },
    { label: 'Support', href: '/support' },
  ],
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

 

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])




  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center py-1 mr-4 text-white"
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute top-full mt-1 bg-[#0D0F49] rounded shadow-lg z-20">
          {/* {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 whitespace-nowrap hover:bg-[#1E1F6A]"
            >
              {item.label}
            </Link>
          ))} */}
           {items.map(item => (
  item.subItems ? (
    <div key={item.label} className="group relative">
      <div className="flex justify-between items-center px-4 py-2 hover:bg-[#1E1F6A] cursor-pointer w-56">
      <span>{item.label}</span>
          <ChevronRight size={16} className="text-white" />
      </div>
      <div className="absolute top-0 left-full ml-1 mt-0 bg-[#0D0F49] rounded shadow-lg hidden group-hover:block z-30">
        {item.subItems.map(sub => (
          <Link
            key={sub.href}
            href={sub.href}
            className="block px-4 py-2 whitespace-nowrap hover:bg-[#1E1F6A]"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={item.href}
      href={item.href}
      className="block px-4 py-2 whitespace-nowrap hover:bg-[#1E1F6A]"
    >
      {item.label}
    </Link>
  )
))}

        </div>
      )}
    </div>
  )
}


export default function Header() {
  const menuItems = Object.keys(dropdownData)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // remove other items if needed
    setIsLoggedIn(false);
   const prev = sessionStorage.getItem('previousPage');
   router.reload();
    // if( router.back() = '/checkout'){
    //   router.push('/pricing')
    // }
    // router.back(); // or use router.push('/')
  };
 


  const handleSearch = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim() === '') {
      setSearchResults([])
    } else {
      const filtered = AI_SEARCH_DATA.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase())
      )
      setSearchResults(filtered)
    }
  }

   

  useEffect(() => {
    const token = localStorage.getItem('token'); // or your auth key
    setIsLoggedIn(!!token);
  }, []);

  return (
    <section className="w-full text-[12px]">
      <div className="bg-[linear-gradient(90deg,_#F98D11_0%,_#0448AD_50%,_#12145E_100%)]">
        <div className="container flex items-center justify-between h-10 px-6 mx-auto md:px-16">
          <Link href="/">
            <Image
              src="/assets/images/ost-infinity-logo-white.png"
              alt="OST Infinity"
              width={100}
              height={24}
            />
          </Link>
          <div className="relative flex items-center">
            <div className="relative flex items-center space-x-7 mr-15">
              <div className="flex items-center px-3 py-1 rounded-full bg-[#1C387E] relative">
                <Image
                  src="/assets/images/icons/ai-search-icon.png"
                  alt="AI Search icon"
                  width={14}
                  height={14}
                  className="mr-3"
                />
                <input
                  type="text"
                  placeholder="AI Search"
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                  className="bg-transparent border-none outline-none text-white placeholder-white w-[60px] hover:w-[180px] focus:w-[180px] active:w-[180px] transition-all duration-300 ease-in-out"
                />
                {isFocused && searchResults.length > 0 && (
                  <div className="absolute top-8 left-0 mt-1 w-[460px] bg-white/50 text-black rounded-xl shadow-lg z-50 p-2 backdrop-blur-sm">
                    {searchResults.slice(0, LIMIT_RESULT).map(item => (
                      <Link key={item.id} href=''>
                        <div className="p-2 cursor-pointer rounded-xl hover:bg-white/30">
                          {item.text}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact-us" className="text-white hover:underline">Contact Us</Link>
              <Link href="tel:+4916095878645" className="text-white hover:underline">Toll Free: (+0800 285 19 19)</Link>
            </div>
            <div className="flex items-center space-x-7">
              <Link href="/careers" className="hover:underline">Careers</Link>
              <Link href="/careers" className="hover:underline">Open Positions</Link>
              <div className="flex items-center space-x-0.5">
                <Globe size={12} />
                <Link href="#" className="hover:underline">EN</Link>
                <ChevronDown size={12} />
              </div>
              <Link href="#" className="hover:underline">Console</Link>
               {isLoggedIn ? (
                  <Link href="#" onClick={handleLogout} className="hover:underline">Log Out</Link>
                ) : (
                 <Link href="/auth/login" className="hover:underline">Log In</Link>
                )}
              </div>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)]">
        <div className="container flex items-center justify-between h-10 px-6 mx-auto md:px-16">
          <div className="flex space-x-4">
            {menuItems.map(label => (
              <NavDropdown
                key={label}
                label={label}
                items={dropdownData[label]}
              />
            ))}
          </div>
          <div className="flex">
            <Link
              href="/contact-us"
              className="px-4 py-3 bg-[#F98D11] text-white font-medium hover:opacity-90"
            >
              Request Demo
            </Link>
            <Link
              href="/contact-us"
              className="px-4 py-3 bg-[#199AE2] text-white font-medium hover:opacity-90"
            >
              Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
