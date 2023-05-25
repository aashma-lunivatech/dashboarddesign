import React from "react";
import "./ChartDetails.scss";

export const ChartDetails = (props) => {
  return (
    <div className="chart-content section-gap">
      <div className="student-details">
        <div className="row">
          <div className="col-md-6">
            <div className="custom-card header-section">
              <div className="wrap-content">
                <div className="d-flex">
                  <div className="icon-size">
                    <img
                      src={require("../../images/Group.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="wrap-details">
                    <p className="num-content">{props.num1}</p>
                    <p cl>Total No. of Students</p>
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="profile-content">
                  <div className="img-content">
                    <img
                      src={require("../../images/Vector.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="line-content">
                    <p className="percent">{props.studentpercent}%</p>
                  </div>
                  <p>Since last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="custom-card header-section">
              <div className="wrap-content">
                <div className="d-flex">
                  <div className="icon-size">
                    <img
                      src={require("../../images/build.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="wrap-details">
                    <p className="num-content">{props.schoolnum}</p>
                    <p>Total No. of Schools</p>
                  </div>
                </div>
              </div>
              <div className="bottom-line-students">
                <div className="profile-content">
                  <div className="img-content">
                    <img
                      src={require("../../images/Vector.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="line-content">
                    <p className="percent">{props.schoolpercent}%</p>
                  </div>
                  <p>Since last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
