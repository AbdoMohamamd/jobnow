import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

const CustomSwiper = ({ cards }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode, Pagination]}
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
