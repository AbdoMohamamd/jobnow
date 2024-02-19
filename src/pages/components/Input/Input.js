import React from 'react'
import Image from 'next/image'

const Input = ({ placeholder, icon, iconAlt, type }) => {
  return (
    <div className='flex items-center p-1  bg-secondary-grey rounded-md md:rounded-2xl md:p-3 md:w-44 xl:w-64  '>
      <Image className='mr-1 md:mr-3 w-2 h-2 md:w-4 md:h-4' src={icon} alt={iconAlt} />
      <input
        type={type}
        placeholder={placeholder}
        className='placeholder-black bg-secondary-grey focus:border-transparent outline-none text-7 md:text-sm w-full  font-poppins font-medium '
      />
    </div>
  )
}

export default Input
