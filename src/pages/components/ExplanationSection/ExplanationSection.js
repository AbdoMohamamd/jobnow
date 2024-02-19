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
      <h1 className='mb-4 font-semibold text-sm md:text-38 font-poppins md:mb-10'>
        How it Works
      </h1>{' '}
      <div className='flex flex-wrap md:flex-row md:justify-between container md:items-center'>
        <div className='w-11/12 md:w-6/10 order-1  '>
          {' '}
          <p className='text-8  mb-5 md:text-xl    font-poppins font-normal text-primary-text-color  md:mb-14 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className='flex justify-center md:justify-end md:items-center w-full  md:w-4/10    order-3 md:order-2 md:pr-4'>
          <MainButton text={'Learn More'} />
        </div>
        <div className='flex  justify-center md:justify-normal  gap-x-4 md:gap-x-8 flex-wrap md:w-full   order-2 md:order-3'>
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
    </div>
  )
}

export default ExplanationSection
