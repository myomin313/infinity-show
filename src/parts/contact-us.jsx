'use client'

import React,{useEffect,useState,useRef} from 'react'
import { Phone, BookOpen, Mail } from 'lucide-react'
import { API_URL,token } from '@/pages/api/endpoint'
import Captcha from './captcha'
import { useRouter } from 'next/router';
import PhoneSelect from '@/components/Phone';
import axios from 'axios';


export default function ContactUs() {

    
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [product, setProduct] = useState('');
    const [acceptance, setAcceptance] = useState(false);
    const phoneRef = useRef();
    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

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




  const [errors, setErrors] = useState({});
 console.log("acceptance",acceptance)
 
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!company) newErrors.company = 'Company is required';
    if (!email) newErrors.email = 'Email is required';
    // if (!acceptance) newErrors.acceptanceRef = 'check the checkbox';
    if (!phoneNumber) newErrors.phone = 'Phone is required';
    if (!product) newErrors.product = 'Product is required';
    if (!acceptance) newErrors.acceptance = 'You need to check the checkbox';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate())  return false;

    try {
   
      const response = await axios.post(`${API_URL}/contact-us/submit`, {
        phone,
        name,
        email,
        phoneNumber,
        product,
        company
        },{
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
       
      const res = response.data
       console.log("response",response.data);
      console.log("response",response.status);
      if (res.status === 'success') {
          setSuccess(true);
          setName('');
          setAcceptance(false);
          setCompany('');
          setEmail('');
          setPhoneNumber('');
          setProduct('')
          
      } 
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };


    useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        window.location.reload();
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timer); // Clean up on unmount
  }, [success]);

   
    //  const handleSubmit= async(e)=>{
    //     e.preventDefault()
    //     router.push('/auth/successfully');
    //  }

  return (
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-16">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full lg:w-1/2 p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#12145E] to-[#0448AD]">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready To Get Started?</h2>
          <p className="mb-8 text-white/90 backdrop-blur-sm">
            We're here to help. Reach out to schedule an introductory call with one of our team members and learn more about
            how Ost Infinity can benefit your organization.
          </p>
          <div className='mb-6'>
          <h3 className="mb-6 text-xl font-medium text-white">All Enquiries</h3>
           <h3 className="text-white hover:underline text-xl">Toll Free: +0800 285 19 19</h3>
          </div>
          <div className="mb-8 space-y-4 text-white/90">
            
            <a
              href="https://ostinfinity.net/resource-library"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 transition-colors hover:text-orange-400"
            >
              <BookOpen className="w-5 h-5 text-orange-400" />
              <span>Ost Infinity Resource Library</span>
            </a>
            <a
              href="mailto:talk@ostinfinity.net"
              className="flex items-center space-x-3 transition-colors hover:text-orange-400"
            >
              <Mail className="w-5 h-5 text-orange-400 z-20" />
              <span>talk@ostinfinity.net</span>
            </a>
          </div>
          <div className='relative z-20'>
              <h3 className="text-md text-white font-sm text-2xl">Germany</h3>
              <p  className='mb-6'>Tauncanlage 9-10<br></br>
               60329 Frankfurt am Main<br></br>
               Hessen<br></br>
               Germany
              </p>
                <a
              href="tel:+4916095878645"
              className="flex items-center space-x-3 transition-colors hover:text-orange-400"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+49 160 9587 8645</span>
            </a>
          </div>
          <div className='mt-10 relative z-20'>
              <h3 className="text-md font-sm text-white text-2xl">Vietnam</h3>
              <p className='mb-6'>Saigon Time Square <br></br>
               22-39 Nguyen Hue Street<br></br>
               Ho Chi Minh City<br></br>
               Vietnam
              </p>

               <a
              href="tel:+4916095878645"
              className="flex items-center space-x-3 transition-colors hover:text-orange-400"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+84 (0) 35 58 88 35 70</span>
            </a>
          </div>

          <div className='mt-10 relative z-20'>
              <h3 className="text-md font-sm text-white text-2xl">Cambodia</h3>
              <p>Exchange Square<br></br>
               106  Corner St.61<br></br>
               Phnom Penh, KH 12202<br></br>
               Phnom Penh<br></br>
               Cambodia
              </p>
          </div>
          <div className="absolute right-[15%] bottom-[-10%] w-[120%] h-[110%] pointer-events-none">
            <img
              src="/assets/images/abstract-form-design.png"
              alt="Abstract Design"
              className="object-contain w-full h-full opacity-60"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 bg-gradient-to-br from-[#12145E] to-[#0448AD]">
           {success && (
           <div>
                 <div class="mb-6 flex justify-center items-center border  border-white/30 rounded-md p-2  text-white bg-gradient-to-r from-[#167f3b] to-[#167f3b]">
                <label class="w-full px-4 py-2 rounded-md text-white text-base font-medium">
                 We Send successfully
              </label>
            </div>
             </div>
             )}
          <h3 className="mb-6 text-2xl font-semibold text-white">Fill Up The Form To Get Started</h3>
          <p className="mb-8 text-white/90">An Ost Infinity representative will get in touch ASAP</p>
          <form onSubmit={handleSubmit}  className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm text-white/90">Name*</label>
              <input
                id="name"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                type="text"
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block mb-1 text-sm text-white/90">Company*</label>
              <input
                id="company"
                name="company"
                onChange={(e)=>setCompany(e.target.value)}
                type="text"
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              {errors.company && <p className="text-red-500 text-sm mt-2">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">Company Email Address*</label>
              <input
                id="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-1">Business Phone*</label>
              <div className="flex gap-x-2">
                {/* <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="rounded-l-md border border-gray-300 bg-white text-gray-900 px-3 py-2"
                >
                  <option value="+66">+66</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select> */}

                <PhoneSelect phone={phone} setPhone={setPhone} ref={phoneRef}/>
                <input
                  type="tel"
                  name="phoneNumber"
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  className="flex-1 rounded-r-md border border-gray-300 px-3 py-2"
                  placeholder="Enter phone number"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="product" className="block mb-1 text-sm text-white/90">Which Product Can we Help you With?*</label>
              <input
                id="product"
                name="product"
                onChange={(e)=>setProduct(e.target.value)}
                type="text"
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              {errors.product && <p className="text-red-500 text-sm mt-2">{errors.product}</p>}
            </div>
            <div className="flex  space-x-2">
              <input
                id="remember"
                type="checkbox"
                name="acceptance"
                // onChange={(e)=>setAcceptance(e.target.value)}
                onChange={(e) => setAcceptance(e.target.checked)}
                className="w-4 h-4 text-orange-500 rounded bg-white/10 focus:ring-orange-400"
              />
              <label htmlFor="remember" className="text-sm">
                I would like to receive Ost Infinity promotional communications about products,
                services and events.I understand that Ost Infinity and its business partners Will
                use the contact information I provide to contact me about products,services and events ans that I can opt 
                out of there communications at any time.
              </label>
            </div>
            <p> {errors.acceptance && <p className="text-red-500 text-sm mt-2">{errors.acceptance}</p>}</p>
            <div>
                <p>Ost Infinity respects your privacy.Choosing to click the button below means that you
                    you agree to the Ost Infinity <a>Privacy Policy</a> .
                </p>
            </div>
           
            <button
              type="submit"
              className="w-full py-3 text-center text-white transition-opacity bg-orange-500 rounded-lg hover:opacity-90"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
