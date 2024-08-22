import React, { useEffect, useState, useRef } from "react";
// import Rentalfleet from "../../Data/RentalFleets";
import { FinalCarList } from "../../Data/Searchlist";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const Viewdetail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findDetail = FinalCarList.filter(
      (FinalCarList) => FinalCarList.id === Number(id)
    );

    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      // window.location.href = "/";
    }
  }, [id]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div className="">
      <h2 className="text-3xl text-center mt-5"> Our Car Detail</h2>
      <div className="grid grid-cols-2 gap-5 mt-5 max-md:grid-cols-1">
        <div className="rounded">
          <img
            src={detail.carImage}
            alt={detail.carTitle}
            className="w-full rounded p-5"
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h1 className="text-4xl uppercase font-bold">{detail.carTitle}</h1>
          <h2 className="text-2xl italic">{detail.carInfo}</h2>
          <p className="font-bold text-3xl">Car Year: {detail.carYear}</p>
          <p className="font-bold text-3xl">
            Car Top Speed: {detail.carTopSpeed}
          </p>
          <p className="font-bold text-3xl">{detail.pricePerDay} / day</p>
          <button
            className="flex justify-center items-center mx-5 rounded bg-[#555555] w-2/4 h-10 uppercase gap-2  text-xs my-6 text-white hover:bg-red-500 box-border"
            type="buttton"
          >
            <Link
              to={`/booking/${detail.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex mx-2">Booking</div>
              <div>
                <FaAnglesRight />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewdetail;
