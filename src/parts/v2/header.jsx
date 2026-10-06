import Link from 'next/link'
import Image from 'next/image'
import { Globe, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <section className="w-full text-[10px]">
      <div className="bg-[linear-gradient(90deg,_#F98D11_0%,_#0448AD_50%,_#12145E_100%)]">
        <div className="container flex items-center justify-between px-6 mx-auto h-15 md:px-16">
          <Link href="/">
            <Image
              src="/assets/images/ost-infinity-logo-white.png"
              alt="OST Infinity"
              width={100}
              height={24}
            />
          </Link>
          <div className="flex items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-white cursor-pointer">
                <Globe size={14} />
                <span className="text-xs font-medium">EN</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
