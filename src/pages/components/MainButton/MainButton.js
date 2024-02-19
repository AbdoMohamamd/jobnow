import React from 'react'

const MainButton = ({ text }) => {
  return (
    <div>
      <button className='w-20 h-6 mt-1 md:mt-0 md:w-44 md:h-14 text-8 rounded-md md:text-base border-primary-color border   md:border-2 font-poppins font-semibold text-primary-color md:rounded-lg hover:bg-primary-color hover:text-white transition-all ease-in-out duration-300 '>
        {text}
      </button>
    </div>
  )
}

export default MainButton
