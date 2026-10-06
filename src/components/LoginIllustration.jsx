'use client';

import React, { useState, useEffect } from 'react';
import { BASE_IMAGE_URL } from '@/pages/api/endpoint';

export default function LoginIllustration({ src, initial = 1, autoSlide = true, interval = 5000 }) {
  const images = Array.isArray(src) ? src : [src];
  const total = images.length;

  const clamp = (i) => (i < 1 ? 1 : i > total ? total : i);
  const [current, setCurrent] = useState(clamp(initial));

  const prev = () => setCurrent((c) => clamp(c === 1 ? total : c - 1));
  const next = () => setCurrent((c) => clamp(c === total ? 1 : c + 1));

  const currentImage = images[current - 1];

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url('${BASE_IMAGE_URL}/login/${currentImage}')`,
        
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Navigation controls */}
      {total > 1 && (
        <div className="absolute bottom-6 left-6 z-10 flex items-center space-x-4 text-xs text-white">
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

      {/* Content slot (if needed later) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* You can insert login form or other content here */}
      </div>
    </div>
  );
}
