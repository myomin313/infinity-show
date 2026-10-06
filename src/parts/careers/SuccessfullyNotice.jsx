'use client'

import React,{useEffect} from 'react'
import Router, { useRouter } from 'next/router';

export default function SuccessfullyNotice() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/careers/open-positions')  // go back to previous page
    }, 5000) // 5 seconds

    return () => clearTimeout(timer) // cleanup on unmount
  }, [router]);

  return (
    <section className="flex items-center justify-center px-6 mt-40">
      <div className="max-w-md min-w-xl p-10 text-center text-white bg-gradient-to-r from-[#4F1470] to-[12326C] rounded-xl shadow-lg">
        <h2 className="mb-6 text-lg font-bold">
          Your Email has been <br />successfully verified
        </h2>
        <p className="mb-10 text-sm">
          You will be redirect back <br />to previous page in (5)
        </p>
      </div>
    </section>
  )
}
