import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(storedCart);
    const totalPrice = storedCart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
  }, []);
  
  const handleRemoveCart = (productToRemove) => {
    const updatedCart = cartProducts.filter(product => product !== productToRemove);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    const totalPrice = updatedCart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
  }

  return (
    <div className="pb-10 bg-indigo-200 -mt-12 md:-mt-4 min-h-screen">
      <div className="mx-2 my-1 md:my-4 mt-12 pt-0 md:pt-10 border border-indigo-200">
        <h1 className="text-xl font-bold text-blue-900 ml-20 pb-6">YOUR ITEMS:</h1>
        <div className="flex justify-between mx-20">
          <div className="block bg-white rounded-xl px-10 pb-6">
            {cartProducts.map((product, index) => (
              <div key={index} className="flex justify-between mt-10 bg-white max-w-3xl pb-4 border border-blue-900 py-5 rounded-xl">
                <img src={product.image} alt="cart" className="w-20 h-20 ml-8 mr-4 my-4 md:my-5" />
                <div className="flex mt-2 md:mt-8 ml-1">
                  <h1 className="text-sm max-w-52 mx-2">{product.title}</h1>
                  <h2 className="text-sm mx-2">Price: $ {product.price}</h2>
                  <div className=" py-1">
                    <button className="rounded-lg p-3 -mt-2 font-bold ml-5 bg-blue-900 text-white">Proceed to checkout</button>
                  </div>
                  <button className=" mx-8 text-2xl bg-white font-bold text-red-500 relative -top-6" onClick={() => handleRemoveCart(product)}><i class="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            ))}
          </div>
          <div className="block mt-2 bg-white pt-10 px-10 mr-3 rounded-xl h-4/5">
            <div className="block py-4">
              <h2>PROMO CODE:</h2>
              <input type="text" placeholder="Promo code" className="w-80 h-12 rounded-xl px-2 bg-indigo-200 mt-2" />
            </div>
            <h2 className="text-lg mt-4">Order Summary:</h2>
            <div className=" flex justify-between mx-3 my-2">
              <h2 className="text-lg">Sub Total:</h2><h2>${total}</h2>
            </div>
            <div className=" flex justify-between mx-3 my-2">
              <h2 className=" text-lg">Shipping:</h2><h2> $0</h2>
            </div>
            <div className=" flex justify-between mx-3 my-2">
              <h2 className=" text-lg">Tax:</h2><h2> $0</h2>
            </div>
            <div className=" flex justify-between mx-3 my-2 border-t border-blue-900">
              <h2 className=" text-lg py-2">Grand Total:</h2><h2 className=" py-2 font-bold text-lg"> ${total}</h2>
            </div>
            <div className=" flex justify-between mx-3 my-2">
              <h2 className=" text-lg">Savings:</h2><h2> $32</h2>
            </div>
            <div className=" my-8 mx-2">
              <button className=" w-full py-3 rounded-xl bg-blue-900 text-white">ORDER NOW</button>
              <p className=" text-xs mt-4 ml-4"> *by clicking order now button you accept to our <span className=" text-blue-900">privacy policy</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
