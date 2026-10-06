import React, { useState } from 'react';

export default function HeroIllustration({ src, initial = 1 }) {
  const images = Array.isArray(src) ? src : [src];
  const total = images.length;

  const clamp = i => (i < 1 ? 1 : i > total ? total : i);
  const [current, setCurrent] = useState(clamp(initial));

  const prev = () => setCurrent(c => clamp(c === 1 ? total : c - 1));
  const next = () => setCurrent(c => clamp(c === total ? 1 : c + 1));

  const illustration = images[current - 1];

  return (
    <div className="relative flex w-full h-full p-10">
      <div className='flex items-center justify-center w-full p-10 overflow-hidden min-h-155 max-h-165'>
        <img
          src={`/assets/images/${illustration}`}
          alt={`Slide ${current}`}
          className="w-full max-w-lg -mr-20"
        />
      </div>

      {total > 1 && (
        <div className="absolute flex items-center space-x-4 text-xs text-[#686868] bottom-4 left-4">
          <button onClick={prev} className="transition-colors hover:text-orange-400">
            &lt;
          </button>
          <span className="text-white/50">
            <span className="font-mono">{String(current).padStart(2,'0')}</span>
            <span className="mx-2 text-[#199AE2]">/</span>
            <span className="font-mono">{String(total).padStart(2,'0')}</span>
          </span>
          <button onClick={next} className="transition-colors hover:text-orange-400">
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
