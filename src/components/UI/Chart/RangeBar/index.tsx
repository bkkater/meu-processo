import React from "react";
import Chart from "react-apexcharts";

const CONFIG_CHART = {
  options: {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    colors: ["#071c3d"],
  },
  series: [
    {
      data: [
        {
          x: "Abertura",
          y: [0, 92],
        },
        {
          x: "Julgamento",
          y: [92, 191],
        },
        {
          x: "Finalização",
          y: [191, 209],
        },
      ],
    },
  ],
};

export default function RangeBar() {
  return (
    <>
      <Chart
        options={CONFIG_CHART.options}
        series={CONFIG_CHART.series}
        type="rangeBar"
        height={350}
      />
    </>
  );
}
