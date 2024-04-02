// ProductListing.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { set_products } from "../redux/actions/productActions";
import img from '../img.jpg';
import men from '../men.jpg';
import women from '../women.jpeg';
import jew from '../jewl.jpeg';
const ProductListing = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(set_products(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-indigo-200 py-4">
      <div className="h-96 bg-gray-50 mx-32 rounded-xl mb-10 ">
        <div className="flex">
          <div className="block">
            <h1 className=" font-bold text-2xl mt-20 ml-20">Shop Smarter, Live Better</h1>
            <h2 className=" font-semibold text-xl mt-10 ml-20">Discover Your Perfect Finds with Ease and Convenience</h2>
            <p className=" font-normal text-base ml-20 mt-5">* with more than 1000+ customers</p>
            <button className=" py-4 px-6 bg-blue-900 text-white ml-20 mt-10  rounded-xl">START SHOPPING NOW!</button>
          </div>
          <img src={img} alt="shopping" className=" h-80 mt-5 ml-40 rounded-2xl"/>
        </div>
      </div>
      <div className="mx-14 my-20">
        <h1 className="text-blue-900 text-xl font-bold mb-5">TOP DEALS:</h1>
        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="h-60 bg-white text-blue-900 rounded-md border-2 border-blue-900">
            <h2 className=" m-6 text-lg font-semibold">MEN'S CLOTHING <br />AT 30% OFF</h2>
            <ul className=" mx-16 list-disc">
              <li>Premium Fabric</li>
              <li>Durability</li>
              <li>Personalized Fit</li>
            </ul>
            <img src={men} alt="men" className="w-36 h-48 float-right mx-10 relative -top-40"/>
          </div>
          <div className="text-blue-900 bg-white rounded-md border-2 border-blue-900">
          <h2 className=" m-6 text-lg font-semibold">WOMEN'S CLOTHING <br />AT 40% OFF</h2>
            <ul className=" mx-16 list-disc">
              <li>Luxurious Fabrics</li>
              <li>Versatile Styles</li>
              <li>Comfortable Designs</li>
            </ul>
            <img src={women} alt="women" className="w-36 h-48 float-right mx-10 -mt-40"/>
          </div>
          <div className="bg-white text-blue-900 rounded-md border-2 border-blue-900">
          <h2 className=" m-6 text-lg font-semibold">WOMEN'S CLOTHING <br />AT 40% OFF</h2>
            <ul className=" mx-16 list-disc">
              <li>Luxurious Fabrics</li>
              <li>Versatile Styles</li>
              <li>Comfortable Designs</li>
            </ul>
            <img src={jew} alt="jew" className="w-48 h-36 float-right mx-10 -mt-40"/>
          </div>
        </div>
      </div>
      <ProductComponent category={category}/>
    </div>
  );
};

export default ProductListing;
