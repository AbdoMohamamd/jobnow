import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/../public/Images/logo.svg'
import Image from 'next/image'
import BurgerMenu from '@/../public/Images/burger-menu.svg'
import Logout from '@/../public/Images/logout.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-full h-20 md:h-36  md:flex  md:container  '>
      <div className='flex h-full bg-secondary-grey  items-center justify-center  md:justify-start  md:w-6/10  md:box-border  lg:gap-12 xl:gap-16'>
        <Link href={'/'} className=''>
          <Image src={Logo} className='w-28 md:h-28 lg:w-max lg:h-max ' />
        </Link>

        <button
          className={`${
            isOpen ? 'hidden' : 'absolute'
          }  p-2 right-5 bg-primary-color rounded-md text-base md:hidden`}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <Image src={BurgerMenu} width={20} height={20} />
        </button>

        <div
          className={`${
            isOpen ? 'fixed' : 'hidden'
          }  flex flex-col gap-y-5 md:flex md:flex-row bg-secondary-grey mt-20  top-0 left-0 right-0 bottom-0 z-20   md:mt-0  md:static    `}
        >
          {' '}
          <button
            className={`${
              isOpen ? 'fixed' : 'hidden'
            } p-2 right-5 top-6 bg-primary-color rounded-md text-base md:hidden `}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <Image src={BurgerMenu} width={20} height={20} />
          </button>
          <Link
            href='/'
            className='h-10 text-center  text-xl font-poppins font-bold transition-all hover:border-b-4 box-border  hover:border-primary-color   px-4 md:py-0 md:px-0  md:mx-4 md:h-5  ease-in-out duration-300 md:text-xs lg:text-sm xl:text-base xl:mx-6 xl:h-6 '
          >
            Home
          </Link>
          <Link
            href='/'
            className='h-10  text-center   text-xl font-poppins font-bold  hover:border-b-4 box-border  hover:border-primary-color   px-4 md:py-0 md:px-0  md:mx-4 md:h-5 transition-all ease-in-out duration-300 md:text-xs lg:text-sm xl:text-base xl:mx-6 xl:h-6 '
          >
            Job
          </Link>
          <Link
            href='/'
            className='h-10 text-center  text-xl font-poppins font-bold  hover:border-b-4 transition-all hover:border-primary-color   px-4 md:py-0 md:px-0  md:mx-4 md:h-5  ease-in-out duration-300 md:text-xs lg:text-sm xl:text-base xl:mx-6 xl:h-6'
          >
            <p className=''>AboutUs</p>
          </Link>
          <Link
            href='/'
            className='h-10 text-center   block  text-xl font-poppins font-bold transition-all  hover:border-b-4 box-border  hover:border-primary-color   px-4 md:py-0 md:px-0  md:mx-4 md:h-5 ease-in-out duration-300 md:text-xs lg:text-sm xl:text-base xl:mx-6 xl:h-6'
          >
            <div className='mt-auto'> Contact</div>
          </Link>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'fixed' : 'hidden'
        }  flex flex-col items-center gap-1 md:flex-row bg-secondary-grey md:bg-primary-color bottom-5  left-0 justify-center right-0 z-20  md:items-center md:justify-end md:gap-3 md:static md:flex md:w-4/10`}
      >
        <div>
          <button
            className='w-max px-5 py-2 bg-primary-color hover:bg-green-400 text-white rounded-lg font-bold md:hover:bg-secondary-grey md:py-3
            transition-colors ease-in-out duration-300
          hover:text-black md:text-xs lg:text-sm xl:text-base '
          >
            Sign In
          </button>
        </div>

        <button className=' w-max px-5 py-2 flex gap-2 items-center bg-secondary-grey rounded-lg font-bold hover:bg-gray-300 transition-colors ease-in-out duration-300 md:text-xs lg:text-sm xl:text-base '>
          <Image src={Logout} /> Create Account
        </button>
      </div>
    </nav>
  )
}

export default NavBar
