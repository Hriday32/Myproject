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
    <div className='flex flex-col justify-center items-center  w-[100rem] pb-10 max-lg:w-[80rem] max-md:w-[70rem] max-[660px]:w-[60rem] h-full'>
      <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[50vh] max-md:h-[30vh] overflow-hidden max-[550px]:w-[50rem] h-full"
      >
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
        <SwiperSlide> <ReviewsCardDetails /></SwiperSlide>
       
       
      </Swiper>
    </div>
  );
}
