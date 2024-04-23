import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between w-full h-20 px-4 md:px-10 py-0 border-b-2 border-gray-50 bg-blue-900">
        <div className="mr-0 md:mr-40">
          <h2 className="font-bold text-lg md:text-2xl text-yellow-400"><i class="fa-solid fa-crown mx-3 "></i>TRENDIFY HUB</h2>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-between items-center text-indigo-200 font-semibold">
          <Link to={`/Filter/${encodeURIComponent('home')}`} className="mx-10 hover:text-white">
            Home
          </Link>
          <Link
            to="/categories"
            className="mx-10 hover:text-white"
          >
            Category's
          </Link>
          <Link to="/offers" className="mx-10 hover:text-white">
            Offers
          </Link>
          <Link to="/help" className="mx-6 hover:text-white">
            Help
          </Link>

          <div className="border border-white px-2 py-1 rounded-xl relative left-24">
            <h1 className="text-indigo-200 flex">
              <i className="fa-solid fa-magnifying-glass pr-6 pt-1"></i>
              <input type="text" placeholder="Search" className="w-44 bg-blue-900 placeholder:text-white" />
            </h1>
          </div>
        </div>
        <div className="flex items-center ml-auto -mt-4 md:-mt-0">
          <Link to="/cart">
            <button className="rounded-xl py-1 px-6 md:px-4 mx-1 md:relative md:-top-0 text-indigo-200 font-bold text-lg flex items-center md:text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </Link>
          <Link to="/Signin" className="hidden md:flex pr-0 md:pr-3">
            <button className="bg-indigo-200 px-6 md:px-8 py-1 mx-1 md:mx-3 text-blue-900 text-base rounded-md">
              LOGIN
            </button>
          </Link>
          <div className="md:hidden cursor-pointer relative items-center" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars text-lg text-white"></i>
          </div>
        </div>
      </div>
      {isMobileMenuVisible && (
        <div className="md:hidden bg-indigo-200 p-4">
          <div className="border border-gray-50 px-2 py-1 rounded-xl mb-4">
            <h1 className="text-blue-900">
              <i className="fa-solid fa-magnifying-glass pr-6"></i>
              <input type="text" placeholder="Search" className="w-16 bg-indigo-200 placeholder:text-black" />
            </h1>
          </div>
          <Link to={`/Filter/${encodeURIComponent('home')}`} className="block py-2 px-10">Home</Link>
          <Link to="/categories" className="block py-2 px-10">Category's</Link>
          <Link to="/offers" className="block py-2 px-10">Offers</Link>
          <Link to="/help" className="block py-2 px-10">Help</Link>
          <Link to="/signin" className="block py-2 px-10">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
