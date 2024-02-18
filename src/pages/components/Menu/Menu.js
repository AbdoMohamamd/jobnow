import React from 'react'
import Link from 'next/link'
import Logout from '@/../public/images/logout.svg'
import Image from 'next/image'
const Menu = () => {
  return (
    <div className='flex items-center justify-between w-full'>
      {' '}
    
      <div className='flex items-center flex-grow-0.4 bg-primary-color'>
        <div className='mr-1'>
          <button className='px-10 py-2 hover:bg-primary-grey rounded-lg w-max font-bold'>
            Sign
          </button>
        </div>
        <div className=''>
          <button className=' flex items-center  px-4 py-2 bg-primary-grey rounded-lg w-max font-bold'>
            <Image src={Logout} className='mr-3' /> Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
