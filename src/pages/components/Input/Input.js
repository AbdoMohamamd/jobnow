import React from 'react'

import Image from 'next/image'
const Input = ({ placeholder, icon, iconAlt, type }) => {
  return (
    <div className='flex items-center bg-secondary-grey rounded-lg p-1 w-56  '>
      <Image className='m-1' src={icon} alt={iconAlt} />
      <input
        type={type}
        placeholder={placeholder}
        className='placeholder-black bg-secondary-grey  text-xs flex-1 focus:outline-none font-poppins font-medium '
      />
    </div>
  )
}

export default Input
