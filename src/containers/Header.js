import React from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="flex w-full h-24 px-10 py-6 border-b-2 border-gray-200">
            <div>
                <h2 className=" font-bold text-2xl">Fake Shop</h2>
            </div>
            <div className="flex ml-auto">
                <Link to={`/Signin`}>
                    <button className="bg-blue-400 rounded-xl py-3 px-1 md:px-4 mx-1 md:mx-3 text-white font-bold text-sm md:text-xl">Sign in</button>
                </Link>
                <Link to={`/cart`}>
                    <button className="bg-blue-400 rounded-xl py-3 px-1 md:px-4 mx-1 md:mx-3 text-white font-bold text-sm md:text-xl">Cart</button>
                </Link>
            </div>
        </div>
    );
};
export default Header;