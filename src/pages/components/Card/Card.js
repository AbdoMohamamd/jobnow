import React from 'react'
import Image from 'next/image'

const Card = ({ icon, title, text }) => {
  return (
    <div className='relative  bg-white w-36 pl-3 pt-4 pb-4 pr-8 transition-colors duration-300 ease-in-out rounded-xl md:pt-9 md:pl-7 md:pr-14 md:w-80 md:pb-9'>
      <Image
        src={icon}
        className='w-5 h-5 ml-1 mb-3 md:w-43 md:h-43 md:ml-2 md:mb-7'
      />
      <h1 className='text-10 mb-2 font-poppins font-semibold transition-colors duration-300 ease-in-out md:text-xl  md:mb-5'>
        {title}
      </h1>
      <p className='text-5 md:text-xs font-poppins font-normal transition-colors duration-300 ease-in-out text-primary-text-color'>
        {' '}
        {text}
      </p>
    </div>
  )
}

export default Card
