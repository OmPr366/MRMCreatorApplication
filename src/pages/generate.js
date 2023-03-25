import React from "react";
import Lottie from "lottie-react";
import signupani from "../images/signup-ani.json";
import AddChart from "../components/AddChart/AddChart";
import CsvToJson from "../components/CsvToJson";
import BasicDetails from "../components/MrmDocument/BasicDetails";
import CreateChart from "../components/MrmDocument/MRMPages/CreateChart";
import MrmDocument from "../components/MrmDocument";

const generate = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  
  return (
    <div className="  p-10 mx-auto font-montserrat ">
      

      {pageIndex === 0 && <BasicDetails setPageIndex={setPageIndex} />}
      {pageIndex === 1 && (
        <div>
          <div className=" flex flex-col  mt-8">
            
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
      {pageIndex === 2 && <MrmDocument />}

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
            className={`${pageIndex==1?"bg-green-500":"bg-blue-500"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2`}
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
          >
           {pageIndex===1?"Generate":"Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default generate;
