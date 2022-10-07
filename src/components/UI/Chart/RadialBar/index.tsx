import React from "react";
import Chart from "react-apexcharts";

const CONFIG_CHART = {
  options: {
    chart: {
      id: "radial-bar",
    },
    labels: ["Concluído"],
    colors: ["#333"],
  },
  series: [100],
};

export default function RadialBar() {
  return (
    <>
      <Chart
        options={CONFIG_CHART.options}
        series={CONFIG_CHART.series}
        type="radialBar"
        height={220}
      />
    </>
  );
}
