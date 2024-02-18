import React from 'react'
import Image from 'next/image'
import SearchIcon from '@/../public/Images/search-icon.svg'
import PrivacyIcon from '@/../public/Images/privacy.svg'
import StatsIcon from '@/../public/Images/stats.svg'
const HeroSection = () => {
  return (
    <div className='flex    w-full  bg-red-800'>
      <div className='bg-secondary-grey w-6/10  box-border flex'>
      <h1 className='text-3xl font-bold mx-auto my-6'>Search, Find, & Apply</h1>
      <p className='w-8/12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      </div>
      <div className='bg-primary-color w-4/10 box-border text-start'>
        <h1 className='w-12'>sdfdsffssdd</h1>
        {/* <ul>
          <li className='flex justify-start w-full'>
            {' '}
            <Image src={SearchIcon} />
          </li>
          <li className='flex justify-end w-full'>
            {' '}
            <Image src={PrivacyIcon} />
          </li>
          <li className='flex justify-start w-full '>
            {' '}
            <Image src={StatsIcon} />
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default HeroSection
