'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const SidebarItem = ({ title, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="mb-2">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center w-full text-sm font-medium text-left text-gray-800 hover:text-blue-600 gap-1"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        <span>{title}</span>
        
      </button>
      {open && <div className="mt-1 pl-4 space-y-1 text-sm text-gray-600">{children}</div>}
    </div>
  )
}

export default function Sidebar() {
  const [securityOpen, setSecurityOpen] = useState(true)
  const [supportOpen, setSupportOpen] = useState(true)
  const [billingOpen, setBillingOpen] = useState(true)
  const [getStartOpen, setGetStartOpen] = useState(true)

  return (
    <aside className="w-full max-w-xs p-4 bg-white border-r min-h-screen">
      <div className="text-sm text-gray-600 space-y-4 ml-14">
        <div className="text-sm text-gray-500 space-x-1">
          <span className="font-medium bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Ost Infinity</span>
          <span>&gt;</span>
          <span>Account administrator</span>
        </div>

        <div>
          {/* <p className="font-semibold text-gray-900">Get Start</p>   */}

          <button 
            onClick={() => setGetStartOpen(!securityOpen)} 
            className="flex items-center w-full text-sm  text-gray-900 mb-2 gap-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${securityOpen ? 'rotate-180' : ''}`} />
            <span>Get Start</span>
            
          </button>
        </div>

        <div>
          <button 
            onClick={() => setSecurityOpen(!securityOpen)} 
            className="flex items-center w-full text-sm  text-gray-900 mb-2 gap-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${securityOpen ? 'rotate-180' : ''}`} />
            <span>Security</span>
            
          </button>
          
          {securityOpen && (
            <div className="pl-2 space-y-1 bg-gray-100">
              <SidebarItem title="Access Policies">
                <p>Policy Based Access Control (PBAC)</p>
                <p>Role Based Access Control (RBAC)</p>
              </SidebarItem>
              <p className="text-sm text-gray-600 py-1">Advanced Auth</p>
              <p className="text-sm text-gray-600 py-1">OAuth Clients</p>
            </div>
          )}
        </div>

        <div>
          <button 
            onClick={() => setSupportOpen(!supportOpen)} 
            className="flex items-center w-full text-sm  text-gray-900 mb-2 gap-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${supportOpen ? 'rotate-180' : ''}`} />
            <span>Support Structure</span>
            
          </button>
          
          {supportOpen && (
            <div className="pl-2 space-y-1 bg-gray-100">
              <SidebarItem title="Get Support Category">
                <p>ViXa Identity-First Platform</p>
                <p>Level 2</p>
                <p>Level 3</p>
                <p>Level 4</p>
              </SidebarItem>
              <p className="text-sm text-gray-600 py-1">Tickets</p>
            </div>
          )}
        </div>

        <div>
          <button 
            onClick={() => setBillingOpen(!billingOpen)} 
            className="flex items-center w-full text-sm  text-gray-900 mb-2 gap-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${billingOpen ? 'rotate-180' : ''}`} />
            <span>Billing</span>
            
          </button>
          
          {billingOpen && (
            <div className="pl-2 space-y-1 bg-gray-100">
              <SidebarItem title="My Account">
                <p>Plan details</p>
                <p>Manage plan</p>
                <p>Current usage</p>
                <p>Cost estimator</p>
                <p>Invoice history</p>
                <p>Billed usage history</p>
                <p>User Setting</p>
              </SidebarItem>
            </div>
          )}
        </div>

         <div>
          <button 
            onClick={() => setBillingOpen(!billingOpen)} 
            className="flex items-center w-full text-sm  text-gray-900 mb-2 gap-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${billingOpen ? 'rotate-180' : ''}`} />
            <span>Org Setting</span>
            
          </button>
          
          {billingOpen && (
            <div className="pl-2 space-y-1 bg-gray-100">
              <SidebarItem title="My Account">
                <p>My Plugin (0) </p>
                <p>My Dashboard (0)</p>
                <p>My Referral Code(0)</p>
                <p>Members</p>
                <p>Settings</p>
              </SidebarItem>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}