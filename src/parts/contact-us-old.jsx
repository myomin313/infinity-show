import React,{useEffect,useState} from 'react'
import { Phone, BookOpen, Mail } from 'lucide-react'
import { API_URL,token } from '@/pages/api/endpoint'
import Captcha from './captcha'


export default function ContactUs() {

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
   
     const handleSubmit= async(e)=>{
        e.preventDefault()
        router.push('/auth/successfully');
     }

  return (
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-16">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full lg:w-1/2 p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#12145E] to-[#0448AD]">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready To Get Started?</h2>
          <p className="mb-8 text-white/90 backdrop-blur-sm">
            We're here to help. Reach out to schedule an introductory call with one of our team members and learn more about
            how Ost Infinity can benefit your organization.
          </p>
          <h3 className="mb-6 text-xl font-medium text-white">General Questions</h3>
          <div className="mb-8 space-y-4 text-white/90">
            <a
              href="tel:+4916095878645"
              className="flex items-center space-x-3 transition-colors hover:text-orange-400"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+49 160 9587 8645</span>
            </a>
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
              <h3 className="mb-6 text-xl text-white font-bold text-shadow">Germany Address</h3>
              <p>Tauncanlage 9-10<br></br>
               60329 Frankfurt am Main<br></br>
               Hessen<br></br>
               Germany
              </p>
          </div>
          <div className='mt-10 relative z-20'>
              <h3 className="mb-6 text-xl font-medium text-white">Vietnam Address</h3>
              <p>Saigon Time Square 9-10<br></br>
               22-39 Nguyen Hue Street<br></br>
               Ben Nghe Ward<br></br>
               District 1<br></br>
               Vietnam
              </p>
          </div>

          <div className='mt-10 relative z-20'>
              <h3 className="mb-6 text-xl font-medium text-white">Cambodia Address</h3>
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
          <h3 className="mb-6 text-2xl font-semibold text-white">Fill Up The Form To Get Started</h3>
          <p className="mb-8 text-white/90">An Ost Infinity representative will get in touch ASAP</p>
          <form onSubmit={handleSubmit}  className="space-y-6">
            <div>
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
            </div>
            <div>
              <label htmlFor="contact" className="block mb-1 text-sm text-white/90">
                Company *
              </label>
              <input
                id="contact"
                type="text"
                required
                placeholder='Enter contact number'
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
                required
                placeholder='Enter company email address'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>


            <div class="space-y-2">
  <label for="phone" class="block text-white font-medium">Business Phone*</label>
  <div class="flex gap-x-2">
  
    <select class="rounded-l-md border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="+66">+66</option>
      <option value="+1">+1</option>
      <option value="+44">+44</option>
   
    </select>

  
    <input type="tel"
      id="phone"
      placeholder="Enter phone number"
      class="flex-1 rounded-r-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
            <div>
              <label htmlFor="date" className="block mb-1 text-sm text-white/90">
                Which Product Can we Help with you ? *
              </label>
              <input
                id="date"
                type="date"
                required
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-orange-500 rounded bg-white/10 focus:ring-orange-400"
              />
              <label htmlFor="remember" className="text-sm">
                I would like to receive Ost Infinity promotional communications about products,
                services and events.I understant that Ost Infinity and its business partners Will
                use the contact information I provide to contact me about products,services and events ans that I can opt 
                out of there communitacations at any time.
              </label>
            </div>
            
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
