import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <div>
      <div>Pie Chart</div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
