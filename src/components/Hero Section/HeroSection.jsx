import React, { useState } from "react";
import * as abcd from "../../Data/Searchlist";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HeroSection() {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [DropUpDate, setDropUpDate] = useState(null);
  const [selectbrand, setselectbrand] = useState("All Brands");
  const [filteredCar, setfilteredCar] = useState([]);

  const carData = {
    Tata: abcd.TataFindCar,
    Mahindra: abcd.MahenFindCar,
    "Maruti Suzuki": abcd.MarutiFindCar,
    Hyundai: abcd.HyundaiFindCar,
    Honda: abcd.HondaFindCar,
    Toyota: abcd.ToyotaFindCar,
    Ford: abcd.ForFindCar,
  };
  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setselectbrand(brand);
  };

  return (
    <div>
      <div className="hero-container w-full h-auto -z-50  top-0 ">
        <div className="hero-bg w-full md:h-[100vh] bg-hero-pattern bg-no-repeat bg-center bg-cover ">
          <div className="hero-content bg-[#000000a2] w-full h-full flex flex-col justify-center items-center">
            <div className="hero-heading flex flex-col justify-center items-center">
              <h1 className="text-6xl text-white font-bold tracking-wide">
                Best Car Rental Prices
              </h1>
              <p className="text-xl text-white mt-2 font-semibold ">
                Practical & Convenient Auto Hire, As Low As Rs:3500 / day
              </p>
            </div>

            <div className="inputs w-full mt-10 flex justify-center items-center gap-8 max-lg:gap-10 max-md:flex-col max-md:justify-center">
              <form className="flex items-center gap-10 justify-center max-lg:gap-0 max-md:flex-col max-md:items-center max-md:gap-4 max-md:w-full">
                <div className="date w-52 max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <DatePicker
                    className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%] "
                    placeholderText="Select Date"
                    selected={pickUpDate}
                    onChange={(date) => setPickUpDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={new Date()}
                    popperPlacement="bottom"
                  />
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    PICK-UP-DATE
                  </p>
                </div>

                <div className="date w-52 max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <DatePicker
                    className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%]"
                    placeholderText="Select Date"
                    selected={DropUpDate}
                    onChange={(date) => setDropUpDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={new Date()}
                    popperPlacement="bottom"
                  />
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    DROP-OFF-DATE
                  </p>
                </div>

                <div className="select max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <select
                    name="cars"
                    id="cars"
                    className="w-56 h-10 px-4  text-sm  max-lg:w-[95%] max-md:w-60"
                    onChange={handleBrandChange}
                  >
                    <option value="All Brands" selected>
                      ALL MODELS
                    </option>
                    <option value="Tata">TATA</option>
                    <option value="Mahindra">Mahindra</option>
                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                  </select>
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    MAKERS OF VEHICLES
                  </p>
                </div>
              </form>
              <button
                className="text-white px-8 py-3 mb-7 bg-[#DC2D13] text-sm relative font-bold hover:bg-[#FFA500] transition-all duration-150 ease-in-out max-lg:px-6 "
                type="button"
                onClick={() => {
                  if (selectbrand === "All Brands") {
                    setfilteredCar([]);
                  } else {
                    setfilteredCar(carData[selectbrand]);
                  }
                }}
              >
                FIND IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-4 mb-10 mt-6 px-4 shadow-black">
          {filteredCar.length > 0 ? (
            filteredCar.map((car, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-slate-700 border-solid "
              >
                <img
                  className="w-full h-[200px] justify-self-center "
                  src={car.carImage}
                />{" "}
                <h2 className="text-center dotted font-bold">{car.carTitle}</h2>
                <p className="text-center">{car.pricePerDay}</p>
                <p className="text-center">{car.carYear}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
