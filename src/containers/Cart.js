import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(storedCart);
  }, []);

  const handleRemoveCart = (productToRemove) => {
    const updatedCart = cartProducts.filter(product => product !== productToRemove);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <div className="mx-10 my-4">
      {cartProducts.map((product, index) => (
        <div key={index} className="flex my-10 border border-black">
          <img src={product.image} alt="cart" className="w-40 h-40 ml-10 my-10" />
          <div className="block mt-10 ml-20">
            <h1 className="font-bold text-2xl">{product.title}</h1>
            <h2 className="font-semibold text-xl mt-2">Price: $ {product.price}</h2>
            <button className="px-4 py-2 bg-blue-400 text-white rounded-xl mt-5">
              Place your order
            </button>
            <button
              className="px-4 py-2 bg-red-400 text-white rounded-xl mt-5 ml-6"
              onClick={() => handleRemoveCart(product)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
