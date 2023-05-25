import React from "react";
import { ChartDetails } from "../ChartDetails/ChartDetails";
import LineGraph from "../LineGraph/LineGraph";
import UsageCondition from "../UsageCondition/UsageCondition";
import Piechart from "../Piechart/Piechart";
import BlockingUser from "../BlockingUser/BlockingUser";
import ResetSystem from "../ResetSystem/ResetSystem";
import ApplicationDownload from "../ApplicationDownload/ApplicationDownload";
import "./DashBoard.scss";
export const DashBoard = () => {
  return (
    <div className="dashboard-section section-block-gap">
      <div className="row">
        <div className="col-md-8">
          <ChartDetails
            num1={1000}
            schoolnum={100}
            studentpercent={2.25}
            schoolpercent={1.05}
          />
          <LineGraph />
        </div>
        <div className="col-md-4">
          <UsageCondition />
        </div>
        <div className="col-md-4">
          <BlockingUser />
        </div>
        <div className="col-md-4">
          <ResetSystem />
        </div>
        <div className="col-md-4">
          <ApplicationDownload />
        </div>
      </div>
    </div>
  );
};
