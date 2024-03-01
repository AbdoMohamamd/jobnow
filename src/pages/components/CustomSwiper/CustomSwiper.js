import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode } from 'swiper/modules'

const CustomSwiper = ({ cards }) => {
  return (
    <Swiper
      // breakpoints={{
      //   260: {
      //     slidesPerView: 1
      //   },
      //   300: {
      //     slidesPerView: 2
      //   },
      //   320: {
      //     slidesPerView: 2.2
      //   },
      //   350: {
      //     slidesPerView: 2.3
      //   },
      //   370: {
      //     slidesPerView: 2.5
      //   },
      //   400: {
      //     slidesPerView: 2.8
      //   },
      //   430: {
      //     slidesPerView: 3
      //   },
      //   450: {
      //     slidesPerView: 3.2
      //   },
      //   480: {
      //     slidesPerView: 3.5
      //   },
      //   530: {
      //     slidesPerView: 3.9
      //   },
      //   570: {
      //     slidesPerView: 4
      //   },
      //   600: {
      //     slidesPerView: 4.3
      //   },
      //   630: {
      //     slidesPerView: 4.5
      //   },
      //   670: {
      //     slidesPerView: 4.8
      //   },
      //   768: {
      //     slidesPerView: 2
      //   },
      //   900: {
      //     slidesPerView: 2.3
      //   },
      //   1024: {
      //     slidesPerView: 2.5
      //   },
      //   1100: {
      //     slidesPerView: 2.8
      //   },
      //   1190: {
      //     slidesPerView: 3
      //   },
      //   1278: {
      //     slidesPerView: 3.4
      //   },
      //   1300: {
      //     slidesPerView: 3.5
      //   },
      //   1440: {
      //     slidesPerView: 4
      //   },
      //   1500: {
      //     slidesPerView: 4.3
      //   }
      // }}
      slidesPerView={'auto'}
      freeMode={true}
      modules={[FreeMode]}
      className='hover:cursor-pointer'
    >
      {cards?.map((card, index) => (
        <SwiperSlide key={index} className='!w-auto'>
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default CustomSwiper
