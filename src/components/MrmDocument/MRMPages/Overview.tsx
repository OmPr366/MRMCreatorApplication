import React from 'react'

const Overview = () => {
  return (
    <div className="pdfBox">
      <div className="text-s font-bold text-blue-500 m-2">
        Model Risk Evaluation
      </div>
      <div className="text-xs mx-4 my-1">
        The CLD model is developed as an account level score and scores all the
        ECM consumer accounts. It is developed using on-us ECM information
        (daily and cycle-end), batch bureau (monthly) and Bureau trigger (daily)
        information. The use of daily data in the model development allows the
        score to adjust according to the changes observed at a daily level and
        hence capturing the accounts with an early sign of financial distress.
      </div>

      <div className="text-xs mx-4">
        The model development went through four major stages:
      </div>
      <div className="text-xs mx-4 my-2">
        <div className="mx-3">
          {" "}
          - Vintage Selection and Performance Definition
        </div>
        <div className="mx-3"> - Data Preparatio</div>
        <div className="mx-3"> - Model Development and Validation</div>
        <div className="mx-3"> - Documentation</div>
      </div>

      <div className="text-s font-bold text-blue-500 m-2">
        Vintage Selection
      </div>

      <div className="text-xs mx-4">
        The choice of vintages used for model development is governed by the
        following key factors:
      </div>
      <div className="text-xs mx-4 my-2">
        <div className="mx-3">
          - <span className="font-bold">Data availability: </span> The model
          makes use of daily CLD extracts as development base, which is
          available as archives and is retained for 24 months. Further, the
          model uses daily bureau attributes.
        </div>
        <div className="mx-3">
          - <span className="font-bold"> Recency: </span> Choosing a recent
          vintage to incorporate recent patterns related to credit risk
          behavior. Also, recency in vintage ensures better representation of
          portfolio performance.
        </div>
        <div className="mx-3">
          - <span className="font-bold"> Forward looking: </span> Vintages
          selected are representative of the forward looking state of the
          portfolio. This has been demonstrated with a validation on most recent
          vintage of April 2019.
        </div>
      </div>
      <div className="text-xs mx-4">
        The final vintages used for the Model development and validations are:
      </div>
      <div className="text-xs mx-4 my-2">
        <div className="mx-3">- Development: Dec’2018</div>
        <div className="mx-3">- Back-Testing: Feb’2018</div>
        <div className="mx-3">- Validation: Apr’2019</div>
        <div className="mx-3">- Early Warnings: Dec’2019</div>
      </div>
    </div>
  );
}

export default Overview