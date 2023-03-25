import React from 'react'

const Performance = () => {
     const data = [
       {
         name: "Bucket 3+ at the end of 18 months or Forbearance/Charge-offs/Re-age/Bankrupt/Settlement in 18 months",
         type: "Bad",
       },
       { name: "Bucket 2 at the end of 18 months", type: "Indeterminate" },
       { name: "Remaining", type: "Good" },
     ];
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
      <div className="mt-4 mx-4 w-20">
        <table className="w-20">
          <thead className="bg-white border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <div>6 Performance Definition</div>
                <div>(in 18 months performance window)</div>
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Good/Bad/Indeterminate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div>Bucket 3+ at the end of 18 months</div>
                <div>or Forbearance/Charge-offs/Re- age/</div>
                <div>Bankrupt/Settlement in 18 months</div>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Bad
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Bucket 2 at the end of 18 months
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Indeterminate
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Remaining
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Good
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Performance