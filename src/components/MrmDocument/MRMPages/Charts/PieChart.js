import React from "react";
import Chart, { animator } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";


const PieChart = ({ labelIndex ,dataSets }) => {
  const CsvData = useSelector((state) => state.CsvDataSlice);

  const [chartData, setChartData] = React.useState({
    labels: CsvData.slice(1).map((data) => data[labelIndex]),
    datasets: [
    ],
  });

  React.useEffect(() => {
    
    dataSets.map((dataSet) => {
      chartData.datasets.push({
        label: CsvData[0][dataSet],
        data: CsvData.slice(1).map((data) => data[dataSet]),
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
      });
    });
    setChartData(chartData);

    
  }, []);

  return (
    <div>
      <div>Pie Chart</div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
