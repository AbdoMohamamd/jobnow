import Image from 'next/image'
import { Inter, Nabla } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import ExplanationSection from './components/ExplanationSection/ExplanationSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main>
      <section className='gradient flex flex-col items-center md:px-20'>
        {' '}
        <NavBar />
        <HeroSection />
      </section>
      <section className='px-7 pt-14 md:px-20  flex justify-center md:pt-150  bg-primary-grey'>
        <ExplanationSection />
      </section>
    </main>
  )
}
