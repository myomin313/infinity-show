import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = 'YOUR_CRISP_WEBSITE_ID'

    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return null
}
