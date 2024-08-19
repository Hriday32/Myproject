import React, { useState } from "react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const Booking = ({ carTitle, pricePerDay }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const { slug } = useParams();
  const car = RentalFleets.find((car) => car.slug === slug);

  // Function to handle date change and calculate total cost
  const calculateCost = () => {
    if (pickupDate && dropDate) {
      const start = new Date(pickupDate);
      const end = new Date(dropDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate number of days
      if (days > 0) {
        setTotalCost(days * pricePerDay);
      } else {
        setTotalCost(0); // Reset if dates are invalid
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">
        Booking {carTitle}
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pickup Date
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => {
              setPickupDate(e.target.value);
              calculateCost();
            }}
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
            onChange={(e) => {
              setDropDate(e.target.value);
              calculateCost();
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <p className="text-lg">
            Price per Day: <strong>{pricePerDay}</strong>
          </p>
          <p className="text-lg">
            Total Cost: <strong>Rs. {totalCost}</strong>
          </p>
        </div>

        <button
          type="button"
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
