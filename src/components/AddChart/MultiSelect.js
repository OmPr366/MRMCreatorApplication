import React from "react";
import { useState } from "react";
import Select from "react-select";


const MultiSelect = ({ placeholder, options }) => {
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="w-96 m-4">
      <Select
        options={options ? options : chartOptions}
        placeholder={placeholder}
        value={selectedOptions}
        onChange={(value) => {
          // set documentData.graphData[index].chartType = value.value;
          dispatch(
            setDocument({
              ...documentData,
              graphData: documentData.graphData.map((item, i) => {
                if (i === index) {
                  return { ...item, label: value.value };
                }
                return item;
              }),
            })
          );

        }}
        isSearchable={true}
        isMulti
      />
    </div>
  );
};

export default MultiSelect;
