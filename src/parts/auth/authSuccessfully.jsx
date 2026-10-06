
'use client'

import { useState,useEffect,useRef } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL,token } from '@/pages/api/endpoint'
import axios from 'axios'
import { Angry,Annoyed,Frown, Meh, Smile,Laugh } from 'lucide-react';


export default function AuthSuccessfullySection() {
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


  const [selectedDescribeItems, setSelectedDescribeItems] = useState([]);
  const [score, setScore] = useState("");
  const [experience, setExperience] = useState("");
  const [ease, setEase] = useState("");
  const [challenge, setChallenge] = useState("");
  const [challengesDetails, setChallengeDetails] = useState("");
  const [intuitive, setIntuitive] = useState("");
  const [like, setLike] = useState("");
  const [recommend, setRecommend] = useState("");
  const [toImprove, setToImprove] = useState("");
  const [missing, setMissing] = useState("");
  const [participate, setParticipate] = useState("");
  const [location, setLocation] = useState("");
   const [captchaError, setCaptchaError] = useState('');

const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;
  if (checked) {
    setSelectedDescribeItems([...selectedDescribeItems, value]);
  } else {
    setSelectedDescribeItems(selectedDescribeItems.filter((v) => v !== value));
  }
};


 const handleFeedback = async (e) => {
      e.preventDefault()
      setLoading(true);

     //  const verificationEmail = localStorage.getItem('verificationEmail');

        const userId  =  localStorage.getItem('signupUserId');
      
     try {
      const response = await axios.post(`${API_URL}/user/feedback`, {
            selectedDescribeItems,
            score,
            experience,
            ease,
            challenge,
            challengesDetails,
            location,
            intuitive,
            like,
            recommend,
            toImprove,
            missing,
            participate,
            userId
         },
      {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach JWT here
          },
        })
       console.log("sign up");
       const  res = response.data;
       console.log("result", res.message);
        if( res.status === "error"){
           setCaptchaError(res.message);
        }else if(res.status === "success"){
           setCaptchaError('');
           localStorage.removeItem('signupUserId');
            // localStorage.setItem('verificationCode',res.result.verificationCode);
            // localStorage.setItem('verificationEmail',res.result.email);
           router.push('/auth/login');
        }
         
     } catch (err) {
       console.error('Signup error:', err)
       alert('There was an issue signing up. Please try again.')
     } finally {
       setLoading(false)
     }
  }


  return (
    // <section className="min-h-screen py-30 px-4 bg-gradient-to-r from-[#2E0F57] to-[#012C5F] flex items-center justify-center">
     
    <>
    <section >
      <div className="min-h-screen flex flex-col md:flex-row">
         <div className='md:w-1/3 flex items-center justify-center bg-gradient-to-r from-[#261766] to-[#301869] p-6'>
              <img src="/assets/images/vixa-platforms.svg" alt="Registration Visual"  class="w-2/3 md:w-3/5" />
         </div>
        <div className="md:w-2/3 flex flex-col bg-gradient-to-r from-[#301869] to-[#0448AD] p-6">
         <div className="max-w-2xl  w-full p-6 lg:p-16 bg-gradient-to-r from-[#12145E] to-[#0448AD] border border-[#199AE2] backdrop-blur-sm rounded-lg  text-white text-center">
        <h2 className="mb-1 font-light text-md">Your account has been<br /> successfully created</h2>
      </div>
         <div className="max-w-2xl  w-full p-6 lg:p-16 bg-gradient-to-r mt-10 from-[#12145E] to-[#0448AD]">

          <h3 className="mb-6 text-2xl font-semibold text-white">We'd love your feedback to improve your experience!</h3>
          <p className="mb-6 text-white/90">Estimated time to complete (2-3 minutes)</p>
             <form onSubmit={handleFeedback} class="space-y-6 text-white">
              <div>
        <p className="font-semibold mb-2">Which best describes you?</p>
        <div className="space-y-1">
          <label class="flex items-center gap-2">
            <input type="checkbox" name="selecteddescribeItems"  value="individual"   checked={selectedDescribeItems.includes("individual")}
        onChange={handleCheckboxChange}  class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"  />
            Individual
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="selecteddescribeItems" value="company" checked={selectedDescribeItems.includes("company")}
        onChange={handleCheckboxChange}  class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"/>
            Company
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="selecteddescribeItems" value="other"  checked={selectedDescribeItems.includes("other")}
        onChange={handleCheckboxChange} class="w-4 h-4 bg-transparent appearance-none border border-white checked:bg-orange-500"/>
            Other
          </label>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='flex'>
        <p class="font-semibold mb-2">Scoring rate</p>
        </div>
        <div class="flex items-center gap-4">
       
    <label className="flex flex-col items-center">
      <div className="flex item-center gap-2 ml-3">
      <input type="radio" name="score" value="1"   checked={score === "1"}
          onChange={(e) => setScore(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"/> <span class="text-xs mt-1">1</span>
     </div>
      <Angry className='mt-3'/>
    </label>


    <label class="flex flex-col items-center">
      <div className="flex item-center gap-2 ml-3">
      <input type="radio" name="score" value="2"  checked={score === "2"}
          onChange={(e) => setScore(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" />
      <span class="text-xs mt-1">2</span>
      </div>
     <Frown className='mt-3'/>
    </label>

  
    <label class="flex flex-col items-center">
      <div className="flex item-center gap-2 ml-3">
      <input type="radio" name="score" value="3"  checked={score === "3"}
          onChange={(e) => setScore(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" />
      <span class="text-xs mt-1">3</span>
      </div>
       <Meh className='mt-3'/>
    </label>

   
    <label class="flex flex-col items-center">
      <div className="flex item-center gap-2 ml-3">
      <input type="radio" name="score" value="4"  checked={score === "4"}
          onChange={(e) => setScore(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" />
      <span class="text-xs mt-1">4</span>
      </div>
      <Smile className='mt-3'/>
    </label>

  
    <label class="flex flex-col items-center">
       <div className="flex item-center gap-2 ml-3">
      <input type="radio" name="score" value="5"  checked={score === "5"}
          onChange={(e) => setScore(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" />
      <span class="text-xs mr-2">5</span>
      </div>
     <Laugh className='mt-3'/>
    </label>
        </div>
          
      </div>
      <div>
        <p class="font-semibold mb-2">Location</p>
        <input type="text" onChange={(e) => setLocation(e.target.value)} class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>

      <div>
        <p className="font-semibold mb-2">How would you rate your overall experience with registration?</p>
        <div className="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="experience"  value="1" checked={experience === "1"}
          onChange={(e) => setExperience(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" value="2" checked={experience === "2"}
          onChange={(e) => setExperience(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" value="3" checked={experience === "3"}
          onChange={(e) => setExperience(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" value="4" checked={experience === "4"}
          onChange={(e) => setExperience(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="experience" value="5" checked={experience === "5"}
          onChange={(e) => setExperience(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span>5</span></label>
        </div>
      </div>

       <div>
        <p className="font-semibold mb-2">How easy was it to complete the form?</p>
        <div className="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2"><input type="radio" name="ease" value="1" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"   checked={ease === "1"}
          onChange={(e) => setEase(e.target.value)} /><span> 1</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="ease" value="2" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" checked={ease === "2"}
          onChange={(e) => setEase(e.target.value)}/><span> 2</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="ease" value="3" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" checked={ease === "3"}
          onChange={(e) => setEase(e.target.value)} /><span>3</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="ease" value="4" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" checked={ease === "4"}
          onChange={(e) => setEase(e.target.value)}/><span> 4</span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="ease" value="5" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  checked={ease === "5"}
          onChange={(e) => setEase(e.target.value)}/><span>5</span></label>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Did you encounter any challenges while registration?</p>
         <div className="flex gap-4 space-x-2">
        <label className="flex items-center space-x-2"><input type="radio" name="challenge" value="yes"  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  checked={challenge === "yes"}
          onChange={(e) => setChallenge(e.target.value)} /> <span>Yes</span></label>
        <label className="flex items-center space-x-2"><input type="radio" name="challenge" value="no" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  checked={challenge === "no"}
          onChange={(e) => setChallenge(e.target.value)}/> <span>No</span></label>
         </div>
         <input type="text"  onChange={(e) => setChallengeDetails(e.target.value)} class="w-full mt-4 px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
      </div>


      <div>
        <p className="font-semibold mb-2">How intuitive was the layout/menu structure ?</p>
        <div className="flex gap-4 space-x-2">
        <label className="flex items-center space-x-2"><input type="radio" name="intuitive" value="yes" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  checked={intuitive === "yes"}
          onChange={(e) => setIntuitive(e.target.value)}/> <span>Yes</span></label>
        <label className='flex items-center space-x-2'><input type="radio" name="intuitive" value="no" class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"  checked={intuitive === "no"}
          onChange={(e) => setIntuitive(e.target.value)}/><span> No</span></label>
         </div> 
      </div>

       <div>
        <p className="font-semibold mb-2">What did you like most/least ?</p>
         <input type="text" onChange={(e)=>setLike(e.target.value)} class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>

      <div>
        <p className="font-semibold mb-2">How likely are you to recommend our product to others?</p>
        <div className="flex gap-4 space-x-2">
          <label className="flex items-center space-x-2" ><input type="radio" name="recommend" value="1" checked={recommend === "1"}
          onChange={(e) => setRecommend(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> 1 </span></label>
          <label className="flex items-center space-x-2" ><input type="radio" name="recommend"  value="2" checked={recommend === "2"}
          onChange={(e) => setRecommend(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> 2 </span></label>
          <label className="flex items-center space-x-2" ><input type="radio" name="recommend"  value="3" checked={recommend === "3"}
          onChange={(e) => setRecommend(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /> <span> 3 </span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="recommend"  value="4" checked={recommend === "4"}
          onChange={(e) => setRecommend(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /> <span> 4 </span></label>
          <label className="flex items-center space-x-2"><input type="radio" name="recommend"  value="5" checked={recommend === "5"}
          onChange={(e) => setRecommend(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> 5 </span> </label>
        </div>
      </div>

      <div>
        <p class="font-semibold mb-2">What's one thing we could improve ?</p>
         <input type="text"  onChange={(e) => setToImprove(e.target.value)}    class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
      </div>

      <div>
        <p class="font-semibold mb-2">Is there a feature you're missing?</p>
         <input type="text"  onChange={(e) => setMissing(e.target.value)}  class="w-full px-4 py-2 rounded border border-white/40 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
      </div>

      <div>
        <p class="font-semibold mb-2">Thank you! Would you like to participate in future ?</p>
        <div className="flex gap-4 space-x-2">
        <label className="flex items-center space-x-2"><input type="radio" name="participate" value="yes" checked={participate === "yes"}
          onChange={(e) => setParticipate(e.target.value)}  class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500"/> <span>Yes</span></label>
        <label className="flex items-center space-x-2"><input type="radio" name="participate" value="no" checked={participate === "no"}
          onChange={(e) => setParticipate(e.target.value)} class="w-5 h-5 bg-transparent appearance-none border border-white rounded-full checked:bg-orange-500" /><span> No</span></label>
        </div>
      </div>


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
