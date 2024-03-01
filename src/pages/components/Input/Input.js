import React from 'react'
import Image from 'next/image'

const Input = ({ placeholder, icon, iconAlt, type }) => {
  return (
    <div className='flex items-center p-1 bg-secondary-grey rounded-md md:rounded-xl  md:w-5/12  '>
      <Image className='m-1 w-2 h-2 md:w-5 md:h-5' src={icon} alt={iconAlt} />
      <input
        type={type}
        placeholder={placeholder}
        className='w-full placeholder-black bg-secondary-grey focus:border-transparent outline-none text-7 md:text-sm   font-poppins font-medium '
      />
    </div>
  )
}

export default Input
