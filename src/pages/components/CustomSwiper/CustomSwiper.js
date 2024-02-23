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
        1: {
          width: 200,
          slidesPerView: 2,
          spaceBetween: 50
        },
        300: {
          width: 300,
          slidesPerView: 3,
          spaceBetween: 70
        },
        400: {
          width: 400,
          slidesPerView: 4,
          spaceBetween: 80
        },
        510: {
          width: 510,
          slidesPerView: 4,
          spaceBetween: 90
        },
        650: {
          width: 650,
          slidesPerView: 4,
          spaceBetween: 1
        },
        768: {
          width: 650,
          slidesPerView: 2,
          spaceBetween: 10
        },
        1000: { width: 1400, slidesPerView: 4, spaceBetween: 30 }
        // when window width is >= 768px
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
