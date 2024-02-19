import React, { useState } from 'react'
import Location from '@/../public/Images/location-icon.svg'
import Image from 'next/image'
import DownArrow from '@/../public/Images/down-arrow.svg'
import UpArrow from '@/../public/Images/up-arrow.svg'

const DropDown = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder)
  const [isOpen, setIsOpen] = useState(false)
  // const options = [
  //   'location1',
  //   'location2',
  //   'location4',
  //   'location5',
  //   'location6',
  //   'location7',
  //   'location8',
  // ]
  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div
      className='flex items-center justify-start bg-secondary-grey w-24  rounded-md md:rounded-2xl  relative  box-border md:w-4/12  '
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <Image
        className='m-1  w-2 h-2 md:w-5 md:h-5'
        src={Location}
        alt='location'
      />

      <p className='placeholder-black bg-secondary-grey text-7  md:text-sm  font-poppins font-medium'>
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
        } top-full w-24   text-7 md:text-sm bg-secondary-grey rounded-lg overflow-y-auto h-24 md:w-full`}
      >
        {' '}
        {options?.map(option => (
          <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className='hover:bg-gray-200 hover:cursor-pointer rounded-lg p-2  '
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown
