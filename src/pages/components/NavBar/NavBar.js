import React from 'react'
import Link from 'next/link'
import Logo from '@/../public/Images/logo.svg'
import Image from 'next/image'
import Menu from '../Menu/Menu'

import Logout from '@/../public/images/logout.svg'

const NavBar = () => {
  return (
    <nav className='flex  w-full h-36 '>
      <div className='flex w-6/10 bg-secondary-grey  box-border pl-24  items-center xl:gap-16 lg:gap-7 '>
        <Link href={'/'}>
          <Image src={Logo} />
        </Link>

        <div className='flex  h-full items-stretch '>
          <Link
            href='/pages'
            className=' font-poppins font-bold flex items-center hover:bg-primary-grey px-4 xl:px-6 transition-colors ease-in-out duration-300'
          >
            Home
          </Link>
          <Link
            href='/pages'
            className='font-bold font-poppins  flex items-center hover:bg-primary-grey px-4 xl:px-6 transition-colors ease-in-out duration-300'
          >
            Job
          </Link>
          <Link
            href='/pages'
            className='font-bold font-poppins  flex items-center hover:bg-primary-grey px-4 xl:px-6 transition-colors ease-in-out duration-300'
          >
            AboutUs
          </Link>
          <Link
            href='/pages'
            className='font-bold font-poppins  flex items-center px-4 xl:px-6 hover:bg-primary-grey transition-colors ease-in-out duration-300'
          >
            Contact
          </Link>
        </div>
      </div>
      <div className=' flex w-4/10 bg-primary-color items-center justify-center gap-3'>
        <div>
          <button
            className='w-max px-5 py-2 text-white rounded-lg font-bold hover:bg-secondary-grey 
            transition-colors ease-in-out duration-300
          hover:text-black '
          >
            Sign In
          </button>
        </div>

        <button className=' w-max px-5 py-2 flex gap-2 items-center bg-secondary-grey rounded-lg font-bold hover:bg-gray-300 transition-colors ease-in-out duration-300 '>
          <Image src={Logout} /> Create Account
        </button>
      </div>
    </nav>
  )
}

export default NavBar
