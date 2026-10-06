// parts/adminHeader.jsx
'use client';

import { Search, Bell, Sun, Moon, Info, TerminalSquare, Settings, CircleHelp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_IMAGE_URL } from '@/pages/api/endpoint';


import { useTheme } from '@/components/ConsoleLayout';

export default function AdminHeader() {
  const [region, setRegion] = useState('EU (Germany)');
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="bg-gradient-to-r from-[#4A176F] to-[#0F33FC] text-white px-4 py-2 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        {/* Left section: Logo + Search */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Logo */}
          <div className="flex items-center  border-r">
            <Link href="/" className='mr-8'>
              <Image
                src={`${BASE_IMAGE_URL}/login/ost-logo.svg`}
                alt="OST Infinity"
                width={200}
                height={10}
              />
            </Link>
          </div>


          <div className="flex items-center">
            <Link href="/">
              <Image
                src={`${BASE_IMAGE_URL}/admin-console/ViXa.svg`}
                alt="OST Infinity"
                width={50}
                height={10}
              />
            </Link>
          </div>


          {/* Search bar */}
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-2.5 text-white/80 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-24 py-2 rounded bg-[#4A176F] text-sm focus:outline-none placeholder:text-white/60"
            />
            <span className="absolute right-3 top-2 text-xs text-white/60">[Alt+S]</span>
          </div>
        </div>

        {/* Right section: Icons and controls */}
        <div className="flex items-center gap-4 text-sm">
          {/* Dark mode toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 flex text-xs gap-1 bg-gradient-to-r from-[#12145E] to-[#073d9C] rounded hover:bg-[#062d66]"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button> */}

          <button
  onClick={() => setDarkMode(!darkMode)}
  className="px-3 py-1 flex text-xs gap-1 bg-gradient-to-r from-[#12145E] to-[#073d9C] rounded hover:bg-[#062d66]"
  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {darkMode ? (
    <>
      <Sun className="w-4 h-4" />
      <span>Enable Light Mode</span>
    </>
  ) : (
    <>
      <Moon className="w-4 h-4" />
      <span>Enable Dark Mode</span>
    </>
  )}
</button>


          {/* Icons */}
          <div className="hidden md:flex items-center text-white/90">
            <div className="px-3 border-r border-white">
              <Info className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
            <div className="px-3 border-r border-white">
              <TerminalSquare className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
            <div className="px-3 border-r border-white">
              <Bell className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
            <div className="px-3 border-r border-white">
              <CircleHelp className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
            <div className="px-3 border-r border-white">
              <Settings className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Region Selector */}
          <div className="hidden md:flex items-center gap-1 border-r border-white">
            <span>{region}</span>
            <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </div>

          {/* Profile Dropdown */}
          <div className="relative flex items-center">
            <div className="flex items-center justify-center text-white text-sm">
              infra@ostinfinity.net
            </div>
            <svg className="w-4 h-4 ml-1 fill-white" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}