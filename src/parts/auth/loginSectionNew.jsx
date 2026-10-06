'use client'

import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { User, Lock, Eye, EyeOff } from 'lucide-react'
// import {API_URL} from '../pages/api/endpoint'
import { API_URL } from '@/pages/api/endpoint'
import { useRouter } from 'next/router';
import LoginIllustration from '@/components/LoginIllustration'
import { BASE_IMAGE_URL } from '@/pages/api/endpoint'
import axios from 'axios'

export default function LoginSection() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loginError, setLoginError] = useState('');
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const togglePassword = () => setShowPassword(v => !v)


  const validate = () => {
        const newErrors = {};
  
        if (!username) newErrors.username = 'Account Id or Email is required';
        if (!password ) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };


  const handleSubmit = async (e) => {
        e.preventDefault()
    if (!validate())  return false;

    try {
        const formData = new FormData();
        formData.append('identifier', username);
        formData.append('password', password);
        const response = await axios.post(`${API_URL}/user/login`, {
          identifier:username,
          password:password
        });
            
           const res = await response.data;
          // const result = json.result;
          //console.log("user",result.token);
        if(res.status == 'success'){
            localStorage.setItem('userId', res._id);
            localStorage.setItem('token', res.token);
            router.push('/admin/admin-console')
          //  router.push(`/checkout?price=${price}`);
        }else{
           setLoginError(res.message);
        }
    
      } catch (err) {
        console.error('Login error:', err.message);
      }

  }


    //background image
     const set = ['login/ViXa-aI.svg', 'login/vixa-platforms.svg', 'login/xdr-img.svg','login/network.svg']
    const total = set.length
    const clamp = (i) => (i < 1 ? 1 : i > total ? total : i)
    const [current, setCurrent] = useState(1)
  
    const prev = () => setCurrent((c) => clamp(c === 1 ? total : c - 1))
    const next = () => setCurrent((c) => clamp(c === total ? 1 : c + 1))
  
    const currentImage = set[current - 1]
  
    useEffect(() => {
      const timer = setInterval(() => {
        next()
      }, 5000)
      return () => clearInterval(timer)
    }, [current]) // ✅ useEffect should re-run if `current` changes

  return (
    // <>
    //  <section className="relative  bg-cover" 
    //   style={{
    //     backgroundImage: `url('${BASE_IMAGE_URL}/login/login-bg.png')`,
    //     backgroundPosition: '0% -100px',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100% auto'
    //   }}>
     
    <section className="relative min-h-screen bg-cover bg-fixed" 
     style={{
       backgroundImage: `url('${BASE_IMAGE_URL}/login/login-bg.png')`,
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundAttachment: 'fixed'
      }}>
        
      
      <div className="container mx-auto px-6 md:px-16 py-15">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Login Form - Left Side */}
          <div className="w-full md:w-1/2 max-w-md">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-semibold">Login to OST INFINITY</h2>
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm">Account Id or  Email</label>
              <div className="relative">
                <User className="absolute transform -translate-y-1/2 left-3 top-1/2 text-white/50" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="account id or email"
                  className="w-full py-2 pl-10 pr-4 rounded-md bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                 
                />
              </div>
                {errors.username && <p className="text-red-500 text-sm mt-2">{errors.username}</p>}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm">Password</label>
                <Link href="#" className="text-xs text-orange-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute transform -translate-y-1/2 left-3 top-1/2 text-white/50" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full py-2 pl-10 pr-10 rounded-md bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute transform -translate-y-1/2 right-3 top-1/2 text-white/50 focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-orange-500 rounded bg-white/10 focus:ring-orange-400"
              />
              <label htmlFor="remember" className="text-sm">Remember Me</label>
            </div>
             <span></span>
            <button
              type="submit"
              className="w-full py-3 font-medium transition bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Log In
            </button>
              {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}
            <button
              type="button"
              className="w-full py-3 font-medium transition border border-white rounded-md hover:bg-white/10"
            >
              Log In with SSO
            </button>

            <div className="space-y-2 text-center">
              <Link href="/auth/recovery" className="text-sm text-white/70 hover:underline">
                Account Recovering
              </Link>
              <p className="text-xs text-white/50">
                Do not have an account?{' '}
                <Link href="/auth/email" className="text-orange-400 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            <p className="text-[10px] text-white/50">
              By continuing, you agree to Ost Infinity Framework Agreement or other agreement for OST Infinity services, and the{' '}
              <Link href="/privacy-policy" className="underline hover:text-white">Privacy Notice</Link>.
              This site uses essential cookies. See our{' '}
              <Link href="#" className="underline hover:text-white">Cookie Notice</Link> for more information.
            </p>
          </form>
        </div>


        <div className="flex py-10 items-center justify-center w-full md:w-1/2 px-4 pt-10 relative"> {/* Added relative here */}
  <Image 
    src={`${BASE_IMAGE_URL}/${currentImage}`}  
    alt={`OST ${current}`}
    width={450}
    height={200}
  />
  
</div>
 
  

     


         {/* <div className="flex justify-center  w-full md:w-1/2 pt-10">
          <Image 
          src={`${BASE_IMAGE_URL}/login/ViXa-aI.svg`}  
          alt="OST Infinity"
              width={500}
              height={200}/>
         </div> */}

            {/* <LoginIllustration
        src={['login-ost-shape.png', 'manage-security-service.png', 'managed-security.svg']}
        initial={1}
        autoSlide={true}
        interval={5000}
      />  */}
      </div>

        <div className="flex items-center justify-center w-full px-4 py-10 relative">

   {total > 1 && (
    <div className="absolute bottom-0 right-12 z-10 flex items-center space-x-4 text-xs text-white">
      <button onClick={prev} className="transition hover:text-orange-400">
        &lt;
      </button>
      <span className="text-white/80 font-mono">
        {String(current).padStart(2, '0')}
        <span className="mx-2 text-[#199AE2]">/</span>
        {String(total).padStart(2, '0')}
      </span>
      <button onClick={next} className="transition hover:text-orange-400">
        &gt;
      </button>
    </div>
  )}

</div>
      </div>
     
      </section>
  
  )
}
