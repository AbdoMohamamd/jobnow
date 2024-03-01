import React from 'react'

const MainButton = ({ text, small }) => {
  return (
    <div>
      <button
        className={`${
          small ? 'h-32 md:w-24 md:text-10 ' : 'md:w-44 md:h-14 md:text-base'
        }  w-20 h-6  mt-1  hover:bg-primary-color hover:text-white transition-all ease-in-out duration-300   text-8 rounded-md  border-primary-color border  font-poppins font-medium text-primary-color md:border-2 md:mt-0  md:rounded-lg  lg:w-44 lg:h-14 lg:text-base`}
      >
        {text}
      </button>
    </div>
  )
}

export default MainButton
