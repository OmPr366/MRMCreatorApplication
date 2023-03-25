import React from "react";
import Lottie from "lottie-react";
import signupani from "../images/signup-ani.json";
import AddChart from "../components/AddChart/AddChart";

const generate = () => {
  return (
    <div className=" lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden">
      <div className=" text-center text-4xl font-semibold">Generate MRM</div>
      <div className=" flex flex-col sm:flex-row-reverse mt-8">
        <div className="flex sm:w-1/2 mb-5 sm:mb-0 mx-10">
          <div className=" my-auto ">
            <Lottie loop={true} animationData={signupani} />
          </div>
        </div>
        <div>
          <AddChart />
        </div>
      </div>
    </div>
  );
};

export default generate;
