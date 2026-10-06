'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function CookieConsentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleConsent = (type) => {
    localStorage.setItem('cookieConsent', type)
    setIsVisible(false)
  }

  const toggleSection = (section) => {
    setExpanded(prev => (prev === section ? null : section))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-[#0D0F49] text-white shadow-lg">
      <div className="container px-6 py-4 mx-auto md:px-16">
        {!showCustomize ? (
          <div>
           <h1>We value your privacy</h1>
          <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium md:flex-1 mr-25">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowCustomize(true)}
                className="flex items-center px-6 py-2 text-sm bg-gray-800 border rounded border-white/50 hover:bg-gray-700"
              >
                Customize <ChevronDown size={14} className="ml-1" />
              </button>
              <button
                onClick={() => handleConsent('reject')}
                className="px-6 py-2 text-sm bg-gray-600 rounded hover:bg-gray-500"
              >
                Reject All
              </button>
              <button
                onClick={() => handleConsent('accept')}
                className="px-6 py-2 text-sm font-semibold bg-blue-600 rounded hover:bg-blue-700"
              >
                Accept All
              </button>
            </div>
          </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">Customize Consent Preferences</h2>
              <p className="text-sm">
                We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
              </p>
              <p className="text-sm text-gray-300">
                The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.
              </p>
            </div>

            {/* Necessary */}
            <div className="pt-4 border-t border-white/20">
              <button onClick={() => toggleSection('necessary')} className="flex items-center justify-between w-full font-semibold text-left">
                <span>› Necessary <span className="ml-2 text-green-400">Always Active</span></span>
                {expanded === 'necessary' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expanded === 'necessary' && (
                <p className="mt-2 text-sm text-gray-300">
                  Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences.
                </p>
              )}
            </div>

            {/* Functional */}
            <div>
              <button onClick={() => toggleSection('functional')} className="flex items-center justify-between w-full font-semibold text-left">
                <span>› Functional</span>
                {expanded === 'functional' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expanded === 'functional' && (
                <p className="mt-2 text-sm text-gray-300">
                  Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.
                </p>
              )}
            </div>

            {/* Analytics */}
            <div>
              <button onClick={() => toggleSection('analytics')} className="flex items-center justify-between w-full font-semibold text-left">
                <span>› Analytics</span>
                {expanded === 'analytics' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expanded === 'analytics' && (
                <p className="mt-2 text-sm text-gray-300">
                  Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.
                </p>
              )}
            </div>

            <div className="pt-4 text-right">
              <button
                onClick={() => handleConsent('customized')}
                className="px-6 py-2 text-sm border border-white rounded hover:bg-white hover:text-black"
              >
                Save My Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
