import Image from 'next/image'
import { Inter, Nabla } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main>
      <section className='gradient flex flex-col items-center'>
        {' '}
        <NavBar />
        <HeroSection />
      </section>
    </main>
  )
}
