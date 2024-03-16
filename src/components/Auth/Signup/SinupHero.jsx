import React from "react";
import HeroBg from "../Signup/VehhicleListing Hero Bg.jpeg";

function SignupHero() {
  return (
    <>
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        <img
          src={HeroBg}
          className="w-full h-full  object-cover  object-[center_center]"
          alt=""
        />

        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          <h1 className="uppercase text-white text-4xl font-bold">Sign Up</h1>
        </div>
      </div>
    </>
  );
}

export default SignupHero;
