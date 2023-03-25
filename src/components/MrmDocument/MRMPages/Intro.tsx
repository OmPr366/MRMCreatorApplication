import React from "react";

const Intro = ({title}) => {
  return (
    <div className="pdfBox">
      {/* title */}
      <h1 className="text-3xl underline font-bold text-center  ">
        {title}
      </h1>
      {/* Subtitle */}
      <h2 className="text-2xl text-center font-medium	 mt-5 ">
        Credit Line Decrease Model: Version 2
      </h2>
      <h2 className="text-2xl text-center font-medium	 mt-4 ">
        Model Group : Customer Valuation Model 2
      </h2>

      {/* created Data */}
      <h2 className="text-lg text-center  mt-4 ">Created Date : 12/12/2020</h2>
      <h2 className="text-lg text-center  mt-4 ">Developer : 404</h2>
    </div>
  );
};

export default Intro;
