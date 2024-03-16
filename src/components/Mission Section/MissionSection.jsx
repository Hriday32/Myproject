import React from "react";
import Image from "../Mission Section/Mission Image.jpg";

function MissionSection() {
  return (
    <>
      <div className="m-container w-full min-h-[90vh] flex justify-center items-center ">
        <div className="flex justify-center items-center max-md:flex-col">

          <div className="m-left w-[640px] flex justify-center items-center max-lg:w-[80%] max-md:mb-10">
            <img className="w-[70%] h-[70%] object-cover" src={Image} alt="" />
          </div>

          <div className="m-right w-[640px] max-lg:w-[50%] max-md:w-[80%]">
            <h1 className="text-4xl font-semibold max-[550px]:text-2xl">
              Mission is to Provide Low Cost Effective Rental Solutions
            </h1>

            <p className="w-[500px] mt-10 font-light text-sm text-gray-500 max-[550px]:w-[95%]">
              You put your all efforts to portfolio up your business in online
              market. So it is very difficult for you to reach customer by the
              search engines due to high competition rate
            </p>

            <p className="w-[500px] mt-8 font-light text-sm text-gray-500 max-[550px]:w-[95%]">
              This themes is a premium WordPress SEO friendly theme that allows
              you to showcase your products and services, optimize for search
              engines and make money with Google Adsense.
            </p>

            <div className="  pt-4">
              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="w-1 h-8 bg-[#DC2D13] "></div>
                <p className=" font-medium ">Competitive Prices</p>
              </div>

              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="w-1 h-8 bg-[#DC2D13] "></div>
                <p className=" font-medium ">Breakdown Assistance</p>
              </div>

              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="w-1 h-8 bg-[#DC2D13] "></div>
                <p className=" font-medium ">Trusted Rent Service</p>
              </div>

              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="w-1 h-8 bg-[#DC2D13] "></div>
                <p className=" font-medium ">24/7 Free Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionSection;
