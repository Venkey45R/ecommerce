import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = ({ category }) => {
  const ca = category;
  const products = useSelector((state) => state.allProducts.products);
  const filteredProducts = ca !== "home" ? products.filter((product) => product.category === ca) : products;

  const renderList = filteredProducts.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div key={id} className="mb-4 md:mb-10 border border-zinc-400 px-2 py-4 rounded-xl hover:scale-105 cursor-pointer">
        <Link to={`/product/${id}`} className="flex flex-col">
          <div className="md:mb-8 md:flex md:flex-col">
            <div className="mx-0 my-3 md:mx-20 md:my-10">
              <img src={image} alt="product" className="md:w-32 md:h-40 flex md:block" />
            </div>
            <div className="mx-3 my-3 flex flex-col">
              <div className="font-semibold md:font-bold text-lg pb-2 mt-6 md:mt-2">{title}</div>
              <div className="text-lg pb-2">$ {price}</div>
              <div className="text-lg">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="m-3 md:m-12 grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-4">
      {renderList}
    </div>
  );
};

export default ProductComponent;
