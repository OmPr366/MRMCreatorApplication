import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <div>
      <div>Line Chart</div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
