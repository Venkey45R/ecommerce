import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {set_products} from "../redux/actions/productActions";
const ProductListing = () =>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{console.log("err",err);});
        dispatch(set_products(response.data));
    }; 
    useEffect(()=>{
        fetchProducts();
    },[]);
        return(
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;