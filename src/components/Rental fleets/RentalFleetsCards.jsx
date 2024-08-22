import { Link } from "react-router-dom";
import { RiSteeringLine } from "react-icons/ri";
import { TbRoad } from "react-icons/tb";
import { IoMdSpeedometer } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
// import RentalFleets from "../../Data/RentalFleets";
import { FinalCarList } from "../../Data/Searchlist";

function RentalFleetsCards() {
  return (
    <>
      <div className="mb-20">
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {FinalCarList.map((car) => (
            <div
              key={car.id}
              className="rental-fleet-card-container bg-yellow-600 w-80 h-auto shadow-2xl mt-16"
            >
              <div className="cars-image w-full h-[220px] overflow-hidden relative max-md:h-[300px] max-[500px]:h-[200px] max-[450px]:h-[150px]">
                <img
                  className="w-full h-full object-cover object-center max-lg:w-[100%] max-lg:h-[80%] max-md:w-[100%] max-md:h-[100%]"
                  src={car.carImage}
                  alt="carImage"
                />

                <div className="price-tag absolute top-36 text-white right-4 w-20 h-14 justify-center items-center bg-[#DD3219] py-2 max-lg:h-12 max-lg:top-28 max-md:top-60 max-[500px]:top-36 max-[450px]:top-24 max-[450px]:w-16 max-[450px]:h-11 max-[450px]:right-2">
                  <p className="text-sm text-center font-medium max-lg:text-xs max-[450px]:text-[10px]">
                    {car.pricePerDay}
                  </p>
                  <p className="text-sm text-center font-medium max-lg:text-xs max-[450px]:text-[10px]">
                    / per day
                  </p>
                </div>
              </div>

              <div className="cars-name flex flex-col justify-center items-center">
                <p className="text-2xl mt-10 mb-4 font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-lg:mt-0 max-md:mt-4 max-[500px]:text-xl">
                  {car.carTitle}
                </p>
              </div>

              <div className="cars-details flex text-black justify-center items-center gap-8">
                <div className="car-year flex flex-col justify-center items-center">
                  <RiSteeringLine className="w-6 h-6" />
                  <p className="text-sm font-light">{car.carYear}</p>
                </div>

                <div className="car-km flex flex-col justify-center items-center">
                  <TbRoad className="w-6 h-6" />
                  <p className="text-sm font-light">{car.carKm}</p>
                </div>

                <div className="car-spped flex flex-col justify-center items-center">
                  <IoMdSpeedometer className="w-6 h-6" />
                  <p className="text-sm font-light">{car.carTopSpeed}</p>
                </div>
              </div>

              <div className="flex justify-between mx-4 ">
                <button
                  className="flex justify-center items-center mx-5 rounded bg-[#555555] w-2/4 h-10 uppercase gap-2  text-xs my-6 text-white hover:bg-red-500 box-border"
                  type="buttton"
                >
                  <Link
                    to={`/booking/${car.id}`}
                    className="flex justify-between items-center"
                  >
                    <div className="flex mx-2">Booking</div>
                    <div>
                      <FaAnglesRight />
                    </div>
                  </Link>
                </button>
                <button
                  className="flex justify-center items-center rounded bg-[#555555] w-2/4 h-10 uppercase gap-2 text-sm mt-6 text-white hover:bg-[#DD3219]"
                  type="button"
                >
                  <Link
                    to={`/viewdetail/${car.id}`}
                    className="flex justify-between items-center"
                  >
                    <div className="flex mx-1">Viewdetail</div>
                    <div>
                      <FaAnglesRight />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RentalFleetsCards;
