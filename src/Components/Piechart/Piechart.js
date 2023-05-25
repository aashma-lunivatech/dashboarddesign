import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Piechart.scss";

export const Piechart = () => {
  const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      dataLabels: {
        enabled: false,
      },
      chart: {
        width: 380,
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      markers: {
        shape: "rectangle",

        radius: 19,
      },

      style: {
        fontSize: "12px",
        font: "Poppins",
        weight: 500,
      },
      colors: ["#EB5587", "#57DF75", "#3EBDF7", "#E7C54E", "#8B69C8"],
      labels: [
        "Accounting System (22.5%)",
        "Application (15%)",
        "Examination (22.5%)",
        "Online Portal (15%)",
        "Online Class(25%)",
      ],
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
export default Piechart;
