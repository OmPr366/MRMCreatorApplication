import React from 'react'
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Select from "react-select";

const chartOptions = [
  { value: "Line", label: "Line Chart" },
  { value: "Bar", label: "Bar Chart" },
  { value: "Pie", label: "Pie Chart" },
];

const SingleSelect = ({placeholder , options, index}) => {
  const dispatch = useDispatch();
  // selector for document 

    const doucmentData = useSelector((state) => state.DocumentSlice);
    const [selectedOption, setSelectedOption] = useState(null);


  return (
    <div className="w-96 m-4">
      <Select
        defaultValue={doucmentData.graphData[index]}
        onChange={setSelectedOption}
        options={options?options:chartOptions}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SingleSelect