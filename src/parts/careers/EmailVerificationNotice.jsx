'use client'

import React from 'react'
import Router, { useRouter } from 'next/router'

export default function EmailVerificationNotice() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/careers/successfully');
  };


  return (
    <section className="flex items-center justify-center px-6 mt-40">
      <div className="max-w-md min-w-xl p-10 text-center text-white bg-gradient-to-r from-[#4F1470] to-[12326C] rounded-xl shadow-lg">
        <h2 className="mb-6 text-lg font-bold">
          To continue with your job application<br />submission please verify your email
        </h2>
        <p className="mb-10 text-sm">
          A verification link has been<br />sent to your email.
        </p>
        <button   onClick={handleClick} className="w-full px-6 py-3 text-white bg-[#F98D11] hover:opacity-90 font-medium rounded-md transition">
          Go to E-Mail
        </button>
      </div>
    </section>
  )
}
