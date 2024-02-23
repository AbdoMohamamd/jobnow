import React from 'react'
import MainButton from '../MainButton/MainButton'
import Card from '../Card/Card'
import Register from '@/../public/Images/register.svg'
import Upload from '@/../public/Images/upload.svg'
import Resume from '@/../public/Images/resume.svg'
import Find from '@/../public/Images/find.svg'

const ExplanationSection = () => {
  const cards = [
    {
      icon: Register,
      title: 'Register',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: Resume,
      title: 'Create a Resume',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: Find,
      title: 'Find Job',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: Upload,
      title: 'Apply Job',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    }
  ]

  return (
    <div className='container'>
      <h1 className='mb-4 font-bold text-sm md:text-3xl font-poppins md:mb-10 md:leading-none'>
        How it Works
      </h1>{' '}
      <div className='flex  flex-wrap md:flex-row md:justify-between  '>
        <div className='w-11/12 md:w-6/10 order-1  '>
          {' '}
          <p className='text-8  mb-5 md:text-base    font-poppins font-normal text-primary-text-color  md:mb-14 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className='flex mb-8 md:m-0 justify-center md:justify-end  w-full  md:w-4/10    order-3 md:order-2 '>
          <MainButton text={'Learn More'} small={false} />
        </div>
        <div className='flex mb-1    justify-center   gap-x-4 md:gap-x-83 flex-wrap md:w-full  md:mb-32  order-2 md:order-3'>
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col   md:flex-row items-center gap-x-16  '>
        {' '}
        <div className='mb-6 md:mb-0 w-72 h-52 rounded-lg md:h-370 md:w-504 bg-placeholder-grey md:rounded-xl   '>
          <p className='text-transparent hidden md:block'>
            sdfdsfdsfdsfsdfdsfdsfdsfdsfsdfsdfdsfsdfsddsfsdfsdfsdfsdfsdfdsfsdfsdfsdf
            sfdsfsdf
          </p>
        </div>
        <div className='text-center md:text-start'>
          {' '}
          <h1 className='mb-3 font-bold text-sm md:text-xl lg:text-3xl font-poppins md:mb-8 md:leading-tight md:text-wrap     '>
            We will help you to become an employee for your dream company
          </h1>
          <p className='text-8  mb-5 md:text-sm lg:text-base    font-poppins font-normal text-primary-text-color  md:mb-9  md:text-wrap'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>{' '}
          <MainButton text={'Learn More'} small={true} />
        </div>
      </div>
    </div>
  )
}

export default ExplanationSection
