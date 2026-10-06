'use client'

import React from 'react'
import { Phone, BookOpen, Mail } from 'lucide-react'


export default function accountRecovery() {
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
    <section className="container px-6 py-20 mx-auto space-y-8 md:px-32">
      <div className="flex flex-col w-full lg:flex-row min-h-[1200px]">
        <div className="w-full lg:w-2/5 p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#12145E] to-[#0448AD]">
           <img src="/assets/images/ost-infinity-logo.svg" className='w-48' />
          <h2 className="mt-14 mb-6 text-4xl font-bold text-white">Account Recovery</h2>
          <p className="mb-8 text-white/90">
            Your Account Recovery Request is under review.Please follow us to 48 hours for us 
             to contact you with further instructions.You can keep using this form to add
             additional information or upload files.
            {/* contact you with further instructions.You can keep using this form to add additional information or upload files */}
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
           
          


          <form  className="space-y-6">
             
             <div>
                 <div class="flex justify-center items-center border  border-white/30 rounded-md p-2  text-white bg-gradient-to-r from-[#167f3b] to-[#167f3b]">
                <label class="w-full px-4 py-2 rounded-md text-white text-base font-medium">
                  Account Recovery Details update successfully
              </label>
            </div>
             </div>

        
            <div>
                <p>We'd love your feedback to improve your experience! </p>
                <p className='text-gray-500 mt-2'>Estimated time to complete (2-3 minutes)</p>
            </div>
             <div>
                
            </div>


             <div>
        <p class="font-semibold mb-2">Which best describes you?</p>
        <div class="space-y-1">
          <label class="flex items-center gap-2">
            <input type="checkbox" name="describe" class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"  />
            Customer
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="describe" class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"/>
            Visitor
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="describe" class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"/>
            First-time User
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="describe" class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"/>
            Other
          </label>
        </div>
      </div>

      <div>
        <p class="font-semibold mb-2">Age</p>
        <input type="number" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:ring-blue-400"/>
      </div>

       <div>
        <p class="font-semibold mb-2">Gender</p>
        <div class="flex gap-4 space-x-2">
        <label class="mr-4 items-center space-x-2"><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500 peer-checked:scale-100 half-dot" /> <span>Male</span></label>
        <label className='items-center space-x-2'><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500 peer-checked:scale-100 half-dot" /><span> Female</span></label>
        
         </div> 
      </div>
      

         <div>
        <p class="font-semibold mb-2">Location</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>

       <div>
        <p class="font-semibold mb-2">How would you rate your overall experience with ViXa Platform ?</p>
        <div class="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>5</span></label>
        </div>
      </div>


      <div>
        <p class="font-semibold mb-2">How easy was it to complete your goal today ?</p>
        <div class="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>5</span></label>
        </div>
      </div>


       <div>
        <p class="font-semibold mb-2">Did you  encounter any challenges while using ViXA Platform</p>
        <div class="flex gap-4 space-x-2">
        <label class="mr-4 items-center space-x-2"><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /> <span>Yes</span></label>
        <label className='items-center space-x-2'><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> No</span></label>
         </div> 
          <input type="text" class="w-full mt-4 px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>


       <div>
        <p class="font-semibold mb-2">How intuitive was the layout/menu structure ?</p>
        <div class="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>5</span></label>
        </div>
      </div>


      <div>
        <p class="font-semibold mb-2">Where you able to find what you ware looking for? </p>
        <div class="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>yes</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>No</span></label>
         </div>
      </div>


       <div>
        <p class="font-semibold mb-2">If not,what were you searching for ?</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>

      <div>
        <p class="font-semibold mb-2">How did using ViXa Platform make you feel?</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>

      <div>
        <p class="font-semibold mb-2">What did you like most / least ?</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>


       <div>
        <p class="font-semibold mb-2">How likely are you to recommend ViXa Platform to others ?</p>
        <div class="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>5</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>6</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>7</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>8</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>9</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>10</span></label>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">What's one thing we could improve?</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>
      <div>
        <p class="font-semibold mb-2">Is there a feature you are missing?</p>
        <input type="text" class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>

      <div>
        <p class="font-semibold mb-2">Thank you! Would you like to participate in future research ?</p>
        <div class="flex gap-4 space-x-2">
        <label class="mr-4 items-center space-x-2"><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /> <span>Yes</span></label>
        <label className='items-center space-x-2'><input type="radio" name="challenges" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> No</span></label>
         </div> 
      </div>
           
           
           <div>
            <button
              type="submit"
              className="w-full py-3 text-center text-white transition-opacity bg-orange-500 rounded-lg hover:opacity-90"
            >
              Submit Form
            </button>
           </div>
          </form>
        </div>
      </div>
    </section>
  )
}
