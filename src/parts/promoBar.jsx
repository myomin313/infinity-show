import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PromoBar() {
  return (
    <>
        <section className='container mx-auto mt-2 mb-10'>
            <div className='flex px-16'>
                <div>
                    <Link
                        href="#learn-more"
                        className="inline-flex items-center px-8 py-3 bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] font-medium hover:opacity-90 p-5"
                    >
                        <span>Free Trial</span>
                        <span className="ml-30">
                        <ArrowRight className="w-5 h-8" />
                        </span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="#promo-center"
                        className="inline-flex items-center px-6 py-3 bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] font-medium hover:opacity-90 p-5"
                    >
                        <span>Promo Centre</span>
                        <span className="ml-30">
                        <ArrowRight className="w-5 h-8" />
                        </span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="#vixa-identity-first"
                        className="inline-flex items-center px-6 py-3 bg-[#199AE2] font-medium hover:opacity-90 p-5"
                    >
                        <span>ViXa Identity-First Platform Studio</span>
                        <span className="ml-40">
                        <ArrowRight className="w-5 h-8" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}
