'use client'

import { useState,useEffect,useRef } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL,token } from '@/pages/api/endpoint'
import axios from 'axios'
import Router from 'next/router'


export default function CreateAccountSection() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
 // const [captcha, setCaptcha] = useState('')
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  //const [captchaSVG, setCaptchaSVG] = useState('');
   const [captchaSVG, setCaptchaSVG] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const audioRef = useRef();
  const router = useRouter();

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setconfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState('');
  const [companySize, setCompanySize] = useState('');
  // const [level, setLevel] = useState('');
  const [address1, setCompanyAddress1] = useState('');
  const [address2, setCompanyAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [desiredStartDate, setDesiredStartDate] = useState('');
  const [captcha, setCaptcha] = useState('');
  const companySizeRef = useRef();
  const levelRef = useRef();
  const [captchaError, setCaptchaError] = useState('');
  const [verificationCode,setVerificationCode] = useState('');
  //  const speakCaptcha = () => {
  //   const msg = new SpeechSynthesisUtterance(captcha.split('').join(' '));
  //   window.speechSynthesis.speak(msg);
  // };


  const speakCaptcha = () => {
  if ('speechSynthesis' in window) {
    console.log("captchaText",captchaText);
    const msg = new SpeechSynthesisUtterance(captchaText.split('').join(' '));
    msg.lang = 'en-US';
    window.speechSynthesis.cancel(); // stop any ongoing speech
     window.speechSynthesis.speak(msg);
  } else {
    alert('Your browser does not support speech synthesis.');
  }
};

// const handleSubmit= (e) => {
//    e.preventDefault()
//     router.push('/auth/verification');
// }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
      
     try {
      const response = await axios.post(`${API_URL}/user/email`, {
            email,
            confirmEmail,
            captcha,
            realCaptcha:captchaText,
         },
      {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
       const  res = response.data;
        if( res.status === "error"){
           setCaptchaError(res.message);
        }else if(res.status === "success"){
           setCaptchaError('');
            localStorage.setItem('verificationCode',res.result.verificationCode);
            localStorage.setItem('verificationEmail',res.result.email);
           router.push('/auth/verification');
        }
     } catch (err) {
         setCaptchaError(err.message);
     } finally {
       setLoading(false)
     }
  }

const fetchCaptcha = async () => {
  try {
    const res = await fetch(`${API_URL}/user/captcha`);
    const svg = await res.text(); 
     setCaptchaSVG(svg);

    const textRes = await fetch(`${API_URL}/user/captcha/captcha-text`);
    const textData = await textRes.json();
    setCaptchaText(textData.text);

    setUserInput('');
    setResult('');
  } catch (error) {
    console.error('Error fetching CAPTCHA:', error);
  }
};


//  const handleChange = (e) => {
//    e.preventDefault();
//   const companySize = companySizeRef.current.value;
// };


  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
  
 
    <section class="min-h-screen flex flex-col md:flex-row">
         <div className='md:w-1/3 flex items-center justify-center bg-gradient-to-r from-[#261766] to-[#301869] p-6 order-1 md:order-none'>
              <img src="/assets/images/vixa-platforms.svg" alt="Registration Visual"  class="w-2/3 md:w-3/5" />
             
        </div>

        <div class="md:w-2/3 flex  bg-gradient-to-r from-[#301869] to-[#0448AD] p-6 order-2 md:order-none">
        
         <div class="max-w-2xl  w-full p-12 lg:p-16 bg-gradient-to-r from-[#12145E] to-[#0448AD]">

          <h3 className="text-2xl font-semibold text-center text-white">To get started, create your account</h3>
          <p className="mb-12 text-center text-white/90">Administrators will process your request.<br/> For any urgent cases, please call us via our communication channels.</p>
          
             <form onSubmit={handleSubmit} class="space-y-6 text-white">
            
           

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
                Your Email Address*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                 required
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter company email address'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
               Confirm Your Email Address*
              </label>
              <input
                id="email"
                type="email"
                name="confirmEmail"
                 required
                onChange={(e)=>setconfirmEmail(e.target.value)}
                placeholder='Enter company email address'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>
               
               
         

            <div className="grid grid-cols-12 items-center gap-4">
  {/* CAPTCHA display */}
  <div className="col-span-3">
    <div className="flex items-center justify-center px-4 py-2 text-center bg-white rounded text-blue-950">
      <div dangerouslySetInnerHTML={{ __html: captchaSVG }} className="text-red-600" />
    </div>
  </div>

  {/* Refresh and Speak buttons */}
  <div className="col-span-1 flex flex-col items-center mr-4 mt-3">
    <span onClick={fetchCaptcha} className="cursor-pointer">🔄</span>
    <span onClick={speakCaptcha} className="cursor-pointer">🔊</span>
  </div>

  {/* CAPTCHA input field */}
  <div className="col-span-8">
    <label htmlFor="captcha" className="block mb-1 text-sm text-white/90">
      Enter CAPTCHA*
    </label>
    <input
      id="captcha"
      type="text"
      name="captcha"
      onChange={(e)=>setCaptcha(e.target.value)}
      // required
      placeholder="Enter captcha"
      className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
    />
  </div>
</div>
          
         { captchaError && ( 
              <div className="block mb-1 text-sm text-red-600">
                  <span>{captchaError}</span>
              </div>
           )}
            <button
              type="submit"
              className="w-full py-3 text-center text-white transition-opacity bg-orange-500 rounded-lg hover:opacity-90"
            >
              Submit Form
            </button>
          </form>
          <div className="mt-5 space-x-2 text-sm text-white/80">
            <p className="mb-1">The data collected here will be save to your account.</p>
            <p>
                Ost Infinity respects your privacy. Please visit our{' '}
                <a href="/privacy-policy" className="text-[#F98D11] underline">privacy statement</a>.
            </p>
           </div>
           </div>
        </div>
        {/* </div> */}
    </section>
  
  )
}
