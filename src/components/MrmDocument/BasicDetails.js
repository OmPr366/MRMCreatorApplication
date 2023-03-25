import React from "react";
import CsvToJson from "../CsvToJson";

const BasicDetails = () => {
  return (
    <div>
      {/* Title Input  */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold">Basic Details</div>
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold ">Title</div>

            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Title"
            />
          </div>
          <div className="flex flex-col justify-center items-center ml-2">
            <div className="text-xl font-semibold">SubTitle</div>

            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter SubTitle"
            />
          </div>
        </div>

        {/* Upload file */}
        <div className="flex flex-col justify-center items-center mt-5">
          <CsvToJson />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
