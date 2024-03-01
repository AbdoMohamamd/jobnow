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
    <footer className='flex justify-between  bg-primary-color container pb-7 pt-7 md:pb-24 md:pt-24'>
      <div className='flex flex-col justify-center'>
        <Image src={Logo} />{' '}
        <p className='font-poppins font-normal text-white md:text-sm md:w-60'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='flex justify-end md:gap-x-5 lg:gap-x-12 xl:gap-x-24 xlg:gap-x-44 '>
        <div className='flex flex-col w-4/12'>
          {' '}
          <h1 className='font-poppins font-bold text-white md:text-2xl md:mb-3'>
            Company
          </h1>
          <p className='font-poppins font-normal text-white md:text-sm '>
            Address: 123, Fifth Avenue ,New York - 1060, USA.
          </p>
          <p className='font-poppins font-normal text-white md:text-sm'>
            {' '}
            Call Us: +(1600) 456 7890{' '}
          </p>
          <p className='font-poppins font-normal text-white md:text-sm'>
            {' '}
            Email: user@example.com{' '}
          </p>
          <p className='font-poppins font-normal text-white md:text-sm'>
            Mon Sat: 9:00 AM - 19:00 PM
          </p>
        </div>
        <div>
          {' '}
          <h1 className='font-poppins font-bold text-white md:text-2xl md:mb-3'>
            Pages
          </h1>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            Home
          </Link>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            Booking
          </Link>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            Facilities
          </Link>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            AboutUs
          </Link>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            Location
          </Link>
          <Link
            href='/'
            className='flex font-poppins font-normal text-white md:text-sm'
          >
            <Image src={RightArrow} />
            Contact
          </Link>
        </div>
        <div>
          <h1 className='font-poppins font-bold text-white md:text-2xl md:mb-3'>
            Contact Us
          </h1>{' '}
          <div className='flex md:gap-x-1 lg:gap-x-5'>
            {' '}
            <Image src={GoogleLogo} />
            <Image src={FacebookLogo} />
            <Image src={TwitterLogo} />
            <Image src={LinkedInLogo} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
