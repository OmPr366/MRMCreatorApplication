import React from "react";
import Lottie from "lottie-react";
import signupani from "../images/signup-ani.json";
import AddChart from "../components/AddChart/AddChart";
import CsvToJson from "../components/CsvToJson";
import BasicDetails from "../components/MrmDocument/BasicDetails";

const generate = () => {
  const [pageIndex, setPageIndex] = React.useState(1);
  return (
    <div className=" lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden">
      <div className=" text-center text-4xl font-semibold">Generate MRM</div>

      {pageIndex === 0 && <BasicDetails setPageIndex={setPageIndex} />}
      {pageIndex === 1 && (
        <div>
          <div className=" flex flex-col sm:flex-row-reverse mt-8">
            
            <div>
              <AddChart />
            </div>
          </div>

          <div className="fixed bottom-10 right-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Generate
            </button>
          </div>
        </div>
      )}

      {/* Footer for Navigation back and next  */}
      <div className="flex justify-between mt-10 w-full">
        <div className="flex">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={() => {
              setPageIndex(pageIndex - 1);
            }}
            disabled={!pageIndex}
          >
            Back
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default generate;
