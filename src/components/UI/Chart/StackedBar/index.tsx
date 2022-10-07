import React from "react";
import {
  Chart as Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function StackedBar() {
  const options = {
    indexAxis: "y" as const,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "left" as const,
      },
    },
  };

  const data = {
    labels: [""],
    datasets: [
      {
        label: "Dataset 1",
        data: [120],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: [312],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: [620],
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };
  console.log(data);

  return <Bar options={options} data={data} />;
}

export default StackedBar;
