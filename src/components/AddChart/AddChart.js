import React from 'react'
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
import { IoMdAddCircle } from "react-icons/io";


const AddChart = () => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 m-4">
      <SingleSelect placeholder="Select Label" />
      <MultiSelect placeholder="Select Data Sets" />
      <MultiSelect placeholder="Types of Charts" />
      <div className='flex'>
        <button type="button" className='bg-green-400 text-white rounded-lg p-4'>Add Chart <span><IoMdAddCircle/></span></button>
      </div>
    </div>
  );
}

export default AddChart