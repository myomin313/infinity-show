'use client'

import React from 'react'
import { Phone, BookOpen, Mail } from 'lucide-react'
import Router, { useRouter } from 'next/router'


export default function accountRecovery() {
    const router = useRouter();
  const saasOptions = [
    {
      id: 'saas-mtdr',
      label: 'Cloud Managed Threat Detection and Response (MTDR)',
    },
    {
      id: 'saas-network-observability',
      label: 'Cloud Network Performance Monitoring and Observability',
    },
    {
      id: 'saas-mss',
      label: 'Cloud Off-Site Managed Security Services (MSS)',
    },
  ]

  const selfHostedOptions = [
    {
      id: 'self-mtdr',
      label: 'Managed Threat Detection and Response (MTDR)',
    },
    {
      id: 'self-network-observability',
      label: 'Network Performance Monitoring and Observability',
    },
    {
      id: 'self-mss',
      label: 'Managed Security Services (MSS)',
    },
  ]


    // Verify CAPTCHA input
  const handleSubmit = async (e) => {
    e.preventDefault();
      router.push('/auth/recovery-id');
    // e.preventDefault();
    // try {
    //   const res = await axios.post(
    //     'http://127.0.0.1:9003/contact/send',
    //     { userInput },
    //     { withCredentials: true }
    //   );
    //   setMessage(res.data.success ? '✅ CAPTCHA verified!' : '❌ Incorrect CAPTCHA.');
    // } catch (err) {
    //   console.error('Verify failed:', err.message);
    //   setMessage('❌ Server error during verification.');
    // }
  };
  
  return (
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-32">
      <div className="flex flex-col w-full lg:flex-row min-h-[1200px]">
        <div className="w-full lg:w-2/5 p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#12145E] to-[#0448AD]">
           <img src="/assets/images/ost-infinity-logo.svg" className='w-48' />
          <h2 className="mt-14 mb-6 text-4xl font-bold text-white">Account Recovery</h2>
          <p className="mb-8 text-white/90">
            Please Fill the form on the right position
            {/* contact you with further instructions.You can keep using this form to add additional information or upload files */}
          </p>

          <p className="mb-8 text-white/90">
            Please be mind the process may take 2 working days.
          </p>
          
          <div className="absolute right-[15%] bottom-[-10%] w-[120%] h-[110%] pointer-events-none">
            <img
              src="/assets/images/abstract-form-design.png"
              alt="Abstract Design"
              className="object-contain w-full h-full opacity-60"
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5 p-10 lg:p-16 bg-gradient-to-br from-[#12145E] to-[#0448AD]">
       
          <form onSubmit={handleSubmit}  className="space-y-6">
            {/* <div>
              <label htmlFor="name" className="block mb-1 text-sm text-white/90">
                Name*
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder='Enter your name'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div> */}

            <div class="space-y-5 border border-white p-6 rounded-2xl">
          <label class="flex items-center gap-2">
            <input type="radio" name="describe" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  />
            Lost Two Factor Authentication
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="describe" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"/>
            Lost Access To Email
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="describe" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"/>
            Forget Password
          </label>
        </div>

            <div>
              <label htmlFor="contact" className="block mb-1 text-md text-white/90">
                Account Email*
              </label>
              <input
                id="contact"
                type="text"
                placeholder='Enter your email'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>
           
           <div>
            <button
             
              className="w-full py-3 text-center text-white transition-opacity bg-orange-500 rounded-lg hover:opacity-90"
            >
              Submit Form
            </button>
           </div>
           <div className='w-full'>
                  <a className='block w-full text-center text-orange-500' href="/auth/login">
                    Back To  Log In  Form
                    </a>
           </div>
          </form>
        </div>
      </div>
    </section>
  )
}
