import React from "react";
import HeroBg from "../login/VehhicleListing Hero Bg.jpeg";

const LoginHero = () => {
  return (
    <>
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        <img
          src={HeroBg}
          className="w-full h-full  object-cover  object-[center_center]"
          alt=""
        />
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          <h1 className="'uppercase text-white text-4xl font-bold">Log In</h1>
        </div>
      </div>
    </>
  );
};

export default LoginHero;
