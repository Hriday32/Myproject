import React from "react";
import NewestCarCard from "./NewestCarCard";

function NewestCar() {
  return (
    <>
      <div className="newest-car-container w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden ">
        <div className="headings text-center ">
          <h2 className="mb-2 text-sm tracking-wider uppercase">
            Cutting-Edge Automotive Marvels
          </h2>
          <h1 className="text-4xl font-bold max-md:mb-10">NEWEST CARS FLEET</h1>
        </div>

        <NewestCarCard />
      </div>
    </>
  );
}

export default NewestCar;
