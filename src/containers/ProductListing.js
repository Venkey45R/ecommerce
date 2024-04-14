// ProductListing.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { set_products } from "../redux/actions/productActions";
import herobg from '../herobg.webp';
import men from '../men.jpg';
import women from '../women.jpeg';
import jew from '../jewl.jpeg';
import heroimg from '../heroim.jpg';
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
    <div className="bg-indigo-200 py-4 px-2 md:px-8">
      <div className=" mx-1 md:mx-14 rounded-xl mb-0 md:mb-10 pt-1 md:pt-6 pb-0 md:pb-20 bg-cover bg-center flex flex-col text-white justify-center items-center" style={{backgroundImage: `url(${herobg})`}}>
        <div className="block md:flex">
          <div className="block pt-12 pb-0 px-12 md:p-2 mt-20 md:mt-0">
            <h1 className=" font-bold text-lg md:text-2xl relative md:top-0 -top-24 md:mt-20 pr-0 ml-0 md:ml-20">Discover Limitless Possibilities in Online Shopping</h1>
            <h2 className=" text-sm md:text-lg relative -top-20 md:top-0 md:mt-20 ml-1 md:ml-20 pr-0 md:pr-40 leading-loose">With unlimited options on different products purchase your needs with a single button click and we will deliver you the best product possible.</h2>
            <p className=" text-xs md:text-base invisible md:visible relative -top-16 mt-10 md:top-0 ml-0 md:ml-20">More than 1000+ happy customers</p>
            <button className=" py-4 px-4 md:px-6 bg-blue-900 relative top-44 md:top-0 text-white ml-0 md:ml-20 mt-0 md:mt-12 rounded-xl">START SHOPPING NOW!</button>
          </div>
          <img src={heroimg} alt="shopping" className="h-60 md:h-80 mr-40 mt-10 md:mt-14 relative -top-52 left-10 md:left-0 md:top-0 rounded-lg md:rounded-full"/>
        </div>
      </div>
      <div className="mx-14 my-20">
        <h1 className="text-blue-900 text-xl font-bold mb-5">TOP DEALS:</h1>
        <div className="block md:grid md:grid-cols-3 md:gap-4 text-white">
          <div className="h-96 md:h-60 bg-white text-blue-900 rounded-md border-2 border-blue-900 my-8 md:my-0">
            <h2 className=" m-6 text-lg font-semibold relative md:top-0 top-40">MEN'S CLOTHING <br />AT 30% OFF</h2>
            <ul className="mx-10 md:mx-16 list-disc relative md:top-0 top-40 text-sm">
              <li>Premium Fabric</li>
              <li>Durability</li>
              <li>Personalized Fit</li>
            </ul>
            <div className="flex justify-center items-center ">
              <img src={men} alt="men" className=" w-32 rounded-md md:w-36 h-40 md:h-48 float-right md:mx-10 relative -top-36 md:left-24 left-0"/>
            </div>
          </div>
          <div className=" h-96 md:h-60 text-blue-900 bg-white rounded-md border-2 border-blue-900 my-8 md:my-0">
          <h2 className=" m-6 text-lg font-semibold relative top-40 md:top-0">WOMEN'S CLOTHING <br />AT 40% OFF</h2>
            <ul className="mx-10 md:mx-16 list-disc relative md:top-0 top-40 text-sm">
              <li>Luxurious Fabrics</li>
              <li>Versatile Styles</li>
              <li>Comfortable Designs</li>
            </ul>
            <div className="flex justify-center items-center ">
              <img src={women} alt="women" className="w-32 md:w-36 h-40 md:h-48 float-right mx-10 relative -top-40 md:-top-36 rounded-md md:left-24 left-0"/>
            </div>
          </div>
          <div className="h-96 md:h-60 bg-white text-blue-900 rounded-md border-2 border-blue-900 my-8 md:my-0">
          <h2 className=" m-6 text-lg font-semibold relative top-40 md:top-0">JEWELWRY COLLECTION<br />AT 10% OFF</h2>
            <ul className="mx-10 md:mx-16 list-disc relative md:top-0 top-40 text-sm">
              <li>Luxurious Fabrics</li>
              <li>Versatile Styles</li>
              <li>Comfortable Designs</li>
            </ul>
            <div className="flex justify-center items-center">
              <img src={jew} alt="jew" className="w-48 h-36 float-right mx-10 -mt-40 md:-mt-24 relative md:left-24 left-0"/>
            </div>
          </div>
        </div>
      </div>
      <ProductComponent category={category}/>
    </div>
  );
};

export default ProductListing;
