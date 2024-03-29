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
          x: "Tipo A",
          y: 48,
        },
        {
          x: "Tipo B",
          y: 6,
        },
        {
          x: "Tipo C",
          y: 46,
        },
      ],
    },
  ],
};

export default function HorizontalBar() {
  return (
    <>
      <Chart
        options={CONFIG_CHART.options}
        series={CONFIG_CHART.series}
        type="bar"
        height={350}
      />
    </>
  );
}
