import React from 'react'
import Logo from '@/../public/Images/footer-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import RightArrow from '@/../public/Images/white-right-arrow.svg'
import GoogleLogo from '@/../public/Images/google-logo.svg'
import FacebookLogo from '@/../public/Images/facebook-logo.svg'
import TwitterLogo from '@/../public/Images/twitter-logo.svg'
import LinkedInLogo from '@/../public/Images/linkedIn-logo.svg'

const Footer = () => {
  return (
    <footer className='md:flex md:justify-between  bg-primary-color container pb-7 pt-7 md:pb-24 md:pt-24'>
      <div className='flex flex-col justify-center mb-8'>
        <Image src={Logo} className='w-32 h-6 mb-3 md:mb-8 md:w-52 md:h-12' />{' '}
        <p className='font-poppins font-normal text-8 max-w-52 text-white md:text-sm md:max-w-72'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='flex justify-between mb-3 md:mb-0 md:justify-end md:gap-x-5 lg:gap-x-12 xl:gap-x-24 xlg:gap-x-44 '>
        <div className='flex flex-col w-4/12'>
          {' '}
          <h1 className='font-poppins font-bold text-sm mb-2 text-white md:text-2xl md:mb-3'>
            Company
          </h1>
          <p className='font-poppins font-normal text-8 text-white md:text-sm '>
            Address: 123, Fifth Avenue ,New York - 1060, USA.
          </p>
          <p className='font-poppins font-normal text-8 text-white md:text-sm'>
            {' '}
            Call Us: +(1600) 456 7890{' '}
          </p>
          <p className='font-poppins font-normal text-8 text-white md:text-sm'>
            {' '}
            Email: user@example.com{' '}
          </p>
          <p className='font-poppins font-normal text-8 text-white md:text-sm'>
            Mon Sat: 9:00 AM - 19:00 PM
          </p>
        </div>
        <div>
          {' '}
          <h1 className='font-poppins font-bold text-sm mb-2 text-white md:text-2xl md:mb-3'>
            Pages
          </h1>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm'
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            Home
          </Link>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm'
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            Booking
          </Link>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm'
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            Facilities
          </Link>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm'
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            AboutUs
          </Link>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm'
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            Location
          </Link>
          <Link
            href='/'
            className='flex items-center font-poppins font-normal text-8 text-white md:text-sm '
          >
            <Image src={RightArrow} className='mr-1 md:w-2 md:h-2 md:mr-2' />
            Contact
          </Link>
        </div>
        <div className='hidden md:block'>
          <h1 className='font-poppins font-bold   text-white md:text-2xl md:mb-3'>
            Contact Us
          </h1>{' '}
          <div className='flex gap-x-5'>
            {' '}
            <Image src={GoogleLogo} />
            <Image src={FacebookLogo} />
            <Image src={TwitterLogo} />
            <Image src={LinkedInLogo} />
          </div>
        </div>
      </div>
      <div className='md:hidden '>
        <h1 className='font-poppins mb-2 font-bold text-sm  text-white '>
          Contact Us
        </h1>{' '}
        <div className='flex gap-x-3 md:gap-x-1 lg:gap-x-5'>
          {' '}
          <Image src={GoogleLogo} className='w-3 h-3' />
          <Image src={FacebookLogo} className='w-3 h-3' />
          <Image src={TwitterLogo} className='w-3 h-3' />
          <Image src={LinkedInLogo} className='w-3 h-3' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
