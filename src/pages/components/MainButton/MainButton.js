import React from 'react'

const MainButton = ({ text, small }) => {
  return (
    <div>
      <button
        className={`${
          small ? 'md:w-24 h-32 md:text-10 ' : 'md:w-44 md:h-14 md:text-base'
        } lg:w-44 lg:h-14 lg:text-base w-20 h-6  mt-1 md:mt-0  text-8 rounded-md  border-primary-color border   md:border-2 font-poppins font-semibold text-primary-color md:rounded-lg hover:bg-primary-color hover:text-white transition-all ease-in-out duration-300`}
      >
        {text}
      </button>
    </div>
  )
}

export default MainButton
