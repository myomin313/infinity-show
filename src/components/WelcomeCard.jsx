import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function WelcomeCard() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="
        fixed z-50 bottom-6 right-6 w-80
        p-0 rounded-2xl overflow-hidden shadow-2xl
        bg-gradient-to-r from-[#03396B] to-[#5D0E71]
      "
    >
      <div className="p-6 bg-gradient-to-r from-[#12145E] to-[#0448AD]">
        <button
          onClick={() => setVisible(false)}
          className="absolute transition-opacity opacity-75 top-4 right-4 hover:opacity-100"
          aria-label="Close"
        >
          <X size={24} color="#fff" />
        </button>

        <div className="flex mb-4 -space-x-3">
          {[
            '/assets/images/avatars/avatar-1.png',
            '/assets/images/avatars/avatar-2.png',
            '/assets/images/avatars/avatar-3.png',
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={48}
              height={48}
              className="rounded-full ring-2"
              alt={`User ${i + 1}`}
            />
          ))}
        </div>

        <h3 className="mb-1 text-xl font-semibold text-white">
          Welcome to Ost Infinity
        </h3>
        <p className="text-sm text-white/90">
          Your Global Ecosystem SOC/NOC Teams
        </p>
      </div>

      <div className="p-6 space-y-3">
        <Link
          href="https://calendly.com/event_types/user/me"
          className="
            block w-full py-2 text-center font-medium text-white
            rounded-full shadow-md
            bg-gradient-to-r from-[#12145E] to-[#0448AD]
            hover:opacity-90 transition-opacity
          "
        >
          Schedule a meeting
        </Link>
        <Link
          href="https://t.me/ostinfinity"
          target="_blank"
          className="
            block w-full py-2 text-center font-medium text-white
            rounded-full shadow-md
            bg-gradient-to-r from-[#12145E] to-[#0448AD]
            hover:opacity-90 transition-opacity
          "
        >
          Chat with our IR Team
        </Link>
      </div>

      <p className="px-6 pb-6 text-xs text-white/80">
        Ost Infinity data correction and protection and usability policy read here{' '}
        <Link href="/privacy-policy" className="underline hover:text-white/90">
          Privacy Policy
        </Link>.
      </p>
    </div>
  )
}
