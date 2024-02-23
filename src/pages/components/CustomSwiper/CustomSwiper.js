import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode } from 'swiper/modules'

const CustomSwiper = ({ cards }) => {
  return (
    <Swiper
      breakpoints={{
        200: {
          width: 260,
          slidesPerView: 2
        },
        360: {
          width: 360,
          slidesPerView: 3
        },

        510: {
          width: 510,
          slidesPerView: 4
        },
        650: {
          width: 650,
          slidesPerView: 5
        },
        768: {
          width: 650,
          slidesPerView: 2
        },
        1000: {
          width: 1000,
          slidesPerView: 3
        },
        1200: {
          width: 1400,
          slidesPerView: 4
        }
      }}
      freeMode={true}
      modules={[FreeMode]}
      className='hover:cursor-pointer   '
    >
      {cards?.map((card, index) => (
        <SwiperSlide key={index} className='custom-swiper   '>
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default CustomSwiper
