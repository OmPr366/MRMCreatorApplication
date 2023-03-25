import React from 'react'

const Performance = () => {
  return (
    <div className="pdfBox">
      <div className="text-s font-bold text-blue-500 m-2">
        Performance Definition:{" "}
      </div>
      <div className="text-xs mx-4 my-1">
        The model uses performance definition of ‘Bucket 3+ at the end of 18
        months’. This definition has been obtained on the basis of a business
        analysis conducted with a terminal window of 24 months. A greater
        emphasis has been made on keeping the false positive rate lower given
        that Credit Line Decrease is a negative action to a customer. The
        business analysis is also supported by statistical analysis on the
        choice of target variable definition. In addition, forbearance, re-age
        and settlements in 18 months has been classified as bads.
      </div>
      <div className="text-xs mx-4 my-1">
        To minimize overlap between Good/Bad characteristics, ‘indeterminate has
        been assigned in the model development. Accounts with Bucket 2 at the
        end of performance window has been tagged as ‘indeterminate’ as accounts
        have higher false positive rate (~50%), but belongs to a negative
        segment.
      </div>
    </div>
  );
}

export default Performance