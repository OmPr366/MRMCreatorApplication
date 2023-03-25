import React from 'react'
import { useState } from 'react';
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SingleSelect = ({placeholder}) => {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="w-96 m-4">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SingleSelect