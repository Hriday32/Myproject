import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Newest car fleet/NewestCarCard.css";
import SliderImg1 from "../Newest car fleet/Slider Img 1.jpeg";
import SliderImg2 from "../Newest car fleet/Slider Img 2.jpeg";
import SliderImg3 from "../Newest car fleet/Slider Img 3.jpeg";
import SliderImg4 from "../Newest car fleet/Slider Img 4.jpeg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function NewestCarCard() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SliderImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
