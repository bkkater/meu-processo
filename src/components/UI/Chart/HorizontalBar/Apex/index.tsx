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
  },
  series: [
    {
      data: [
        {
          x: "category A",
          y: 10,
        },
        {
          x: "category B",
          y: 18,
        },
        {
          x: "category C",
          y: 13,
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
