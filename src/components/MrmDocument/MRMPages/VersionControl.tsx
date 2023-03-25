import React from 'react'

const titles = ["version", "Date", "Author", "Change"]

const VersionControl = () => {

  return (
    <div className="pdfBox">
        <h2 className="text-2xl text-center font-medium	 mt-5 ">
            Document Version Control
        </h2>
        <h3 className="text-lg text-center  mt-4 ">Indicate Document version number and track documentation changes</h3>
        
        {/* Table  */}
<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Version
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Author
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Change
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              2 Sep 2023
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              20 Sep 2023
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dillan
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              22 Sep 2023
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Twen
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>    
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4.0</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              29 Sep 2023
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dillan
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              29 Oct 2021
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Dillan
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default VersionControl