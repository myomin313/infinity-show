'use client'

import React ,{useState}from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import Router, { useRouter } from 'next/router';

export default function Form() {

  const [captchaToken, setCaptchaToken] = useState(null);
  const router = useRouter();

  const handleCaptchaChange = (token) => {
    console.log("Captcha token:", token);
    setCaptchaToken(token); // You can send this to your backend to verify
  };


    const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/careers/verification');
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
    <section className="flex items-center justify-center min-h-screen px-4 py-20">
       <form onSubmit={handleSubmit} className="space-y-4" >
      <div className="w-full max-w-2xl bg-[#111B68]/20 text-white rounded-xl shadow-lg p-10">
        <div className="mb-8 text-center">
          <p className="text-sm text-white/80">You are applying for the position of</p>
          <h2 className="mt-1 text-xl font-semibold text-white">
            Secure Access Expert - IAM, PAM, PKI
          </h2>
        </div>

        <p className="mb-6 text-sm text-white/70">Please complete all fields marked with <span className="text-pink-400">*</span>.</p>

       
          {/* Salutation */}
          <div className='mt-4'>
            <label className="block mb-1 text-sm">Salutation: Mr/Mrs<span className="text-pink-400">*</span></label>
            <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white">
              <option value="">Select...</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
            </select>
          </div>

          {/* Title */}
          <div className='mt-4'>
            <label className="block mb-1 text-sm">Title: Prof, Dr, etc...</label>
            <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white">
              <option value="">Select...</option>
              <option>Prof</option>
              <option>Dr</option>
              <option>Ir</option>
            </select>
          </div>

          {/* First Name */}
          <div className='mt-4'>
            <label className="block mb-1 text-sm">First Name<span className="text-pink-400">*</span></label>
            <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white" />
          </div>

          {/* Surname */}
          <div className='mt-4'>
            <label className="block mb-1 text-sm">Surname<span className="text-pink-400">*</span></label>
            <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white" />
          </div>

          {/* Surname Title */}
          <div className='mt-4'>
            <label className="block mb-1 text-sm">Surname Title</label>
            <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white">
              <option value="">Select...</option>
              <option>Jr</option>
              <option>Sr</option>
              <option>II</option>
            </select>
          </div>

          {/* Country & Postcode */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <div>
              <label className="block mb-1 text-sm">Country<span className="text-pink-400">*</span></label>
              <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white">
                <option value="">Select Country</option>
                <option>Germany</option>
                <option>Indonesia</option>
                <option>Japan</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">Postcode<span className="text-pink-400">*</span></label>
              <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
          </div>
          {/* Address */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                <div>
                    <label className="block mb-1 text-sm">City<span className="text-pink-400">*</span></label>
                    <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>
                <div>
                    <label className="block mb-1 text-sm">Street<span className="text-pink-400">*</span></label>
                    <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>
                </div>

                <div className="mt-4">
                <label className="block mb-1 text-sm">House no./staircase/door<span className="text-pink-400">*</span></label>
                <input type="text" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>

                {/* Date of birth */}
                <div className="mt-4">
                <label className="block mb-1 text-sm">Date of birth (DD.MM.YYYY)<span className="text-pink-400">*</span></label>
                <input type="date" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>

                {/* Email */}
                <div className="mt-4">
                <label className="block mb-1 text-sm">Email<span className="text-pink-400">*</span></label>
                <input type="email" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>
                <div className="mt-4">
                <label className="block mb-1 text-sm">Email (repeat)<span className="text-pink-400">*</span></label>
                <input type="email" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>

                {/* Phone */}
                <div className="mt-4">
                <label className="block mb-1 text-sm">Telephone<span className="text-pink-400">*</span></label>
                <input type="tel" className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40" />
                </div>

                {/* Documents Upload */}
                <div className="mt-8">
                <h4 className="mb-2 text-sm font-semibold text-orange-400">Documents</h4>
                <p className="mb-4 text-xs text-white/70">
                    Per file max. 5 MB in the formats: DOC, DOCX, JPG, JPEG, PNG, PPT.
                </p>

                {/* File Upload Line */}
                <div className="flex items-center mb-2 space-x-2">
                    <input type="file" className="w-full max-w-[200px] file:bg-transparent file:text-white file:border-0 text-sm text-white/80" />
                    <input type="text" placeholder="Document description" className="flex-1 px-3 py-2 text-sm bg-transparent border rounded border-white/40" />
                    <button type="button" className="text-white/60 hover:text-white">
                    🗑️
                    </button>
                </div>

                {/* Placeholder for another row with '+' */}
                <div className="flex items-center space-x-2">
                    <input type="file" className="w-full max-w-[200px] file:bg-transparent file:text-white file:border-0 text-sm text-white/80" />
                    <input type="text" placeholder="Document description" className="flex-1 px-3 py-2 text-sm bg-transparent border rounded border-white/40" />
                    <button type="button" className="text-white/60 hover:text-white">
                    ➕
                    </button>
                </div>
            </div>
            </div>
             <div className="w-full max-w-2xl  text-white  p-10">
            {/* Application Questions */}
            <div >
                <h3 className="mb-6 text-lg font-semibold text-white">Application Questions</h3>

                {/* Question 1 */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">
                    Are you legally authorised to work in the country for which you are applying?<span className="text-pink-400">*</span>
                    </label>
                    <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 text-white/90 focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Select One</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>

                {/* Question 2 */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">
                    Will you now, or in the future, require sponsorship for an employment visa?<span className="text-pink-400">*</span>
                    </label>
                    <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 text-white/90 focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Select One</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>

                {/* Question 3 */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm leading-snug">
                    I consent for processing of my personal data in accordance with the privacy statement for
                    consideration for any current or future relevant position for 1 year<span className="text-pink-400">*</span>
                    </label>
                    <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 text-white/90 focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Select One</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>

                {/* Question 4 */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm">
                    Are you currently any employee of a Ost Infinity Group company?<span className="text-pink-400">*</span>
                    </label>
                    <select className="w-full px-4 py-2 text-sm bg-transparent border rounded border-white/40 text-white/90 focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Select One</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>
            </div>
            {/* Privacy Notice & Consent */}
            <div className="mt-10 space-y-4 text-sm text-white/80">
            <p>
                If you apply for employment with Ost Infinity, we will collect certain personal information
                from you or from third parties such as recruitment agencies or education history, your relevant
                experience and skills, and your response to certain pre-employment assessments you may
                be required to take during the application process.
            </p>
            <p>
                We will use that information for one or more of the following: to process your employment
                application or proposal, to provide you with Ost Infinity’s job related information, to consider
                you for employment and to monitor and improve our overall recruiting process.
            </p>
            <p>
                If you become employed or engaged by us, we will use some of this information in
                connection with your employment/engagement. We will never gather or ask you for
                information prohibited by applicable law, and any information you provide will be used in
                accordance with applicable law.
            </p>
            <p>
                Read our full Privacy Policy using this link:
                <a href="/privacy-policy" className="ml-2 text-blue-300 underline">Privacy policy</a>
            </p>

            {/* Accept checkbox */}
            <label className="inline-flex items-center mt-2 space-x-2">
                <input type="checkbox" className="w-4 h-4 text-white bg-transparent form-checkbox border-white/50" />
                <span className="text-white">I accept</span>
            </label>

            {/* reCAPTCHA placeholder */}
            {/* <div className="mt-6"> */}
                <div className="w-full max-w-xs  rounded">
                  <ReCAPTCHA
        sitekey="6Le7x1YrAAAAAAqSTy1rvEQWFAL7PyAfVTQ38hJ9" // Replace with your real site key
        onChange={handleCaptchaChange}
      />
                {/* <p className="text-sm text-black">I’m not a robot</p> */}
                {/* NOTE: Integrasi asli reCAPTCHA butuh script tag atau paket npm */}
                </div>
            {/* </div> */}

            {/* Submit Button */}
            <div className="mt-8">
                <button
                type="submit"
                className="w-full py-3 font-medium text-white transition-colors bg-orange-400 rounded hover:bg-orange-500"
                >
                Submit
                </button>
            </div>
            </div>
      
      </div>
        </form>
    </section>
  )
}
