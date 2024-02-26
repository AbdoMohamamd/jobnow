import React from 'react'
// import DimensionStudioLogo from '@/../public/Images/dimension-studio-logo.svg'
import DimensionStudioLogo from '@/../public/Images/dimension-studio-logo.png'
import Location from '@/../public/Images/location-icon.svg'
import Bag from '@/../public/Images/bag.svg'
import RightArrow from '@/../public/Images/right-arrow.svg'
import Image from 'next/image'
const RecentJobsCard = ({
  companyLogo,
  companyName,
  jobTitle,
  description,
  location,
  jobType
}) => {
  return (
    <div className='w-[10rem] h-[13rem]  pt-4 pl-4 mr-5 pr-4 md:w-[27.875rem] md:h-[33rem] md:pt-9 md:pl-9 md:pr-11  bg-white rounded-xl md:mr-12'>
      <div className='w-9 h-9 mb-3 md:w-24 md:h-24 md:mb-8'>
        <Image
          src={companyLogo}
          className='rounded-full w-9 h-9 md:w-24 md:h-24 object-cover '
        />
      </div>
      <h1 className='font-poppins font-semibold mb-2  text-8 md:text-xl md:mb-5'>
        {jobTitle}
      </h1>
      <p className='font-poppins font-semibold text-[0.375rem] md:text-base mb-4 text-primary-text-color md:mb-9 '>
        {companyName}
      </p>
      <p className='text-5 mb-3 md:mb-7 font-poppins text-primary-text-color md:text-sm text-justify '>
        {' '}
        {description}
      </p>
      <div className='flex mb-3 gap-1 md:gap-3 md:mb-7'>
        {' '}
        <div className='w-max md:py-3 md:pl-4 bg-secondary-grey rounded-sm md:rounded-xl flex md:pr-3 items-center p-1 '>
          <Image
            src={Location}
            className='mr-1 md:mr-3 w-2 h-2 md:w-4 md:h-5'
          />
          <p className='font-poppins font-medium text-5 md:text-sm'>
            {location}
          </p>
        </div>
        <div className='w-max md:py-3 md:pl-4 bg-secondary-grey rounded-sm md:rounded-xl flex md:pr-3 items-center p-1 '>
          <Image src={Bag} className='mr-1 md:mr-3 w-2 h-2 md:w-4 md:h-5' />
          <p className='font-poppins font-medium text-5 md:text-sm'>
            {jobType}
          </p>
        </div>
      </div>
      <div className='flex items-center  gap-2 md:gap-5'>
        <p className='font-poppins font-semibold  text-8 text-primary-color md:text-xl'>
          Apply Now
        </p>
        <Image src={RightArrow} className='w-[2px] h-[5px] md:w-2 md:h-4' />{' '}
      </div>
    </div>
  )
}

export default RecentJobsCard
