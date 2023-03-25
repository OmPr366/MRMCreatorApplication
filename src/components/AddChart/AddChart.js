import React from "react";
import MultiSelect from "./MultiSelect";
import Select from "react-select";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setDocument } from "../../utils/Redux/DocumentSlice";

const AddChart = () => {
  const dispatch = useDispatch();
  const documentData = useSelector((state) => state.DocumentSlice);
  const MrmData = useSelector((state) => state.CsvDataSlice);

  const chartOptions = [
    { value: "Line", label: "Line Chart" },
    { value: "Bar", label: "Bar Chart" },
    { value: "Pie", label: "Pie Chart" },
    { value: "Bubble", label: "Bubble Chart" },
    { value: "Doughnut", label: "Doughnut Chart" },
    { value: "PolarArea", label: "PolarArea Chart" },
    { value: "Radar", label: "Radar Chart" },
  ];

  const [totalGraphs, setTotalGraphs] = React.useState([1]);
  const [options, setOptions] = React.useState([]);

  // Add charts handler
  const addChartHandler = () => {
    setTotalGraphs([...totalGraphs, 1]);
    dispatch(
      setDocument({
        ...documentData,
        graphData: [
          ...documentData.graphData,
          {
            chartType: "Line",
            label: "",
            dataSets: [],
          },
        ],
      })
    );
    console.log("documentData :-", documentData);
  };

  React.useEffect(() => {
    console.log("all Mrm :-", MrmData);

    const temp = [];
    if (!MrmData?.length) return;
    MrmData[0]?.forEach((item, index) => {
      temp.push({ value: index, label: item });
    });
    setOptions(temp);
  }, [MrmData]);
  return (
    <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 m-4 pb-4 ">
      <div className="flex flex-wrap justify-around" >
      {totalGraphs.map((graph, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center my-4 border-2   "
            key={index}
          >
            <div className="w-96 m-4">
              <Select
                // defaultValue={documentData.graphData[index].label}
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
                options={options ? options : chartOptions}
                placeholder="Select Label"
              />
            </div>

            <div className="w-96 m-4">
              <Select
                options={options ? options : chartOptions}
                placeholder="Select Data sets"
                // value={selectedOptions}
                onChange={(value) => {
                  // set documentData.graphData[index].chartType = value.value;

                  const temp = [];
                  value.forEach((item) => {
                    temp.push(item.value);
                  });

                  dispatch(
                    setDocument({
                      ...documentData,
                      graphData: documentData.graphData.map((item, i) => {
                        if (i === index) {
                          return { ...item, dataSets: temp };
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
            <div className="w-96 m-4">
              <Select
                // defaultValue={documentData.graphData[index]}
                onChange={(value) => {
                  // set documentData.graphData[index].chartType = value.value;
                  dispatch(
                    setDocument({
                      ...documentData,
                      graphData: documentData.graphData.map((item, i) => {
                        if (i === index) {
                          return { ...item, chartType: value.value };
                        }
                        return item;
                      }),
                    })
                  );

                  console.log("documentData :-", documentData);
                }}
                options={chartOptions}
                placeholder="Type of Chart"
              />
            </div>
          </div>
        );
      })}</div>
      <div className="flex ">
        <button
          type="button"
          className="bg-green-400 text-white rounded-lg p-4 flex justify-center items-center"
          onClick={addChartHandler}
        >
          Add Chart
          <span className="ml-2">
            <IoMdAddCircle />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddChart;
