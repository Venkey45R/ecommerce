// ConfirmCart.js

import React from "react";
import { useSelector } from "react-redux";

const ConfirmCart = ({ setShowConfirmation }) => {
  const product = useSelector((state) => state.product);
  const { title } = product;

  return (
    <div className="fixed top-0 -ml-48 md:-ml-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="bg-white w-80 md:w-96 p-4 md:p-6 rounded-lg shadow-md relative">
        <button
          onClick={() => setShowConfirmation(false)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none text-xl font-bold"
        >
          X
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Item Added to Cart</h1>
          <p className="text-gray-600">You have successfully added "{title}" to your cart.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCart;
