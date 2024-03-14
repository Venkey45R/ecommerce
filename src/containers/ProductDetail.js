import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selected_Products } from "../redux/actions/productActions";
import Cart from "./Cart";
import ConfirmCart from "./ConfirmCart"; 
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
        <div className="block md:flex m-3 md:m-10">
          <img src={image} alt="product" className="w-4/5 h-4/5 md:w-1/4 md:h-1/4 ml-8 md:ml-0 mr-8 md:mr-20 mt-10" />
          <div className="block my-8">
            <p className="font-bold text-2xl my-3">{title}</p>
            <div className="block">
              <p className="font-semibold text-2xl">Price:</p>
              <p className="font-semibold text-lg">${price}</p>
            </div>
            <p className="my-2 font-semibold">Category: {category}</p>
            <div className="block my-8">
              <p className="font-bold text-2xl my-2">About Product:</p>
              <p className="mr-5 md:mr-40">{description}</p>
            </div>
            <div className="block md:flex my-14">
              <button className="bg-pink-600 text-white font-bold mb-5 mx-20 px-7 md:px-10 py-5 rounded-xl mr-20 hover:bg-blue-600">
                <i className="fa-solid fa-bag-shopping mr-6 text-xl"></i>Buy Now
              </button>
              <button
                className="bg-pink-600 text-white font-bold mb-5 mx-20 md:mx-0 px-4 md:px-10 py-5 rounded-xl hover:bg-blue-600"
                onClick={handleAddToCart}
              >
                <i className="fa-solid fa-cart-shopping mr-6 text-xl"></i>Add to cart
              </button>
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