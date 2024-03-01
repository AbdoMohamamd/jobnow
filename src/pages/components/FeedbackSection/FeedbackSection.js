import React from 'react'
import RightArrow from '../Svg/RightArrow'
import LeftArrow from '../Svg/LeftArrow'
const FeedbackSection = () => {
  return (
    <div className='container pb-14 pt-7 md:pt-10 md:pb-40'>
      {' '}
      <h1 className='mb-3 font-bold text-center font-poppins text- md:text-3xl  md:text-start  md:mb-5 md:leading-none'>
        People's FeedBack about JobNow!
      </h1>{' '}
      <div className='flex flex-col text-center md:text-start md:grid md:grid-cols-3'>
        {' '}
        <div className=' flex flex-col items-center md:block md:pt-2 md:col-span-2'>
          {' '}
          <p className='text-8 w-52 mb-5 font-poppins font-normal text-primary-text-color  md:mb-16 md:w-11/12 md:text-xl '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='text-8 w-52  mb-[60px] md:text-[22px]  font-poppins font-semibold  md:mb-14  md:w-10/12  '>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation."
          </p>
          <div className='w-48 h-44 mb-6  bg-primary-color rounded-xl md:hidden '></div>
          <p className='font-poppins mb-3 font-semibold text-10 md:text-2xl md:mb-6 '>
            Brown Garcia
          </p>
          <p className='text-5 font-poppins font-medium  text-primary-text-color mb-3 md:text-base  md:mb-7 '>
            Full Stack Developer in XReact Tech
          </p>
          <div className='flex gap-3  md:gap-8'>
            {' '}
            <LeftArrow />
            <RightArrow />
          </div>
        </div>
        <div className='hidden rounded-xl md:ml-auto md:w-full md:h-[29.625rem] md:block bg-primary-color  '></div>
      </div>
    </div>
  )
}

export default FeedbackSection
