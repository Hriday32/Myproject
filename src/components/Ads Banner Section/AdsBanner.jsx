import React from "react";
import image from "../Ads Banner Section/Ad Banner.jpeg";
import model from "../Ads Banner Section/Ad Model.png";
import { IoIosCall } from "react-icons/io";

function AdsBanner() {
  return (
    <>
      <div className="ad-banner-container w-full h-[60vh] relative  mb-96 max-md:h-[40vh] max-[600px]:flex-col max-[600px]:h-[100vh]">
        <img className="ad-img w-full h-full object-cover" src={image} alt="" />
        <div className="ad-banner w-full h-[60vh] absolute top-0 bg-[#000000ce] z-50 overflow-hidden flex justify-space-between items-end max-md:h-[40vh] max-[600px]:flex-col max-[600px]:h-[100vh] max-[600px]:justify-center max-[600px]:items-center">
          <div className="left-ad text-white w-[50%] h-[100%] flex flex-col justify-center items-right text-right max-[600px]:text-center max-[600px]:w-full">
            <h2 className="text-2xl mb-4 max-lg:text-base max-md:text-sm w-full">
              {" "}
              Call Today For Booking Your Next Ride
            </h2>
            <h1 className="flex justify-end items-center gap-2 text-5xl mb-4 max-lg:text-3xl max-md:text-xl w-full max-[600px]:justify-center">
              {" "}
              <IoIosCall className="w-20 h-20 text-[#DD3219] max-lg:w-10 max-lg:h-10" />{" "}
              (+977) 9819604968
            </h1>
            <p className=" text-lg italic max-md:text-sm w-full">
              Operators available 24/7
            </p>
          </div>

          <img
            className="mx-10 max-lg:w-1/4 max-[600px]:w-[300px]"
            src={model}
            alt=""
          />

          <div className="right-ad text-white w-[50%] h-[100%] flex flex-col justify-center items-left text-left  max-[600px]:justify-center max-[600px]:items-center max-[600px]:w-full">
            <h2 className="text-2xl mb-8 max-lg:text-base max-lg:mb-4 max-md:text-sm">
              Upto 35% Discounts & Special Offers
            </h2>
            <h1 className="text-5xl mb-8 max-lg:mb-4 max-lg:text-3xl max-md:text-xl">
              Rent a Car for 7 Days
            </h1>
            <p className="italic text-lg max-md:text-sm">
              and get 3 days extra absolutely FREE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsBanner;
