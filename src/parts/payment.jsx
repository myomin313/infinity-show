import React from 'react';
import PricingSection from '@/components/Pricing'

export default function Payment() {
  return (
    <section className="container px-4 py-20 mx-auto text-center sm:px-8 md:px-16">
      <p className="inline-block px-4 py-1 mb-6 text-xl rounded-full bg-white/5">
        Bring your security and network visibility to the best scale
      </p>
      <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-[linear-gradient(to_bottom,_#FFFFFF_30%,_#999999_100%)]">
        Discover Product and Services<br/>
        that best suit your IT landscape with the<br/>
        best pricing
      </h2>
      <p className="text-base text-white/80 md:text-lg">
        Select from best plan, ensuring a perfect match. Need more or less?<br/>
        Customize your subscription for a seamless fit!
      </p>
      <PricingSection />
    </section>
  );
}
