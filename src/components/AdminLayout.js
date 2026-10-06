// File: components/AdminLayout.js
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/parts/v3/header';
import Head from 'next/head';
import { BASE_IMAGE_URL } from '@/pages/api/endpoint';

export default function AdminLayout({ children, userRole = 'admin' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  if (userRole !== 'admin') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-xl font-semibold">Access Denied</p>
      </div>
    );
  }

  return (

     <>
      <Head>
        <title>Login | Ost Infinity - ViXa Identity First Platform</title>
        <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
      <Header />
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-auto`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <span className="text-lg font-bold">Admin Panel</span>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link href="/admin/users" className="hover:bg-gray-700 p-2 rounded">Users</Link>
          <Link href="/admin/reports" className="hover:bg-gray-700 p-2 rounded">Reports</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold">Admin Panel</span>
        </div>
       
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
           
          {children}
        </main>
      </div>
    </div>
    </>
  );
}
