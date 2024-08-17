import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Reviews/ReviewCard.css';

// import required modules
import { Pagination } from 'swiper/modules';
import ReviewsCardDetails from './ReviewsCardDetails';

export default function ReviewCard() {
  return (
    <div className='flex flex-col justify-center items-center  w-[100rem] pb-10 '>
      <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
       
       
      </Swiper>
    </div>
  );
}
