import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ chartData }) => {
 return (
   <div>
     <div>Radar Chart</div>
     <Radar data={chartData} />
   </div>
 );
};

export default RadarChart;
