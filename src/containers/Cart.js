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
    <div className="mx-2 md:mx-10 my-1 md:my-4">
      {cartProducts.map((product, index) => (
        <div key={index} className="flex my-10 border border-black">
          <img src={product.image} alt="cart" className="w-32 md:w-40 h-32 md:h-40 ml-4 md:ml-10 my-4 md:my-10" />
          <div className="block mt-4 md:mt-10 ml-8 md:ml-20">
            <h1 className="font-bold text-lg md:text-2xl">{product.title}</h1>
            <h2 className="font-semibold text-base md:text-xl mt-2">Price: $ {product.price}</h2>
            <button className="px-2 md:px-4 py-1 md:py-2 bg-blue-400 text-white rounded-xl mt-5">Place your order</button>
            <button className="px-2 md:px-4 py-1 md:py-2 bg-red-400 text-white rounded-xl mt-2 md:mt-5 ml-0 md:ml-6 mb-2 md:mb-0" onClick={() => handleRemoveCart(product)}>Remove from cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
