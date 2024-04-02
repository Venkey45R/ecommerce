import React from "react";
import { useState, useEffect } from "react";
import {useNavigate ,Link} from "react-router-dom";
import image from "../Screenshot (49).png"
const usersArray = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'user4', password: 'pass4' },
    { username: 'user5', password: 'pass5' },
    { username: 'user6', password: 'pass6' },
    { username: 'user7', password: 'pass7' },
    { username: 'user8', password: 'pass8' },
    { username: 'user9', password: 'pass9' },
    { username: 'user10', password: 'pass10'},
  ];

const Signin = () =>{
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const validate = (e) =>{
        e.preventDefault();
        const user = usersArray.find((user) => user.username === username && user.password === password);
        if(user){
            setIsLoggedIn(true);
            navigate(-1);
        }
        else{
            alert('User can not found')
        }
    };
    useEffect(() => {
        if (isLoggedIn) {
            navigate(`/Filter/${encodeURIComponent('home')}`);
        }
    }, [isLoggedIn, navigate]);

    return(
        <div className="flex justify-center items-center h-screen bg-indigo-200 -mt-20 font-bodoni">
            <div className="bg-white px-8 py-14 rounded-xl shadow-md max-w-xl w-full mt-16">
                <div className="flex justify-center">
                    <h1 className="text-2xl text-blue-900 font-bold pb-1">Welcome Back</h1>
                </div>
                <div className="flex justify-center mb-3">
                    <h2 className="text-blue-900 text-base">Enter your credentials to access your account</h2>
                </div>
            <div className="flex justify-center my-2">
                <form className="px-4 md:px-2 py-6 rounded-xl w-full" onSubmit={validate}>
                    <div className="mb-6 border-2 border-gray-500 flex rounded-lg h-10">
                        <i class="fa-solid fa-envelope text-blue-900 p-3 border-r-2 border-blue-900"></i>
                        <input type="text" placeholder="Enter your username" className="w-full text-blue-900 font-bold text-xl px-2 py-2 placeholder:text-gray-400 placeholder:font-semibold placeholder:text-base" id="username" value={username} onChange={(e) => setusername(e.target.value)}/>
                    </div>
                    <div className="mb-6 flex  border-2 border-gray-500 rounded-lg h-10">
                    <i class="fa-solid fa-lock text-blue-900 p-3 border-r-2 border-blue-900"></i>
                        <input type="password" placeholder="Enter your password" className="w-full text-blue-900 font-bold text-xl px-2 py-2  placeholder:text-gray-400 placeholder:font-semibold placeholder:text-base" id="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <button className="py-2 px-4 bg-blue-900 text-white font-bold text-xl mt-4 rounded-lg w-full">Sign in</button>
                </form>
            </div>
        </div>
        <div className="flex justify-center absolute bottom-40">
                <h3 className=" text-gray-400 pr-1">Forget your password?</h3>
                <h3 className=" text-blue-900 cursor-pointer font-semibold">Reset password</h3>
            </div>
    </div>
    )
}
export default Signin;