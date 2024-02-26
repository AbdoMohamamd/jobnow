import React from 'react'
import RightArrow from '../Svg/RightArrow'
import LeftArrow from '../Svg/LeftArrow'
const FeedbackSection = () => {
  return (
    <div className='container '>
      {' '}
      <h1 className='mb-3 font-bold text-sm md:text-3xl text-center md:text-start font-poppins md:mb-5 md:leading-none'>
        People's FeedBack about JobNow!
      </h1>{' '}
      <div className='flex flex-col text-center md:text-start md:flex-row md:justify-between'>
        {' '}
        <div className='md:pt-2 flex flex-col items-center md:block'>
          {' '}
          <p className='text-8 w-52 mb-5 md:text-xl   font-poppins font-normal text-primary-text-color  md:mb-16 md:w-11/12 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='text-8 w-52  mb-16 md:text-[22px]   font-poppins font-semibold  md:mb-14  md:w-10/12  '>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation."
          </p>
          <div className='w-48 h-44 mb-6  bg-primary-color rounded-xl md:hidden '></div>
          <p className='font-poppins mb-3 font-semibold text-10 md:text-2xl md:mb-6 '>
            Brown Garcia
          </p>
          <p className='text-5 font-poppins font-medium mb-3 md:text-base text-primary-text-color md:mb-7 '>
            Full Stack Developer in XReact Tech
          </p>
          <div className='flex gap-3  md:gap-8'>
            {' '}
            <LeftArrow  />
            <RightArrow />
          </div>
        </div>
        <div className='hidden md:block md:w-[30.25rem] md:h-[29.625rem] bg-primary-color rounded-xl '>
          <p className='text-transparent h-0 hidden md:block'>
            Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmollllllll
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
