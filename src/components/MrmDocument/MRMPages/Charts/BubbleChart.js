import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({ chartData }) => {
  return (
    <div>
      <div>Bubble Chart</div>
      <Bubble data={chartData} />
    </div>
  );
};

export default BubbleChart;
