import React from 'react'
import pdf from "../images/pdf.png";
import Image from 'next/image';
const MRMCard = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  return (
    <div style={{ width: "350px" }} className="shadow-xl rounded-lg m-4">
      <div
        className="rounded-xl mb-20"
        style={{ width: "350px", height: "250px" }}
      >
        <Image src={pdf} width="350" height="200" />
      </div>
      <div className="p-5">
        <div className="flex flex-row items-center">
          <div className="text-3xl text-blue-600">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="text-base text-gray-500">
            <span className="mx-3">404</span>{" "}
            <span>
              {date} {month} {year}
            </span>
          </div>
        </div>
        <div className="font-semibold text-2xl mt-5">
          Generate your MRM Pdf files here
        </div>
        <div className="text-base mt-5">
          Navigate to MRM Generator to make your MRMs.
        </div>
      </div>
    </div>
  );
}

export default MRMCard