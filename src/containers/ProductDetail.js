import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selected_Products } from "../redux/actions/productActions";
import Cart from "./Cart";
import ConfirmCart from "./ConfirmCart";
import star from "../stars.png";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Features, setFeautures] = useState(false);

  const fetchProductDetail = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    ).catch((err) => {
      console.log("err", err);
    });
    dispatch(selected_Products(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);

  const NewCart = (product) => {
    const key = 'cart';
    const existingCart = JSON.parse(localStorage.getItem(key)) || [];
    existingCart.push(product);
    localStorage.setItem(key, JSON.stringify(existingCart));
  };

  const handleAddToCart = () => {
    NewCart(product);
    setShowConfirmation(true);
  };

  const toggleDescription = () => {
    setVisible(!visible);
  };

  const toggleFeautures = () =>{
    setFeautures(!Features);
  }

  return (
    <div className="bg-indigo-200 pt-10">
      <div className=" block">
        <div className=" flex justify-center items-center mx-4 md:mx-80 py-20 bg-white rounded-3xl">
          <div className=" flex">
            <i className="fa-solid fa-arrow-left text-4xl cursor-pointer my-auto mx-0 md:mx-20 text-blue-900"></i>
            <img src={product.image} alt="product" className="w-60 md:w-80 h-80 md:h-96" />
            <i className="fa-solid fa-arrow-right text-4xl cursor-pointer my-auto mx-0 md:mx-20 text-blue-900"></i>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-16 ml-0 md:ml-40">
          <div className=" block mx-4 md:mx-96 text-blue-900">
            <div className=" relative left-0 md:left-10">
            <h1 className="mx-20 md:mx-0 text-xl md:text-2xl font-bold ml-24 md:-ml-72 py-2">{title}</h1>
            <p className="ml-24 md:-ml-72">Category: {category} </p>
            <div className="">
              <div className=" flex ml-24 md:-ml-72 py-8 text-lg md:text-xl font-bold">
                <p className=" mr-4">PRICE:</p>
                <strike className=" mr-4">${price}</strike>
                <p className="mr-1">${price - price * 20 / 100}</p>
                <p className="text-xs font-normal mt-1">*Inclusive of all taxes</p>
              </div>
            </div>
            </div>
            <div className="ml-20 md:-ml-60 mr-24 md:-mr-6 border-2 rounded-xl bg-blue-900 text-white border-white py-6">
              <div className={`flex cursor-pointer`} onClick={toggleDescription}>
                <p className=" text-xl font-bold ml-6">Description:</p>
                <div className=" absolute ml-0 md:ml-96">
                  <i className={`fa-solid fa-caret-${visible ? `up`: `down`} text-2xl ml-72 md:ml-80`}></i>
                </div>
              </div>
              {visible && <div className="flex justify-center items-center max-w-3xl"><p className=" ml-20 mt-6 mr-20">{description}</p></div>}
            </div>
            <div className="  mt-6 ml-20 md:-ml-60 mr-24 md:-mr-6 border-2 rounded-xl bg-blue-900 text-white border-whitek py-6">
              <div className={`flex cursor-pointer`}  onClick={toggleFeautures}>
                <h1 className={` text-xl font-bold ml-6`}>Features:</h1>
                <div className=" absolute ml-0 md:ml-96">
                  <i className={`fa-solid fa-caret-${Features ? `up`: `down`} text-2xl ml-72 md:ml-80`}></i>
                </div>
              </div>
              {Features &&
              <div className="">
                <ul className="list-disc ml-16 md:ml-28">
                  <li>7-days Replacement</li>
                  <li>Free Delivery</li>
                  <li>1-Year Warranty</li>
                  <li>Cash on Delivery</li>
                  <li>Top Brand</li>
                </ul>
              </div>
              }
            </div>
            <div className="mt-6 ml-20 md:-ml-60 mr-24 md:-mr-6 border-2 rounded-xl bg-blue-900 text-white border-whitek py-6">
                <h1 className=" text-xl font-bold ml-6">Reviews:</h1>
              <div className="  absolute ml-96 -mt-10 flex">
                <img src={star} alt="star" className=" h-10 md:h-12 -ml-36 md:ml-28"/>
                <i className={`fa-solid fa-caret-down text-2xl ml-12 mt-3`}></i>
              </div>
            </div>
            <div className="flex relative left-32 md:-left-20 ">
              <div className=" block mr-10 py-4 mt-4 md:mt-10 relative top-0 md:top-1">
                <button className="bg-blue-900 text-white w-60 h-20 rounded-xl border-2 border-white mb-0 md:mb-4"><i class="fa-solid fa-bag-shopping mr-4"></i>Buy Now</button>
              </div>
              <div className=" flex py-4 mt-28 relative md:left-0 -left-64 top-0 md:-top-16 ">
                <button className="bg-blue-900 text-white w-60 h-20 relative md:left-0 -left-6 rounded-xl border-2 border-white" onClick={handleAddToCart}><i class="fa-solid fa-cart-shopping mr-4"></i>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-10 bg-blue-900">
        <div className=" flex justify-center border-t-2 border-white">
          <h2 className="font-bold text-2xl text-yellow-500 mt-6"><i class="fa-solid fa-crown mx-3 "></i>TRENDIFY HUB</h2>
        </div>  
        <div className=" flex justify-center mb-3 mt-6 text-indigo-200">
            <p className=" mx-4 cursor-pointer">Home</p>
            <p className=" mx-4 cursor-pointer">Features</p>
            <p className=" mx-4 cursor-pointer">Pricing</p>
            <p className=" mx-4 cursor-pointer">Services</p>
            <p className=" mx-4 cursor-pointer">Shop</p>
        </div>
        <div className=" flex justify-center pt-10">
          <div className="rounded-full mx-4 text-blue-900 py-4 px-6 bg-white"><i class="fa-brands fa-facebook-f"></i></div>
          <div className="rounded-full mx-4 text-blue-900 px-6 py-4 bg-white"><i class="fa-brands fa-instagram"></i></div>
          <div className="rounded-full mx-4 text-blue-900 px-6  py-4 bg-white"><i class="fa-brands fa-x-twitter"></i></div>
          <div className="rounded-full mx-4 text-blue-900 px-6 py-4 bg-white"><i class="fa-brands fa-linkedin"></i></div>
        </div>
      </div>
      </div>
      {showConfirmation && (
        <ConfirmCart
          product={product}
          setShowConfirmation={setShowConfirmation}
        />
      )}
    </div>
  );
};

export default ProductDetail;
