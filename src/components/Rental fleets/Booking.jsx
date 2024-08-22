import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RentalFleets from "../../Data/RentalFleets";
import { FinalCarList } from "../../Data/Searchlist";
import { toast } from "react-toastify";

const Booking = () => {
  const { id } = useParams();
  const car = FinalCarList.find((car) => car.id == id);
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [days, setDays] = useState(0);
  const message = () => {
    toast.success("Booking is sucessfully!");
  };

  useEffect(() => {
    calculateCost();
  }, [pickupDate, dropDate]);

  const calculateCost = () => {
    if (pickupDate && dropDate) {
      const start = new Date(pickupDate);
      const end = new Date(dropDate);
      const calculatedDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      if (calculatedDays > 0) {
        setDays(calculatedDays);
        const ppd = car.pricePerDay.split(" ");
        setTotalCost(calculatedDays * Number(ppd[1]));
      } else {
        setDays(0);
        setTotalCost(0);
      }
    } else {
      setDays(0);
      setTotalCost(0);
    }
  };

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 mt-5 max-md:grid-cols-1">
      <div className="rounded">
        <img
          src={car.carImage}
          alt={car.carTitle}
          className="w-full rounded p-5"
        />
      </div>
      <div className="max-w-md mx-auto p-2 bg-white shadow-lg rounded">
        <h2 className="text-2xl font-bold text-center mb-4">
          Booking {car.carTitle}
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(data) => {
                if (new Date().toISOString() <= data.target.value) {
                  setPickupDate(data.target.value);
                }
              }}
              minDate={new Date()}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Drop Date
            </label>
            <input
              type="date"
              value={dropDate}
              dateFormat={"dd/MM/yyyy"}
              onChange={(date) => setDropDate(date.target.value)}
              minDate={pickupDate}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mt-4">
            <p className="text-lg">
              Total Days: <strong>{days} Days</strong>
            </p>
            <p className="text-lg">
              Price per Day: <strong>Rs. {car.pricePerDay}</strong>
            </p>
            <p className="text-lg">
              Total Cost: <strong>Rs. {totalCost}</strong>
            </p>
          </div>

          <button
            type="button"
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={message}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
