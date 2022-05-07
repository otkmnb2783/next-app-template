import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect } from 'react'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

function MyApp({ Component, pageProps, router }: AppProps) {
  if (window) {
    nprogress.start()
  }
  useEffect(() => {
    nprogress.done()
  }, [router.pathname])
  return <Component {...pageProps} />
}

export default MyApp
