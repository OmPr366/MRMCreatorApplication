import React from 'react'

const Content = () => {
  return (
    <div className="pdfBox">
      {/* Content page  */}
      <h1 className="text-s underline font-bold text-center text-blue-500  ">
        Table of Content
      </h1>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Model Risk Evaluation {`->`} </span>
        <span>4</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Overview {`->`} </span>
        <span>4</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Model Overview {`->`} </span>
        <span>4</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Vintage Selection {`->`} </span>
        <span>5</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Performance Definition: {`->`} </span>
        <span>5</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span>Data Preparation {`->`} </span>
        <span>6</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span className="mx-4">Dataset Creation {`->`} </span>
        <span>6</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span className="mx-4">Data Quality Check {`->`} </span>
        <span>6</span>
      </div>
      <div className="text-xs  flex justify-between mx-4 my-2">
        <span className="mx-4">Derived Variables {`->`} </span>
        <span>7</span>
      </div>
    
    </div>
  );
}

export default Content