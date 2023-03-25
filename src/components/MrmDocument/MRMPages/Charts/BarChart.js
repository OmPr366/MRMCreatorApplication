import React from 'react'
import Chart, { animator } from "chart.js/auto";
import {Bar} from 'react-chartjs-2'


const BarChart = ({chartData}) => {
  return (
    <div>
      <div>Bar Chart</div>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart