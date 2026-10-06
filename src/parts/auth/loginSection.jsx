'use client'

import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { User, Lock, Eye, EyeOff } from 'lucide-react'
// import {API_URL} from '../pages/api/endpoint'
import { API_URL } from '@/pages/api/endpoint'
import { useRouter } from 'next/router'


export default function LoginSection() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  // const serviceId=  localStorage.getItem('serviceId');

  const togglePassword = () => setShowPassword(v => !v)

  const handleSubmit = async (e) => {
    e.preventDefault()

       if (rememberMe) {
      localStorage.setItem('rememberedEmail', username);
      localStorage.setItem('rememberedPassword', password); 
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    try {
        const formData = new FormData();
        formData.append('identifier', username);
        formData.append('password', password);
        const response = await fetch(`${API_URL}/user/login`, {
          method: 'POST',
          body: formData,
        });
            
           const json = await response.json();
           const result = json.result;
          //console.log("user",result.token);
        if(json.status == 'success'){
          console.log("success");
            localStorage.setItem('userId', result.user._id);
            localStorage.setItem('token', result.token);
            router.push('/');
        }else{
          // console.log("else error",json.message);
           setLoginError(json.message);
        }
    
      } catch (err) {
           setLoginError("Failed to Login Please Try Again")
           console.log("else error");
        // console.error('Login error:', err.message);
      }
  }
   
   useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedEmail && rememberedPassword) {
      setUsername(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);


  return (
    <>
      <div
        className="flex min-h-screen text-white bg-center bg-cover"
        style={{
          backgroundImage: `url('/assets/images/login-ost-shape.png')`,
          backgroundPosition: '0% -180px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      >
        <div className="flex justify-center w-full md:w-1/2 pt-25">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-semibold">Login to OST INFINITY</h2>
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm">Username or email</label>
              <div className="relative">
                <User className="absolute transform -translate-y-1/2 left-3 top-1/2 text-white/50" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username or email"
                  className="w-full py-2 pl-10 pr-4 rounded-md bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
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
                  required
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
            {loginError && (
            <div className="flex items-center space-x-1">
                <span className='text-red-500'>{loginError}</span>
             </div>
             )}
            <button
              type="submit"
              className="w-full py-3 font-medium transition bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full py-3 font-medium transition border border-white rounded-md hover:bg-white/10"
            >
              Log In with SSO
            </button>

            <div className="space-y-2 text-center">
              <Link href="/auth/recovery" className="text-sm text-orange-400 hover:underline">
                Account Recovering
              </Link>
              <p className="text-xs text-white/50 mt-2">
                Do not have an account?{' '}
                <Link href="/auth/email" className="text-orange-400 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            <p className="text-[10px] text-white/50">
              By continuing, you agree to Ost Infinity Framework Agreement or other agreement for Ost Infinity services, and the{' '}
              <Link href="/privacy-policy" className="underline hover:text-white">Privacy Notice</Link>.
              This site uses essential cookies. See our{' '}
              <Link href="#" className="underline hover:text-white">Cookie Notice</Link> for more information.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
