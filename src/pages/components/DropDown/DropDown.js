import React, { useState } from 'react'
import Location from '@/../public/Images/location-icon.svg'
import Image from 'next/image'
import DownArrow from '@/../public/Images/down-arrow.svg'
import UpArrow from '@/../public/Images/up-arrow.svg'

const DropDown = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder)
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div
      className='flex items-center justify-start bg-secondary-grey w-24 rounded-md relative box-border md:rounded-xl md:w-4/12'
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <Image
        className='m-1 w-2 h-2 md:w-5 md:h-5'
        src={Location}
        alt='location'
      />

      <p className='placeholder-black bg-secondary-grey text-7 font-poppins font-medium md:text-sm'>
        {selectedOption}
      </p>
      {isOpen ? (
        <Image className='m-1 w-1 h-1 md:w-2 md:h-2' src={UpArrow} />
      ) : (
        <Image className='m-1 w-1 h-1 md:w-2 md:h-2' src={DownArrow} />
      )}
      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } top-full w-24 text-7 bg-secondary-grey rounded-lg overflow-y-auto h-24 md:w-full md:text-sm`}
      >
        {' '}
        {options?.map(option => (
          <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className='rounded-lg p-2 hover:bg-gray-200 hover:cursor-pointer'
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown
