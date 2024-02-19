import '@/styles/globals.css'

import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },

    {
      path: '../../public/fonts/Poppins-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.ttf',
      weight: '600'
    },

    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})
export default function App ({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable}  `}>
      <Component {...pageProps} />
    </main>
  )
}
