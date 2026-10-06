'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL,token } from '@/pages/api/endpoint'
import axios from 'axios'

export default function AuthVerificationSection() {
  const [code, setCode] = useState('')
  const [verificationEmail, setVerificationEmail] = useState('')
  const router = useRouter();
  const [storedCode, setStoredCode] = useState('')
  const [verificationError,setVerificationError] = useState('');

    //  const handleVerify = async (e) => {
    //     e.preventDefault();
    //     router.push('/auth/registration')
    //  }

  const handleVerify = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/user/verify-email`,
        {verificationEmail,code },{
          headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
     const res = response.data;

      if(res.status === "success"){
        // localStorage.removeItem('verificationCode');
        // localStorage.removeItem('verificationEmail');
        router.push('/auth/registration');
      }else{
        setVerificationError(res.message);
      }
       
       console.log("res",res.message);
    } catch (err) {
      console.log("err",err.message);
    }
  }
  useEffect(() => {
    const storedCode = localStorage.getItem('verificationCode');
    const verificationEmail = localStorage.getItem('verificationEmail');
    console.log("storedToken",storedCode);
    

    
    setStoredCode(storedCode);
    setVerificationEmail(verificationEmail);
  }, [router]);


  return (
      <section class="min-h-screen flex flex-col md:flex-row">
         <div className='md:w-1/3 flex items-center justify-center bg-gradient-to-r from-[#261766] to-[#301869] p-6 order-1 md:order-none'>
              <img src="/assets/images/vixa-platforms.svg" alt="Registration Visual"  class="w-2/3 md:w-3/5" />
        </div>
        <div class="md:w-2/3 flex items-center bg-gradient-to-r from-[#301869] to-[#0448AD] p-6 order-2 md:order-none">
         <div class="max-w-2xl w-full  p-6 lg:p-16 bg-gradient-to-r from-[#12145E] to-[#0448AD] border-2 border-[#199AE2] rounded-lg">
          <h3 className="mb-6 text-2xl font-semibold text-center text-white">Your Request To Be <br /> Successfully sent. <br />Please verify Your Email</h3>
          <p className="mb-6 text-center text-white/90">We have sent you to verification</p>
         <form onSubmit={handleVerify} className="w-full mx-auto space-y-4 max-w-50">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code"
            className="w-full px-4 py-2 placeholder-gray-500 bg-transparent border rounded border-white/50"
            required
          />

          { verificationError && ( 
              <div className="block mb-1 text-sm text-red-600">
                  <span>{ verificationError}</span>
              </div>
           )}

         
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
          >
            Verify
          </button>
        </form>
      </div>
      </div>
    </section>
  )
}
