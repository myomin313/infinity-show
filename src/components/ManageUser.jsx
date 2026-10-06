'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const tabs = [
  'Individual',
  'Identity User Groups',
  'Windows User Groups',
  'SALM/SSO User Groups',
];

const users = [
  {
    name: 'Luca Moretti',
    accountType: 'ViXa Identity-First',
    enabled: true,
    startDate: '21 Feb 2025',
    expiryDate: '21 Feb 2026',
    lastLogin: '20 Mar 2025',
    limitation: 'Standard',
    permission: 'Super Admin',
    endpointMgmt: false,
  },
  {
    name: 'Sofia Müller',
    accountType: 'Identity Provider',
    enabled: false,
    startDate: '18 Feb 2025',
    expiryDate: '18 Feb 2026',
    lastLogin: '22 Mar 2025',
    limitation: 'Administrative',
    permission: 'Security Admin',
    endpointMgmt: true,
  },
  {
    name: 'Aleksandr lvanov',
    accountType: 'Local Accountr',
    enabled: false,
    startDate: '18 Feb 2025',
    expiryDate: '18 Feb 2026',
    lastLogin: '22 Mar 2025',
    limitation: 'Administrative',
    permission: 'Security Admin',
    endpointMgmt: true,
  },
  {
    name: 'Aleksandr lvanov',
    accountType: 'Local Accountr',
    enabled: false,
    startDate: '18 Feb 2025',
    expiryDate: '18 Feb 2026',
    lastLogin: '22 Mar 2025',
    limitation: 'Administrative',
    permission: 'Security Admin',
    endpointMgmt: true,
  },
  {
    name: 'Elena Dubois',
    accountType: 'Local Accountr',
    enabled: false,
    startDate: '14 Feb 2025',
    expiryDate: '14 Feb 2026',
    lastLogin: '25 Mar 2025',
    limitation: 'Standard',
    permission: 'Network Admin',
    endpointMgmt: true,
  },
   {
    name: 'Oliver Jensen',
    accountType: 'Local Accountr',
    enabled: false,
    startDate: '14 Feb 2025',
    expiryDate: '14 Feb 2026',
    lastLogin: '25 Mar 2025',
    limitation: 'Super Admin',
    permission: 'Super Admin',
    endpointMgmt: true,
  },
  {
    name: 'Isla Thompson',
    accountType: 'Local Accountr',
    enabled: false,
    startDate: '14 Feb 2025',
    expiryDate: '14 Feb 2026',
    lastLogin: '25 Mar 2025',
    limitation: 'Standard',
    permission: 'Super Admin',
    endpointMgmt: true,
  },
  // Add more users...
];

export default function ManageUser() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 space-y-6 text-black">
      <h2 className="text-xl font-semibold">Manage SaaS | Platform Permissions</h2>

      <ul className="list-disc ml-4 text-sm space-y-1">
        <li>Platform Authentication and authorisation
          <ul className="list-disc ml-4">
            <li>External Authorisation Platform (EAP)</li>
          </ul>
        </li>
        <li>YubiKey - authentication devices & platform</li>
      </ul>

      {/* Tabs */}
      <div className="flex flex-wrap overflow-hidden">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm border border-gray-200 font-medium ${
              i === activeTab ? 'bg-[#199AE2] text-white' : 'bg-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="text-sm">
        To enable Yubikey software and hardware and SAML/SSO Login make sure you have an Identity Provider defined in the ViXa Identity-First Web Console.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {[
          'Add New User',
          'Change Users Groups and Policy',
          'Modify User',
          'Reset User Password',
          'Block User Login',
          'Suspend User',
          'Delete User',
          'Recycle Bin',
          'Restore User',
          'Search User by Name or Email',
        ].map((label) => (
          <button key={label} className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600">
            {label}
          </button>
        ))}
      </div>

      {/* User Table */}
      {/* <div className="overflow-auto text-black"> */}
     <div className="w-full overflow-x-scroll">
  <table className="min-w-[1500px] border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr className='text-sm'>
              <th className="p-2 border">✓</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">User Names</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Account Type</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Enabled</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Start Date</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Expiration Date</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Last Login</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Account Limitation</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Admin Permissions</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Endpoints Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Weather Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Map Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Analytics Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Report Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Alert Mgmt</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Allow Unmanaged Objects</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">DevSecOps</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">DevOps</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">SOC</th>
              <th className="p-2 border text-left font-normal whitespace-nowrap">Source Code</th>
            </tr>
          </thead>
          <tbody className='whitespace-nowrap'>
            {users.map((u, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">
                  <div className="flex items-center justify-between w-full">
                    <span>{u.accountType}</span>
                    <ChevronDown size={14} />
                  </div>
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">{u.startDate}</td>
                <td className="p-2 border text-center">{u.expiryDate}</td>
                <td className="p-2 border text-center">{u.lastLogin}</td>
                <td className="p-2 border">
                  <div className="flex items-center justify-between w-full">
                    <span>{u.limitation}</span>
                    <ChevronDown size={14} />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center justify-between w-full">
                    <span>{u.permission}</span>
                    <ChevronDown size={14} />
                  </div>
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"   />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"   />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox"  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
