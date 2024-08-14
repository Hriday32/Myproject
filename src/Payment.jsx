import React, { useState } from "react";

const Payment = () => {
  const [recipientAmount, setRecipientAmount] = useState("");
  const [totalPayable, setTotalPayable] = useState(225.81);
  const [balance, setBalance] = useState(225.81);

  const handleNumberClick = (value) => {
    setRecipientAmount(recipientAmount + value);
  };

  const handleBackspace = () => {
    setRecipientAmount(recipientAmount.slice(0, -1));
  };

  const handleClear = () => {
    setRecipientAmount("");
  };

  const handleComplete = () => {
    console.log("Payment Completed");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold text-center mb-6">Payment Method</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Discount Rate</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Discount Method</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="In percentage"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Recipient Amount</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded"
              value={recipientAmount}
              onChange={(e) => setRecipientAmount(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Subtotal</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value="193.00$"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Discount Amount</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value="0.00$"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Tax Amount</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value="32.81$"
              readOnly
            />
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Total Payable</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={`${totalPayable}$`}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Balance</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={`${balance}$`}
              readOnly
            />
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[
            7,
            8,
            9,
            "+5",
            "+10",
            4,
            5,
            6,
            "+50",
            "+100",
            1,
            2,
            3,
            "+150",
            "+200",
            ".",
            0,
            "x",
            "1000",
            "5000",
          ].map((item) => (
            <button
              key={item}
              className="bg-blue-500 text-white py-2 rounded"
              onClick={() =>
                item === "x"
                  ? handleBackspace()
                  : handleNumberClick(item.toString())
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded w-full mr-2"
            onClick={handleClear}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded w-full ml-2"
            onClick={handleComplete}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
