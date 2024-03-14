// ProductListing.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { set_products } from "../redux/actions/productActions";

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
    <div>
      <ProductComponent category={category} />
    </div>
  );
};

export default ProductListing;
