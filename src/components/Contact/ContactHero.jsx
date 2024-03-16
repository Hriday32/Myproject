import React from "react";
import HeroBg from "../Contact/VehhicleListing Hero Bg.jpeg";

function ContactHero() {
  return (
    <>
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        <img
          src={HeroBg}
          className="w-full h-full  object-cover  object-[center_center]"
          alt=""
        />

        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          <h1 className="uppercase text-white text-4xl font-bold">Contact</h1>
          <p className="text-white tracking-widest mt-4 text-sm uppercase">
            Online Inquiry Form
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
