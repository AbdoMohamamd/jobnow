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
    <div className='flex    w-full  bg-secondary-grey '>
      <div className='bg-secondary-grey w-6/10 px-24   box-border '>
        <h1 className='text-header font-bold mt-20 mb-8   font-poppins'>
          Search, Find, & Apply
        </h1>
        <p className='text-justify font-normal text-xl bg-red-200 container'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className='flex justify-center w-max bg-white flex-wrap rounded-xl p-5 mb-32 mt-14 gap-5 '>
          <Input
            placeholder={'Job title or keyword'}
            icon={SearchIcon}
            iconAlt={'SearchIcon'}
            type={'text'}
          />
          <DropDown options={locations} placeholder={'Location'} />
          <button className='bg-primary-color  text-white w-max font-semibold py-1 px-4 rounded-lg text-xs'>
            Search
          </button>
        </div>
      </div>
      <div className='bg-primary-color w-4/10 box-border text-start rounded-bl-5xl'>
        <ul>
          <li className='flex justify-start w-full py-7 px-14 '>
            {' '}
            <Image src={Search} />
          </li>
          <li className='flex justify-end w-full py-7 px-14'>
            {' '}
            <Image src={StatsIcon} />
          </li>
          <li className='flex justify-start w-full  py-7 px-14'>
            {' '}
            <Image src={PrivacyIcon} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeroSection
