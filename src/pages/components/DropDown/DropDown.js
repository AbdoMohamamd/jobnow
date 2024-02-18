import React, { useState } from 'react'
import Location from '@/../public/Images/location-icon.svg'
import Image from 'next/image'
import DownArrow from '@/../public/Images/down-arrow.png'
import UpArrow from '@/../public/Images/up-arrow.png'
const DropDown = ({ placeholder, options }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder)
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div
      className='flex items-center justify-start bg-secondary-grey  rounded-lg w-44 relative '
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <Image className='m-1' src={Location} alt='location' />

      <p className='placeholder-black bg-secondary-grey text-xs  font-poppins font-medium'>
        {selectedOption}
      </p>
      {isOpen ? (
        <Image
          className='m-1'
          src={UpArrow}
          width={6}
          height={6}
          alt='arrow-up'
        />
      ) : (
        <Image
          className='m-1'
          src={DownArrow}
          width={9}
          height={9}
          alt='arrow-down'
        />
      )}
      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } top-full w-44 text-xs bg-secondary-grey rounded-lg overflow-y-auto h-24 `}
      >
        {' '}
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className='hover:bg-gray-200 hover:cursor-pointer rounded-lg p-2 '
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown
