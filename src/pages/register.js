import React, { useState } from "react";
import Lottie from "lottie-react";
import signupani from "../images/signup-ani.json";
import Navbar from "../components/Nav/Navbar";
import Link from "next/link";

const register = () => {
    const [user, setUser] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    });
    const handleInputs = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(e);
    };
  return (
    <>
      <Navbar />
      <div className=" lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden">
        <div className=" text-center text-4xl font-semibold">Sign Up</div>
        <div className=" flex flex-col sm:flex-row-reverse mt-8">
          <div className="flex sm:w-1/2 mb-5 sm:mb-0 mx-10">
            <div className=" my-auto ">
              <Lottie loop={true} animationData={signupani} />
            </div>
          </div>
          <div className=" sm:w-1/2 sm:ml-10 my-auto flex flex-col">
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              value={user.name}
              name="name"
              onChange={handleInputs}
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="text"
              placeholder="Your Email"
              name="email"
              value={user.email}
              onChange={handleInputs}
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="text"
              placeholder="Your Mobile Number"
              value={user.phone}
              name="phone"
              onChange={handleInputs}
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
            ></input>
            <button
              type="submit"
              className=" w-full mt-3 py-3 bg-blue-600 rounded-lg text-white text-lg m-1 mb-2"
              
            >
              Send
            </button>
            <Link href="/signin" className="pointer text-blue-600 ml-auto">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
