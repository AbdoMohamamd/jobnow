import React from 'react'
import Image from 'next/image'
import Register from '@/../public/Images/register.svg'
const Card = ({ icon, title, text }) => {
  return (
    <div className='bg-white w-36 pl-3 pt-4 pb-4 mb-4 pr-8   md:mb-6  rounded-xl md:pt-9 md:pl-7 md:pr-14 md:w-72  md:pb-9   relative  transition-colors duration-300 ease-in-out'>
      <Image
        src={icon}
        className='w-5 h-5 ml-1 mb-3 md:ml-2 md:mb-7 md:w-43 md:h-43'
      />
      <h1 className='text-10 mb-2 md:text-xl font-poppins font-semibold md:mb-5   transition-colors duration-300 ease-in-out'>
        {title}
      </h1>
      <p className='text-5 md:text-xs font-poppins font-normal   transition-colors duration-300 ease-in-out '>
        {' '}
        {text}
      </p>
    </div>
  )
}

export default Card
