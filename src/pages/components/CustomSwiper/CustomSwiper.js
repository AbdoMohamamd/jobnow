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
        260: {
          slidesPerView: 1
        },
        300: {
          slidesPerView: 2
        },
        430: {
          slidesPerView: 3
        },
        530: {
          slidesPerView: 4
        },

        630: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 2.3
        },
        1024: {
          slidesPerView: 2.5
        },
        1100: {
          slidesPerView: 3
        },
        1190: {
          slidesPerView: 3.3
        },
        1278: {
          slidesPerView: 3.4
        },
        1300: {
          slidesPerView: 3.5
        },
        1440: {
          slidesPerView: 4
        }
        ,1500:{
          slidesPerView:4.3
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
