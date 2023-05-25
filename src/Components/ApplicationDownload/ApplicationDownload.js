import React from "react";
import Donut from "../Donut/Donut";
import Piechart from "../Piechart/Piechart";
import "./ApplicationDownload.scss";
const ApplicationDownload = () => {
  return (
    <div className="application-download">
      <div className=" custom-card mid-section">
        <p className="title-content">Application Download</p>

        <div class="usage-section search-box">
          <input
            type="text"
            class="form-control input-text"
            placeholder="Search Here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="image-eyeglass">
            <img src={require("../../images/eyeglass.png")} alt="Vector" />
          </div>
          <Donut />
        </div>
      </div>
    </div>
  );
};
export default ApplicationDownload;
