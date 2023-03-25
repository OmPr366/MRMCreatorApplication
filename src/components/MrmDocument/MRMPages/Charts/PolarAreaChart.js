import React from "react";
import Chart, { animator } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = ({ chartData }) => {
  return (
    <div>
      <div>Polar Area Chart</div>
      <PolarArea data={chartData} />
    </div>
  );
};

export default PolarAreaChart;
