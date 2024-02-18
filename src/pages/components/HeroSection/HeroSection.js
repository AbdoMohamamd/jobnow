import React from 'react'
import Image from 'next/image'
import Search from '@/../public/Images/search.svg'
import SearchIcon from '@/../public/Images/search-icon.svg'
import PrivacyIcon from '@/../public/Images/privacy.svg'
import StatsIcon from '@/../public/Images/stats.svg'
import Input from '../Input/Input'
import DropDown from '../DropDown/DropDown'
const HeroSection = () => {
  const locations = [
    'location1',
    'location2',
    'location3',
    'location3',
    'location3',
    'location3',
    'location3'
  ]
  return (
    <div className='block  bg-primary-grey  md:flex    md:w-full  md:bg-secondary-grey '>
      <div className='pt-10 bg-primary-grey flex flex-col items-center md:block md:bg-secondary-grey md:text-start md:w-6/10 md:px-24   md:box-border '>
        <h1 className='text-xl  md:text-header leading-none md:lineHeight-header font-bold md:mt-20 mb-8   font-poppins'>
          Search, Find, & Apply
        </h1>
        <p className='text-8 text-center  md:text-justify font-poppins font-normal md:text-xl bg-red-200 md:container w-60'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className='flex justify-center gap-1 mt-8 mb-20 rounded-xl  md:justify-center md:flex-wrap p-3   bg-white flex-wrap md:rounded-2xl md:p-3 lg:p-4 xl:p-5 md:mb-32 md:mt-14 md:gap-5  lg:w-max'>
          <Input
            placeholder={'Job title or keyword'}
            icon={SearchIcon}
            iconAlt={'SearchIcon'}
            type={'text'}
          />
          <DropDown options={locations} placeholder={'Location'} />
          <button className='bg-primary-color text-7  text-white w-max px-2 py-1 font-bold font-poppins rounded-md md:rounded-2xl  md:px-6 md:py-4 lg:px-6 xl:px-8 md:text-sm'>
            Search
          </button>
        </div>
      </div>
      <div className='bg-primary-color md:w-4/10 box-border text-start md:rounded-bl-5xl'>
        <ul>
          <li className='flex justify-start w-full py-7 px-14 '>
            {' '}
            <Image src={Search} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
          <li className='flex justify-end w-full py-7 px-14 '>
            {' '}
            <Image src={StatsIcon} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
          <li className='flex justify-start w-full  py-7 px-14'>
            {' '}
            <Image src={PrivacyIcon} className='w-12 h-12 md:w-20 md:h-20' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeroSection
