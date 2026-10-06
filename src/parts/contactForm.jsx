'use client'

import React,{useEffect,useState,useRef} from 'react'
import { Phone, BookOpen, Mail } from 'lucide-react'
import { API_URL,token,restrictMail } from '@/pages/api/endpoint'
import Captcha from './captcha'
import PhoneSelect from '@/components/Phone';
import axios from 'axios';

export default function ContactForm() {
    const [captchaSVG, setCaptchaSVG] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    const [phone, setPhone] = useState('');
    const phoneRef = useRef();
    const [selectedSaas, setSelectedSaas] = useState([]);
    const [selectedSelfHosted, setSelectedSelfHosted] = useState([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [CompanyRegistrationId, setCompanyRegistrationId] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [desiredStartDate, setDesiredStartDate] = useState('');
    const [captcha, setCaptcha] = useState('');

  //   const handleSaasChange = (e) => {
  //   const { value, checked } = e.target;
  //   setSelectedSaas((prev) =>
  //     checked ? [...prev, value] : prev.filter((id) => id !== value)
  //   );
  // };

  const handleSaasChange = (e) => {
  const id = e.target.id;
  if (e.target.checked) {
    setSelectedSaas((prev) => [...prev, id]);
  } else {
    setSelectedSaas((prev) => prev.filter((item) => item !== id));
  }
};


  // const handleSelfHostedChange = (e) => {
  //   const { value, checked } = e.target;
  //   setSelectedSelfHosted((prev) =>
  //     checked ? [...prev, value] : prev.filter((id) => id !== value)
  //   );
  // };


  const handleSelfHostedChange = (e) => {
  const id = e.target.id;

  setSelectedSelfHosted((prev) =>
    e.target.checked
      ? [...prev, id] // add
      : prev.filter((item) => item !== id) // remove
  );
};



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

   const [errors, setErrors] = useState({});
  //  console.log("acceptance",acceptance)
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
   
    const validate = () => {
      const newErrors = {};
      if (!name) newErrors.name = 'Name is required';
      
       if (!email) {
    newErrors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    newErrors.email = 'Invalid email format';
  } else {
    const domain = email.split('@')[1]?.toLowerCase();
    if (restrictMail.includes(domain)) {
      newErrors.email = 'Public email providers like Gmail or Yahoo or hotmail or outlook are not allowed';
    }
  }

      if (!CompanyRegistrationId) newErrors.CompanyRegistrationId = 'Company Registration Id is required';
      if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
      if (!phone) newErrors.phone = 'Please select country code';
      if (!address1) newErrors.address1 = 'Company Address is required';
      if (!city) newErrors.city = 'City field is required';
      if (!country) newErrors.country = 'country is required';
      if (!selectedSaas) newErrors.selectedSaas = 'You need to select the Saas';
      if (!captcha) newErrors.captcha = 'captcha is required';
      if (captcha !== captchaText) newErrors.captchaInvalid = 'captcha is incorrect';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit= async (e)=>{
         e.preventDefault();
     if (!validate())  return false;

    try {
   
      const response = await axios.post(`${API_URL}/contact/send`, {
        name,
        email,
        CompanyRegistrationId,
        phoneNumber,
        phone,
        address1,
        address2,
        city,
        country,
        // product,
        selectedSaas,
        selectedSelfHosted,
        desiredStartDate
        },{
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
       
      //const res = response.data
       console.log("response",response);
      console.log("response data",response.data);
      if (response.status === 'success') {
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
      //  router.push('/auth/successfully');
     }


  
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
  
  const fetchCaptcha = async () => {
    try {
      const res = await fetch(`${API_URL}/user/captcha`);
      const svg = await res.text(); 
       setCaptchaSVG(svg);
  
      const textRes = await fetch(`${API_URL}/user/captcha/captcha-text`);
      const textData = await textRes.json();
      setCaptchaText(textData.text);
  
      // setUserInput('');
      // setResult('');
    } catch (error) {
      console.error('Error fetching CAPTCHA:', error);
    }
  };
  
  
 
  
    useEffect(() => {
      fetchCaptcha();
    }, []);



  //   // Verify CAPTCHA input
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       'http://127.0.0.1:9003/contact/send',
  //       { userInput },
  //       { withCredentials: true }
  //     );
  //     setMessage(res.data.success ? '✅ CAPTCHA verified!' : '❌ Incorrect CAPTCHA.');
  //   } catch (err) {
  //     console.error('Verify failed:', err.message);
  //     setMessage('❌ Server error during verification.');
  //   }
  // };
  
  return (
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-16">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full lg:w-1/2 p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#12145E] to-[#0448AD]">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready To Get Started?</h2>
          <p className="mb-8 text-white/90">
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
              <Mail className="w-5 h-5 text-orange-400" />
              <span>talk@ostinfinity.net</span>
            </a>
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
                onChange={(e)=>setName(e.target.value)}
                // required
                placeholder='Enter your name'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
               {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact" className="block mb-1 text-sm text-white/90">
                Contact Number*
              </label>
               <div className="flex gap-x-2">
               <PhoneSelect phone={phone} setPhone={setPhone} ref={phoneRef}/>
              <input
                id="contact"
                type="text"
                // required
                onChange={(e)=>setPhoneNumber(e.target.value)}
                placeholder='Enter contact number'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              </div>
               {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}

               {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-white/90">
                Company Email Address*
              </label>
              <input
                id="email"
                type="email"
                // required
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter company email address'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="registration" className="block mb-1 text-sm text-white/90">
                Company Registration Id *
              </label>
              <input
                id="registration"
                type="text"
                // required
                onChange={(e)=>setCompanyRegistrationId(e.target.value)}
                placeholder='Enter company registration number'
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
               {errors.CompanyRegistrationId && <p className="text-red-500 text-sm mt-2">{errors.CompanyRegistrationId}</p>}
            </div>
            <div>
              <label htmlFor="address1" className="block mb-1 text-sm text-white/90">
                Company Address*
              </label>
              <input
                id="address1"
                type="text"
                placeholder="Address Line 1 (required)"
                onChange={(e)=>setAddress1(e.target.value)}
                // required
                className="w-full px-4 py-2 mb-3 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
              <input
                id="address2"
                type="text"
                onChange={(e)=>setAddress2(e.target.value)}
                placeholder="Address Line 2 (optional)"
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
               {errors.address1 && <p className="text-red-500 text-sm mt-2">{errors.address1}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="city" className="block mb-1 text-sm text-white/90">
                  City*
                </label>
                <input
                  id="city"
                  type="text"
                  // required
                  onChange={(e)=>setCity(e.target.value)}
                  placeholder='Enter your city'
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />
                 {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="country" className="block mb-1 text-sm text-white/90">
                  Country*
                </label>
                <input
                  id="country"
                  type="text"
                  onChange={(e)=>setCountry(e.target.value)}
                  // required
                  placeholder='Enter your country'
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />
                 {errors.country && <p className="text-red-500 text-sm mt-2">{errors.country}</p>}
              </div>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-white">VIXA IDENTITY-FIRST PLATFORM*</h4>
              <div className="space-y-3">
                <h5 className="text-white/90">SaaS</h5>
                {saasOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <input
                      id={option.id}
                      type="checkbox"
                      onChange={handleSaasChange}
                      checked={selectedSaas.includes(option.id)}
                      className="w-4 h-4 text-orange-500 bg-transparent border rounded border-white/30 focus:ring-orange-400"
                    />
                    <label htmlFor={option.id} className="text-sm cursor-pointer text-white/80">
                      {option.label}
                    </label>
                  </div>
                ))}
                 {errors.country && <p className="text-red-500 text-sm mt-2">{errors.country}</p>}
                <h5 className="mt-4 text-white/90">CUSTOMER SELF-ZONE HOSTED</h5>
                {selfHostedOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <input
                      id={option.id}
                      type="checkbox"
                      onChange={handleSelfHostedChange}
                      checked={selectedSelfHosted.includes(option.id)}
                      className="w-4 h-4 text-orange-500 bg-transparent border rounded border-white/30 focus:ring-orange-400"
                    />
                    <label htmlFor={option.id} className="text-sm cursor-pointer text-white/80">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1 text-sm text-white/90">
                Desired Start Date*
              </label>
              <input
                id="date"
                type="date"
                // required
                onChange={(e)=>setDesiredStartDate(e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
              />
            </div>
            <div className="grid  grid-cols-12 items-center gap-4">
              {/* <Captcha /> */}
              {/* <div className="md:col-span-1">
                <div className="flex items-center justify-center h-full p-4 text-center bg-white rounded">
                  <span className="text-gray-500">&lt;captcha&gt;</span>
                </div>
              </div>
              <div className="md:col-span-2">
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
              </div> */}
                 {/* CAPTCHA display */}
  <div className="col-span-4">
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
  <div className="col-span-7">
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
