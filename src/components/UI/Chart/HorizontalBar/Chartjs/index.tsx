import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HorizontalBar = () => {
  const labels = ["January", "February", "March", "April", "May"];

  const options = {
    indexAxis: "y" as const,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    responsive: true,
  };

  const DATA = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [58, 532, 472, 220, 924],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={DATA} />;
};

export default HorizontalBar;
