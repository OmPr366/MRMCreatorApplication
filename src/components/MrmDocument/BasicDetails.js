import React from "react";
import CsvToJson from "../CsvToJson";
import { useDispatch, useSelector } from "react-redux";
import { setCsvData } from "../../utils/Redux/CsvDataSlice";

const BasicDetails = () => {
  const dispatch = useDispatch();

  const csvData = useSelector((state) => state.CsvDataSlice);

  return (
    <div>
      {/* Title Input  */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold">MRM Details</div>
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold ">Title</div>

            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Title"
              name="title"
              onChange={(e) => {
                dispatch(
                  setCsvData({
                    ...csvData,
                    title: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center ml-2">
            <div className="text-xl font-semibold">SubTitle</div>

            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter SubTitle"
              name="subTitle"
              onChange={(e) => {
                dispatch(
                  setCsvData({
                    ...csvData,
                    subTitle: e.target.value,
                  })
                );
              }}
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
