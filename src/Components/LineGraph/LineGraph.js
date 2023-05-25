import React from "react";
import ApexChart from "../Piechart/Piechart";
import "./LineGraph.scss";
import ReactApexChart from "react-apexcharts";

export const LineGraph = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div className="linegraph-section">
      <div className="custom-card mid-section">
        <div className="graph-details">
          <div className="graph-topic">
            <p className="title-content">Weekly Profile Growth(in %)</p>

            <div className="rt-date">
              Jan 20, 2021 - Jan 26, 2021
              <div className="date-icon">
                <img src={require("../../images/Date2.png")} alt="Vector" />
              </div>
            </div>
          </div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={245}
            width={900}
          />
        </div>
      </div>
    </div>
  );
};
export default LineGraph;
