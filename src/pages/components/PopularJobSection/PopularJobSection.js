import React from 'react'

// Import Swiper styles
import 'swiper/css'
import CustomSwiper from '../CustomSwiper/CustomSwiper'
import JobCategorieCard from '../JobCategorieCard/JobCategorieCard'
import Design from '../Svg/design'
import Accounting from '../Svg/accounting'
import Bank from '../Svg/bank'
import Clock from '../Svg/clock'
import MainButton from '../MainButton/MainButton'
import Support from '../Svg/support'

const PopularJobSection = () => {
  const jobCategorieCards = [
    <JobCategorieCard
      icon={<Design />}
      title={'Design and Development'}
      numberOfJobs={350}
    />,
    <JobCategorieCard
      icon={<Accounting />}
      title={'Accounting and Finance'}
      numberOfJobs={350}
    />,
    <JobCategorieCard
      icon={<Bank />}
      title={'Bank Instituion'}
      numberOfJobs={350}
    />,
    <JobCategorieCard
      icon={<Clock />}
      title={'Product Management'}
      numberOfJobs={350}
    />,
    <JobCategorieCard
      icon={<Support />}
      title={'Customer Support'}
      numberOfJobs={350}
    />
  ]

  return (
    <div className='w-full'>
      {' '}
      <div className=' flex flex-col items-center mx-auto '>
        <h1 className=' mb-3 mr-7 md:mr-20  font-semibold text-sm md:text-38 font-poppins md:mb-8 md:leading-tight md:text-wrap     '>
          Popular Job Categories
        </h1>{' '}
        <p className='max-w-72 mr-7 md:mr-20  text-8  mb-5 md:text-xl text-center   font-poppins font-normal text-primary-text-color  md:mb-14 md:max-w-3xl '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className='flex justify-center'>
        <CustomSwiper cards={jobCategorieCards} />
      </div>
      <div className='text-center mt-5 md:mt-12'>
        <MainButton text={'View More'} small={false} />
      </div>
    </div>
  )
}

export default PopularJobSection
