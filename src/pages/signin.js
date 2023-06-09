import React, { useState } from "react";
import Lottie from "lottie-react";
import signupani from "../images/signup-ani.json";
import Navbar from "../components/Nav/Navbar";
import Link from "next/link";
import { useRouter } from 'next/router'
import { signin } from "../../actions/auth";

const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ()=>{

    signin({email,password}).then((res)=>{
      if(res.status==200){
        console.log("Status :- ",res)
        localStorage.setItem("token",res.data.token)
        router.push("/")
      }
      else {
        // Alert in web 
        console.log("Status :- ",res)
        alert("Invalid Credentials")
      }
    }
    )
    
  }
  return (
    <>
      <Navbar />
      <div className=" lg:w-5/6 mx-auto font-montserrat overflow-hidden">
        <div className=" text-center text-4xl font-semibold">Log In</div>
        <div className=" flex flex-col sm:flex-row mt-8 px-10">
          <div className="flex sm:w-1/2 mb-5 sm:mb-0 mx-10">
            <div className=" my-auto ">
              <Lottie loop={true} animationData={signupani} />
            </div>
          </div>
          <div className=" sm:w-1/2 sm:ml-10 my-auto flex flex-col">
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className=" w-full mt-3 py-3 bg-blue-600 rounded-lg text-white text-lg m-1 mb-2"
              onClick={handleLogin}
            >
              Send
            </button>
            <Link
              href="/register"
              className="pointer text-blue-600 ml-auto pb-10"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default login