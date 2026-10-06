import React, { useState } from 'react';
import { BASE_IMAGE_URL } from '@/pages/api/endpoint';

export default function PeneHeroIllustration({ src, initial = 1 }) {
  const images = Array.isArray(src) ? src : [src];
  const total = images.length;

  const clamp = i => (i < 1 ? 1 : i > total ? total : i);
  const [current, setCurrent] = useState(clamp(initial));

  const prev = () => setCurrent(c => clamp(c === 1 ? total : c - 1));
  const next = () => setCurrent(c => clamp(c === total ? 1 : c + 1));

  const illustration = images[current - 1];

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE_IMAGE_URL}/${illustration})` }}
      />

      {total > 1 && (
        <div className="absolute flex items-center space-x-4 text-xs text-[#686868] bottom-4 left-4 z-10">
          <button onClick={prev} className="transition-colors hover:text-orange-400">
            &lt;
          </button>
          <span className="text-white/50">
            <span className="font-mono">{String(current).padStart(2, '0')}</span>
            <span className="mx-2 text-[#199AE2]">/</span>
            <span className="font-mono">{String(total).padStart(2, '0')}</span>
          </span>
          <button onClick={next} className="transition-colors hover:text-orange-400">
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
