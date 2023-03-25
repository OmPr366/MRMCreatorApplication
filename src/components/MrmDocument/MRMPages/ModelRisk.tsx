import React from "react";

const ModelRisk = () => {
  return (
    <div className="pdfBox">
      <div className="text-s font-bold text-blue-500 m-2">
        Model Risk Evaluation
      </div>
      <div className="text-xs mx-4">
        Model risk occurs primarily for two reasons:
      </div>
      <div className="text-xs mx-4 my-2">
        <div className="mx-3">
          - A model may have fundamental errors and produce inaccurate outputs
          when viewed against its design objective and intended business uses
        </div>
        <div className="mx-3">
          - A model may be used incorrectly or inappropriately or there may be a
          misunderstanding about its limitations and assumptions. Model risk
          increases with greater model complexity, higher uncertainty about
          inputs and assumptions, broader extent of use, and larger potential
          impact
        </div>
      </div>

      <div className="text-s font-bold text-blue-500 m-2">Overview</div>
      <div className="text-xs mx-4">
        The Credit Line Decrease (CLD) model is used to identify high risks
        accounts with the objective to mitigate potential losses by decreasing
        their credit limit. The model will be used on all the RRB credit card
        customers.
      </div>
      <div className="text-xs mx-4 my-1">
        RRB branded credit card is a core product of RRB and accounts for ~$90
        million ANR with ~20 million open accounts till Dec’22
      </div>
      <div className="text-xs mx-4 my-1">
        The model has been built using Dec 2018 development vintage. February
        2018 and April 2019 has been used for out-of-time (OOT) validations. The
        model has been built on entire card customers except for the customers
        whose past 12 months historical data is not known.
      </div>
      <div className="text-xs mx-4 my-1">
        The model estimates the likelihood of an account having a status of 60+
        days past due at the end of 18 months (classified as ‘bad’ hereafter in
        this document).
      </div>
      <div className="text-xs mx-4 my-1">
        The model has been built on both internal as well as external data. The
        external credit bureau data is received monthly through a batch process
        for the Existing Card Members (ECM). In addition, the model leverages
        daily data – daily bureau (in addition to batch bureau), daily triggers
        and a few daily on-us attributes – to allow the identification of high
        risk accounts before they utilize the remaining open-to-buy amount.
      </div>
    </div>
  );
};

export default ModelRisk;
