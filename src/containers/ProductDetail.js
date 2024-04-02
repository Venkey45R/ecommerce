import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selected_Products } from "../redux/actions/productActions";
import Cart from "./Cart";
import ConfirmCart from "./ConfirmCart"; 
import replace from '../replace.png';
import free from '../free.png';
import year from '../year.png';
import cash from '../cash.png';
import top from '../top.png';
const ProductDetail = () =>{
    const product = useSelector((state)=>state.product);
    const {image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);
    console.log(product);
    const fetchProductDetail = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
            console.log("err",err);
        });
        dispatch(selected_Products(response.data));
    };
    useEffect(()=>{
        if(productId && productId!==""){
            fetchProductDetail(); 
        }
    },[productId]);
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
      return (
        <div className=" bg-indigo-200 -mt-10">
        <div className="block m-3 md:mx-10 md:mt-10 pt-10">
          <div className=" mx-80">
            <div className="bg-white flex justify-center items-center rounded-2xl">
            <i class="fa-solid fa-arrow-left text-4xl cursor-pointer"></i>
              <img src={image} alt="product" className="w-2/5 h-1/5 py-10 mx-40"/>
              <i class="fa-solid fa-arrow-right text-4xl cursor-pointer"></i>
            </div>
          </div>
          <div className="flex justify-center items-center ml-80">
          <div className="my-10">
          <p className="mt-0 mb-4 font-normal text-lg">Category: {category}</p>
            <p className="font-bold text-xl my-3">{title}</p>
           <div className="block my-6">
           <div className="flex">
              <p className="font-semibold text-xl">MRP:</p>
              <strike className="font-semibold text-xl ml-3">${price+100}</strike>
            </div>
              <div className="flex">
                <p className=" font-semibold text-xl my-3">PRICE: {price}</p>
                <p className="mt-4 ml-6">*Inclusive of all taxes</p>
              </div>
            </div>
            <div className="block my-8">
              <p className="font-bold text-2xl my-2">About Product:</p>
              <p className="mr-5 md:mr-60">{description}</p>
            </div>
            <div className="block ">
            <h1 className="text-xl font-semibold my-2">Feautures:</h1>
            <div className="flex mt-8">
              <div className="block mr-14">
                <div className="flex justify-center items-center">
                  <img src={replace} alt="replacement available" className="w-10 h-10 rounded-full"/>
                </div>  
                <p className="text-sm">7-days Replacement</p>
              </div>
              <div className="block mr-14">
                <div className="flex justify-center items-center">
                  <img src={free} alt="replacement available" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-sm">Free Delivery</p>
                </div>
              </div>
              <div className="block mr-14">
                <div className="flex justify-center items-center">
                  <img src={year} alt="replacement available" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-sm">1-Year Warrenty</p>
                </div>
              </div>
              <div className="block mr-14">
                <div className="flex justify-center items-center">
                  <img src={cash} alt="replacement available" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-sm">cash on delivery</p>
                </div>
              </div>
              <div className="block mr-14">
                <div className="flex justify-center items-center">
                  <img src={top} alt="replacement available" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-sm">top brand</p>
                </div>
              </div>
            </div>
            </div>
            <div className="block md:flex my-14">
              <button className="bg-blue-900 text-white font-bold mb-5 mx-20 px-7 md:px-10 py-5 rounded-xl mr-20">
                <i className="fa-solid fa-bag-shopping mr-6 text-xl"></i>Buy Now
              </button>
              <button
                className="bg-blue-900 text-white font-bold mb-5 mx-20 md:mx-0 px-4 md:px-10 py-5 rounded-xl"
                onClick={handleAddToCart}
              >
                <i className="fa-solid fa-cart-shopping mr-6 text-xl"></i>Add to cart
              </button>
            </div>
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