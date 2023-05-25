import React, { useState } from "react";
import { EmptyState } from "../EmptyState/EmptyState";
import Piechart from "../Piechart/Piechart";
import "./UsageCondition.scss";
const UsageCondition = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="usage-condition-section ">
      <div className="custom-card usage-part">
        <div className="header-section">
          <div class=" justify-content-center">
            <div>
              <p className="title-content">Usage Condition </p>
            </div>
            <div class="usage-section search-box">
              <input
                // onClick={() => setChecked(!checked)}
                type="text"
                class="form-control input-text"
                placeholder="Search Here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="image-eyeglass">
                <img src={require("../../images/eyeglass.png")} alt="Vector" />
              </div>
            </div>
            {checked === true ? (
              <div className="paragraph-content">
                <p className="title-dt">Last Logged in: </p>
                <p className="title-dt">2022-02-25 10:00:20 AM</p>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* <Piechart /> */}
          <EmptyState />
        </div>
      </div>
    </div>
  );
};
export default UsageCondition;
