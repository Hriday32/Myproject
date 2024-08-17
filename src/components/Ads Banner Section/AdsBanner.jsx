import React from "react";
import image from "../Ads Banner Section/Ad Banner.jpeg";
import model from "../Ads Banner Section/Ad Model.png";
import { IoIosCall } from "react-icons/io";

function AdsBanner() {
  return (
    <div className="ad-banner-container w-full h-auto relative mb-20 mt-0">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={image} alt="" />
        <div className="absolute inset-0 bg-[#272525ce]">
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full items-center md:items-end">
        <div className="left-ad text-white w-full h-full flex flex-col justify-center items-center md:items-end text-center md:text-right p-4">
          <h2 className="text-lg md:text-2xl mb-2 md:mb-4 w-full">
            Call Today For Booking Your Next Ride
          </h2>
          <h1 className="flex justify-center md:justify-end items-center gap-2 text-3xl md:text-5xl mb-2 md:mb-4 w-full">
            <IoIosCall className="w-10 h-10 md:w-20 md:h-20 text-[#DD3219]" />
            (+977) 9819604968
          </h1>
          <p className="text-sm md:text-lg italic w-full">
            Operators available 24/7
          </p>
        </div>

        <div className="flex justify-center items-center w-full h-full p-4">
          <img className="h-40 md:h-80" src={model} alt="" />
        </div>

        <div className="right-ad text-white w-full h-full flex flex-col justify-center items-center md:items-start text-center md:text-left p-4">
          <h2 className="text-lg md:text-2xl mb-2 md:mb-8">
            Upto 35% Discounts & Special Offers
          </h2>
          <h1 className="text-3xl md:text-5xl mb-2 md:mb-8">
            Rent a Car for 7 Days
          </h1>
          <p className="italic text-sm md:text-lg">
            and get 3 days extra absolutely FREE
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdsBanner;
