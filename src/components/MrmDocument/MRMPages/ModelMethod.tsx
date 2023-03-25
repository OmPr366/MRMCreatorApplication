import React from 'react'

const ModelMethod = () => {
  return (
    <div className="pdfBox">
      <div className="text-xs mx-4 my-2">
        <div className="mx-3">
          <div>- Number of trees (n trees)</div>
          <div>- Depth of a tree (interaction depth)</div>
          <div>- Learning rate (shrinkage)</div>
          <div>- Regularization parameters (alpha, lambda, gamma)</div>
          <div>- Minimum number of observations</div>
          <div>- Subsample and Column Sample</div>
        </div>
      </div>
      <div className="text-s font-bold text-blue-500 m-2">
        {" "}
        Model Performance using charts:
      </div>
    </div>
  );
}

export default ModelMethod