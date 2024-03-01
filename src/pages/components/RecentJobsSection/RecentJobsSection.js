import RecentJobsCard from '../RecentJobsCard/RecentJobsCard'
import DimensionStudioLogo from '@/../public/Images/dimension-studio-logo.png'
import AlpanderLogo from '@/../public/Images/alpander-logo.png'
import XReactTechLogo from '@/../public/Images/xreact-tech-logo.png'
import CustomSwiper from '../CustomSwiper/CustomSwiper'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode } from 'swiper/modules'
import MainButton from '../MainButton/MainButton'
const RecentJobsSection = () => {
  const cards = [
    <RecentJobsCard
      companyLogo={DimensionStudioLogo}
      companyName={'Dimension Studio'}
      jobTitle={'UI/UX Designer'}
      jobType={'Full time'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
      }
      location={'San Fransisco, CA'}
    />,    <RecentJobsCard
    companyLogo={AlpanderLogo}
    companyName={'Alpander'}
    jobTitle={'Full Stack developer'}
    jobType={'Full time'}
    description={
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    }
    location={'San Fransisco, CA'}
  />,    <RecentJobsCard
  companyLogo={XReactTechLogo}
  companyName={'XReact Tech'}
  jobTitle={'Product Designer'}
  jobType={'Full time'}
  description={
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }
  location={'San Fransisco, CA'}
/>,

  ]
  return (
    <div className='container pb-7 pt-14     md:pt-40 md:pb-24 '>
      <div className='flex items-center flex-col'>
        {' '}
        <h1 className='mb-4 font-bold text-sm md:text-3xl font-poppins md:mb-10 md:leading-none'>
          Recently added Jobs
        </h1>{' '}
        <p className='max-w-72  text-8  mb-5 md:text-base text-center   font-poppins font-normal text-primary-text-color  md:mb-14 md:max-w-3xl '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <CustomSwiper cards={cards}/>
      <div  className='mt-5 md:mt-12 text-center'> <MainButton small={false} text={'View More'}/></div>
    </div>
  )
}

export default RecentJobsSection
