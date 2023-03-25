import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
return (
  <div>
    <div>Doughnut Chart</div>
    <Doughnut data={chartData} />
  </div>
);};

export default DoughnutChart;
