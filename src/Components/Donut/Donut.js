import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Donut = () => {
  const [state, setState] = useState({
    series: [44, 55],
    options: {
      dataLabels: {
        enabled: false,
      },
      chart: {
        width: 380,
        type: "donut",
      },
      labels: {
        show: true,
        name: {},
        total: { label: "Total" },
      },

      legend: {
        position: "bottom",
      },
      markers: {
        shape: "rectangle",
        radius: 19,
      },

      style: {
        fontWeight: 600,
        fontFamily: "Poppins",
        fontSize: "14px",
      },
      colors: ["#29B6F6", "#E26029"],
      labels: ["NIVID App", "NIVID Guru"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="chart-topic">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={400}
        />
      </div>
    </div>
  );
};
export default Donut;
