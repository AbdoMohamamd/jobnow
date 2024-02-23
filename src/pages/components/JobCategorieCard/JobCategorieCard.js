import React from 'react'

const JobCategorieCard = ({ icon, title, numberOfJobs }) => {
  return (
    <div className=' w-28 h-24 pl-3 pt-3 pr-8 mr-20  md:w-72 md:pt-8 md:pl-7 md:h-64  md:pr-20 hover:bg-primary-color bg-white rounded-xl  relative group transition ease-in-out duration-300'>
      <div className='md:pb-8 md:pl-2  pl-1 pb-3'>{icon}</div>
      <h1 className='text-8 pb-4 text-start md:text-2xl font-poppins font-semibold md:pb-10 group-hover:text-white  transition ease-in-out duration-300'>
        {title}
      </h1>
      <p className='text-5 md:text-xs md:pb-6 text-primary-text-color group-hover:text-white transition ease-in-out duration-300'>
        {numberOfJobs} Job vacancy
      </p>
    </div>
  )
}

export default JobCategorieCard
