import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FloatingContact({
  phoneHref = 'tel:+4916095878645',
  chatHref  = 'https://t.me/ostinfinity',
}) {
  return (
    <div className="fixed z-50 flex flex-col items-center space-y-5 bottom-25 right-15">
      <Link
        href={phoneHref}
        aria-label="Call Us"
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
      >
        <Image
          src="/assets/images/icons/phone.png"
          alt="Phone icon"
          width={50}
          height={50}
          unoptimized
        />
      </Link>
      <Link
        href={chatHref}
        target="_blank"
        aria-label="Live Chat"
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
      >
        <Image
          src="/assets/images/icons/chat.png"
          alt="Chat icon"
          width={50}
          height={50}
          unoptimized
        />
      </Link>
    </div>
  )
}
