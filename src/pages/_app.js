import '../styles/globals.css';
import CookieConsentBanner from '@/components/CookieConsentBanner'

export default function MyApp({ Component, pageProps }) {
  return (
    <section className='w-full bg-gradient-to-r from-[#5D0E71] to-[#03396B] text-white min-h-screen'>
      <CookieConsentBanner />
      <Component {...pageProps} />
    </section>
  )
}
