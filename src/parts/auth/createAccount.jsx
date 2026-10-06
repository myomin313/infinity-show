'use client'

import { useState,useEffect,useRef } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL,token } from '@/pages/api/endpoint'
import axios from 'axios'


export default function CreateAccountSection() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
   const [captchaSVG, setCaptchaSVG] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const audioRef = useRef();
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [companyRegistrationId, setCompanyRegistrationId] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [address1, setCompanyAddress1] = useState('');
  const [address2, setCompanyAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [desiredStartDate, setDesiredStartDate] = useState('');
  const [captcha, setCaptcha] = useState('');
  const companySizeRef = useRef();
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
 
  //  const handleSubmit= async(e)=>{
  //     e.preventDefault()
  //     router.push('/auth/successfully');
  //  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      console.log("form data",companySizeRef.current.value);

       const verificationEmail = localStorage.getItem('verificationEmail');
  
     try {
      const response = await axios.post(`${API_URL}/user/signup`, {
            firstName,
            familyName,
            email,
            verificationEmail,
            password,
            repeatPassword,
            companyRegistrationId,
            companySize:companySizeRef.current.value,
            address1,
            address2,
            city,
            country,
            desiredStartDate,
            captcha,
            realCaptcha:captchaText,
         },
      {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach JWT here
          },
        })
       console.log("sign up");
       const  res = response.data;
       console.log("result", res.status);
        if( res.status === "error"){
           setCaptchaError(res.message);
        }else if(res.status === "success"){
           setCaptchaError('');
              localStorage.setItem('signupUserId',res.result._id);
            // localStorage.setItem('verificationCode',res.result.verificationCode);
            // localStorage.setItem('verificationEmail',res.result.email);
           router.push('/auth/successfully');
        }
         
     } catch (err) {
       console.error('Signup error:', err)
       alert('There was an issue signing up. Please try again.')
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
    // <section className="min-h-screen py-30 px-4 bg-gradient-to-r from-[#2E0F57] to-[#012C5F] flex items-center justify-center">
     
    <>

   
    <section >
      {/* <div className="bg-gradient-to-b from-[#271766] to-[#111962] p-6">
         <img
          src="/assets/images/ost-infinity-logo-white.png"
           alt="ST Infinity Logo"
          className="w-16"
      />
      </div> */}
      
      <div class="min-h-screen flex flex-col md:flex-row">
      {/* <div className='w-full'>
         <img src="/assets/images/ost-infinity-logo-white.png" alt="Registration Visual"  class="w-2/3 md:w-3/5" /> 
      </div> */}
        {/* <div className="bg-gray-100 flex items-center justify-center p-4"> */}
        {/* <div className='bg-gradient-to-r from-[#291759] to-[#291759] min-h-screen flex items-center justify-center flex items-center justify-center p-2'> */}
         <div className='md:w-1/3 flex items-center justify-center bg-gradient-to-r from-[#261766] to-[#301869] p-6'>
              <img src="/assets/images/vixa-platforms.svg" alt="Registration Visual"  class="w-2/3 md:w-3/5" />
              {/* className="flex items-center justify-center w-full p-10 overflow-hidden min-h-100 max-h-100" /> */}
        </div>
      {/* <div className="max-w-2xl lg:w-1/2 p-10 lg:p-16 bg-gradient-to-br from-[#12145E] to-[#0448AD]"> */}
        <div class="md:w-2/3 flex  bg-gradient-to-r from-[#301869] to-[#0448AD] p-6">
         {/* <div className="max-w-xl w-full mx-auto"> */}
         <div class="max-w-2xl  w-full p-12 lg:p-16 bg-gradient-to-br from-[#12145E] to-[#0448AD]">

          <h3 className="text-2xl font-semibold text-center text-white">To get started, Create your account</h3>
          <p className="mb-12 text-center text-white/90">Administrators will process your request. <br/>For any urgent cases, please call us via our communication channels.</p>
          {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
             <form onSubmit={handleSubmit} class="space-y-6 text-white">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm text-white/90">
               First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                onChange={(e)=>setFirstName(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-1 text-sm text-white/90">
               Family Name*
              </label>
              <input
                id="familyName"
                name="familyName"
                type="text"
                required
                onChange={(e)=>setFamilyName(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
                Company Email Address*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
                Password *
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
               Repeat Password *
              </label>
              <input
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                required
                onChange={(e)=>setRepeatPassword(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="registration" className="block mb-1 text-sm text-white/90">
                Company Registration Id *
              </label>
              <input
                id="registration"
                type="text"
                name="companyRegistrationId"
                required
                onChange={(e)=>setCompanyRegistrationId(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>
            <div>
                <label htmlFor="companySize" className="block mb-1 text-sm text-white/90">
                    Company Size *
                </label>
                <select
                    id="companySize"
                    name="companySize"
                    ref={companySizeRef}
                    required
                    // onChange={handleChange}
                    className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                >
                    {[
                    { label: '10–49 employees', value: '10-49' },
                    { label: '50–99 employees', value: '50-99' },
                    { label: '100–290 employees', value: '100-299' },
                    { label: '500–999 employees', value: '500-999' },
                    { label: '1,000+ employees', value: '1000+' },
                    ].map(({ label, value, hidden }) => (
                    <option
                        key={value}
                        value={value}
                        disabled={value === '' ? true : undefined}
                        hidden={hidden}
                        style={{ backgroundColor: '#5D0E71', color: 'white' }}
                    >
                        {label}
                    </option>
                    ))}
                </select>
                </div>

               
            <div>
              <label htmlFor="address1" className="block mb-1 text-sm text-white/90">
                Company Address*
              </label>
              <input
                id="address1"
                name="address1"
                type="text"
                onChange={(e)=>setCompanyAddress1(e.target.value)}
                required
                className="w-full px-4 py-2 mb-3 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              <input
                id="address2"
                name="address2"
                type="text"
                onChange={(e)=>setCompanyAddress2(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="city" className="block mb-1 text-sm text-white/90">
                  City*
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  onChange={(e)=>setCity(e.target.value)}
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label htmlFor="country" className="block mb-1 text-sm text-white/90">
                  Country*
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  required
                  onChange={(e)=>setCountry(e.target.value)}
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1 text-sm text-white/90">
                Desired Start Date*
              </label>
              <input
                id="date"
                type="date"
                name="desiredStartDate"
                required
                onChange={(e)=>setDesiredStartDate(e.target.value)}
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
      required
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

            {/* <div className="grid items-end grid-cols-1 gap-4 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="flex items-center justify-center h-full p-4 text-center bg-white rounded text-blue-950">
               
                   <div dangerouslySetInnerHTML={{ __html: captcha }} className='text-red-600' />
                </div>
              </div>
              <div className="md:col-span-2">
                <span onClick={fetchCaptcha} style={{ marginLeft: 5 }}>🔄</span><br></br>
                <span onClick={speakCaptcha} style={{ marginLeft: 5 }}>🔊</span>
              </div>
              <div className="md:col-span-3">
                <label htmlFor="captcha" className="block mb-1 text-sm text-white/90">
                  Enter CAPTCHA*
                </label>
                <input
                  id="captcha"
                  type="text"
                  required
                  placeholder='Enter captcha'
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />
              </div>
            </div> */}
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
        </div>
    </section>
    </>
  )
}
