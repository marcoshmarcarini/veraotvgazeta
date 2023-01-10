import '../styles/globals.css'
import localFont from '@next/font/local'
import {Montserrat} from '@next/font/google'

export const brasb = localFont({ src: '../pages/fonts/BRASB.ttf', variable: '--brasb' })
export const claron = localFont({src: '../pages/fonts/claron.ttf', variable: '--claron'})
export const montserrat = Montserrat({ style: "normal" })


function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
