import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../parts/header'
import Hero from '@/parts/hero'
import PromoBar from '../parts/v2/promoBar'
import SupportStructure from '../parts/SupportStructure'
import FloatingContact from '@/components/FloatingContact'
import WelcomeCard from '@/components/WelcomeCard'
import Cybersecurity from '@/parts/cybersecurity'
import Footer from '@/parts/footer'
import Image from 'next/image'

export default function OSTInfinityDeck() {
  return (
   <div class="min-h-screen flex flex-col md:flex-row">
  <div class="md:w-1/3 flex items-center justify-center bg-gradient-to-b from-[#1b1464] to-[#2e3192] p-6">
      <Image src="/path/to/loginemail.png" alt="Vixa Logo" class="w-2/3 md:w-3/5"/>
  </div>
  <div class="md:w-2/3 flex items-center justify-center bg-gradient-to-b from-[#2e3192] to-[#1b1464] p-6">
    <form class="w-full max-w-md space-y-4 text-white">
      <h2 class="text-2xl font-semibold">To Get Started, Create Your Account</h2>
      <p class="text-sm">Administrators will process your request. For any urgent cases, please call us via our communication channels.</p>

      <div>
        <label class="block text-sm mb-1">Your Email Address*</label>
        <input type="email" class="w-full p-2 rounded bg-white text-black" />
      </div>

      <div>
        <label class="block text-sm mb-1">Confirm Your Email Address*</label>
        <input type="email" class="w-full p-2 rounded bg-white text-black" />
      </div>

      <div class="flex items-center space-x-4">
        <Image src="/path/to/captcha.png" alt="CAPTCHA" class="h-12" />
        <input type="text" placeholder="Enter CAPTCHA" class="flex-1 p-2 rounded bg-white text-black" />
      </div>

      <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
        Submit Form
      </button>

      <p class="text-xs">The data collected here will be saved to your account. Please visit our <a href="#" class="underline">privacy policy</a>.</p>
    </form>
  </div>
</div>


  )
}
