import Image from 'next/image'
import { Inter, Nabla } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import ExplanationSection from './components/ExplanationSection/ExplanationSection'
import PopularJobSection from './components/PopularJobSection/PopularJobSection'
import RecentJobsSection from './components/RecentJobsSection/RecentJobsSection'
import FeedbackSection from './components/FeedbackSection/FeedbackSection'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main>
      <section className='gradient'>
        {' '}
        <NavBar />
        <HeroSection />
      </section>
      <section className='bg-primary-grey'>
        <ExplanationSection />
      </section>
      <section className='bg-primary-color bg-opacity-5'>
        <PopularJobSection />
      </section>
      <section className=' bg-primary-grey'>
        <RecentJobsSection />
      </section>
      <section className='bg-primary-grey  '>
        <FeedbackSection />
      </section>
      <section className='  footer-gradient  '>
        <div className=' container   '>
          <div className=' pt-3 pb-4 px-3   bg-secondary-color rounded-xl  text-center md:pt-16 md:pb-14 md:px-14'>
            {' '}
            <h1 className='font-poppins font-semibold text-xs mb-3 md:text-4xl text-white md:mb-8'>
              Register your CV now!
            </h1>
            <p className='font-poppins font-normal text-8 mb-2 md:text-xl text-[#AAAAAA] md:mb-8 w-6/12 mx-auto'>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className=' md:w-44 md:h-14 md:text-base w-20 h-6  mt-1 md:mt-0  text-8 rounded-md  border-white border   md:border-2 font-poppins font-medium text-white md:rounded-lg hover:bg-white hover:text-secondary-color transition-all ease-in-out duration-300'>
              Register Now
            </button>
          </div>
        </div>
      </section>
      <section className='bg-primary-color  '>
        <Footer />
      </section>
    </main>
  )
}
