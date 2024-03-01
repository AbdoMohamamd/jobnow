import React from 'react'

const JobCategorieCard = ({ icon, title, numberOfJobs }) => {
  return (
    <div className=' w-28 h-24 pl-3 pt-3 pr-8 mr-5 hover:bg-primary-color bg-white rounded-xl  relative group transition ease-in-out duration-300 md:mr-10 md:w-72 md:pt-8 md:pl-7 md:h-64 md:pr-20 '>
      <div className='pl-1 pb-3 md:pb-8 md:pl-2'>{icon}</div>
      <h1 className='text-8 pb-4 text-start  font-poppins font-semibold group-hover:text-white  transition ease-in-out duration-300 md:pb-10 md:text-2xl'>
        {title}
      </h1>
      <p className='text-5  text-primary-text-color group-hover:text-white transition ease-in-out duration-300 md:text-xs md:pb-6'>
        {numberOfJobs} Job vacancy
      </p>
    </div>
  )
}

export default JobCategorieCard
