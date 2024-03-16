import React from "react";

function BestRentalService() {
  return (
    <>
      <div className="best-rental-service-container w-full h-screen flex justify-center items-center px-20 max-lg:px-10 max-md:flex-col max-lg:h-[50vh] max-[500px]:w-[100%] max-[500px]:px-1 max-[500px]:mt-8 max-md:h-auto">
        <div className="left-sec w-[50%] h-screen flex flex-col justify-center items-start bg-red-40 pl-20  text-left max-lg:pl-0  max-md:w-[90%] max-lg:h-[50vh] ">
          <h1 className="text-2xl font-medium">Best Rental Service</h1>

          <div className="w-14 h-[0.5px] mt-4  max-lg:mt-6 bg-black"></div>
          <br />
          <div className="w-14 h-[0.5px] mt-[-18px] ml-4 max-lg:mt-[-10px] bg-black"></div>

          <p className="w-[100%] mt-10 text-sm font-thin">
            Experience the pinnacle of convenience and comfort with our premier
            car rental service.
          </p>

          <br />

          <p className="w-[100%] text-sm font-thin">
            From sleek sedans to spacious SUVs, we offer a diverse fleet to suit
            every journey. Enjoy seamless booking, competitive rates, and
            top-notch customer service, ensuring your road trip is not just a
            drive but an unforgettable adventure.
          </p>

          <img
            className="mt-10"
            src="https://autozone-theme.com/rental/wp-content/uploads/2022/01/sgn.png"
            alt=""
          />
        </div>

        <div className="right-sec w-[50%] max-lg:h-[50vh] h-screen flex flex-col justify-center items-center object-cover object-center  max-md:w-[90%] max-md:justify-start ">
          <img
            src="https://autozone-theme.com/rental/wp-content/uploads/2022/01/tw2.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default BestRentalService;
