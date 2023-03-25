import React, { useState } from 'react'
import BarChart from "./Charts/BarChart";
import BubbleChart from "./Charts/BubbleChart";
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import PolarAreaChart from "./Charts/PolarAreaChart";
import RadarChart from "./Charts/RadarChart";
import { UserData } from "./Data";
import { useSelector, useDispatch } from "react-redux";

const CreateChart = () => {

  const dispatch = useDispatch();

  const documentData = useSelector((state) => state.DocumentSlice);
     const [userData, setUserData] = useState({
       labels: UserData.map((data) => data.year),
       datasets: [
         {
           label: "Profit",
           data: UserData.map((data) => data.profit),
           backgroundColor: [
             "rgba(255, 99, 132, 0.2)",
             "rgba(255, 159, 64, 0.2)",
             "rgba(255, 205, 86, 0.2)",
             "rgba(75, 192, 192, 0.2)",
             "rgba(54, 162, 235, 0.2)",
             "rgba(153, 102, 255, 0.2)",
             "rgba(201, 203, 207, 0.2)",
           ],
           borderColor: [
             "rgb(255, 99, 132)",
             "rgb(255, 159, 64)",
             "rgb(255, 205, 86)",
             "rgb(75, 192, 192)",
             "rgb(54, 162, 235)",
             "rgb(153, 102, 255)",
             "rgb(201, 203, 207)",
           ],
           borderWidth: 1,
         },
       ],
     });
  return (
    <div >
      {console.log(documentData?.graphData,"  Document data")}
      {documentData?.graphData?.map((data,index) => {
        return (
          <div className="pdfBox" key={index}>
            {data?.chartType === "Bar" && <BarChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "Bubble" && <BubbleChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "Line" && <LineChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "Doughnut" && <DoughnutChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "Pie" && <PieChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "PolarArea" && <PolarAreaChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}
            {data?.chartType === "Radar" && <RadarChart data={data} labelIndex = {data?.label?data?.label:0}  dataSets={data?.dataSets} />}

          </div>
        );
      })
      }
      {/* <div className="chart">
        <PolarAreaChart chartData={userData} />
      </div>
      <div className="chart">
        <BarChart chartData={userData} />
      </div>
      <div className="chart">
        <BubbleChart chartData={userData} />
      </div>
      <div className="chart">
        <DoughnutChart chartData={userData} />
      </div>
      <div className="chart">
        <PieChart chartData={userData} />
      </div>
      <div className="chart">
        <LineChart chartData={userData} />
      </div>
      <div className="chart">
        <RadarChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default CreateChart