import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between w-full h-20 px-4 md:px-10 py-6 border-b-2 border-gray-300">
        <div className="mr-0 md:mr-40">
          <h2 className="font-bold text-2xl">Fake Shop</h2>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-between items-center">
          <Link to={`/Filter/${encodeURIComponent('home')}`} className="mx-10">
            Home
          </Link>
          <Link
            to="/categories"
            className="mx-10 text-gray-400 hover:text-gray-600"
          >
            Category's
          </Link>
          <Link to="/offers" className="mx-10 text-gray-400 hover:text-gray-600">
            Offers
          </Link>
          <Link to="/help" className="mx-6 text-gray-400 hover:text-gray-600">
            Help
          </Link>

          <div className="border border-gray-400 px-2 py-1 rounded-xl relative left-32">
            <h1 className="text-gray-600">
              <i className="fa-solid fa-magnifying-glass pr-6"></i>
              <input type="text" placeholder="Search" className="w-44" />
            </h1>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <Link to="/cart">
            <button className="rounded-xl py-3 px-6 md:px-4 mx-1 md:relative md:-top-1 text-black font-bold text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </Link>
          <Link to="/Signin" className="pr-0 md:pr-3">
            <button className="bg-pink-500 px-6 md:px-8 py-1 mx-1 md:mx-3 text-white text-base rounded-md">
              LOGIN
            </button>
          </Link>
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
      {isMobileMenuVisible && (
        <div className="md:hidden bg-gray-200 p-4">
          {/* Search bar in mobile view */}
          <div className="border border-gray-400 px-2 py-1 rounded-xl mb-4">
            <h1 className="text-gray-600">
              <i className="fa-solid fa-magnifying-glass pr-6"></i>
              <input type="text" placeholder="Search" className="w-20" />
            </h1>
          </div>
          {/* Mobile menu items */}
          <Link to={`/Filter/${encodeURIComponent('home')}`} className="block py-2">Home</Link>
          <Link to="/categories" className="block py-2">Category's</Link>
          <Link to="/offers" className="block py-2">Offers</Link>
          <Link to="/help" className="block py-2">Help</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
