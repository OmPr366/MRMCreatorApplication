import React from 'react'
import { useState } from "react";
import Select from "react-select";

const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];



const MultiSelect = ({ placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="w-96 m-4">
      <Select
        options={optionList}
        placeholder={placeholder}
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={true}
        isMulti
      />
    </div>
  );
};

export default MultiSelect