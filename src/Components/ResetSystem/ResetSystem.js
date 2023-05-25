import React from "react";
import "./ResetSystem.scss";
import { useState } from "react";
const ResetSystem = () => {
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);
  function decrementCount() {}
  function incrementCount(index) {
    if (index === count) {
      console.log("count >>", count);
      setCount((prevCount) => prevCount - 1);
    }
    if (check === false) {
      console.log("check >>", check);

      setCount((prevCount) => prevCount + 1);
    }
  }
  const [boxcontent] = useState([
    {
      name: "Accounting System",
    },
    {
      name: "Online Portal",
    },
    {
      name: "Online Examination",
    },
    {
      name: "Application",
    },
    {
      name: "Application",
    },
  ]);

  return (
    <div className="reset-section">
      <div className="custom-card mid-section reset-part">
        <div className="reset-part">
          <div className="reset-topic">
            <p className="title-content">Reset System</p>
            {count === 0 && count <= 0 ? (
              ""
            ) : (
              <div className="reset-btn">
                <button className="btn-primary">Reset{count}</button>
              </div>
            )}
          </div>
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
          </div>
        </div>
        {boxcontent.map((item, index) => {
          return (
            <div className="reset-checkbox" key={index}>
              <div className="checkbox-icon">
                <input
                  onChange={(setCheck) => {
                    setCheck(!check);
                    setCount(index);
                  }}
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                  onClick={incrementCount}
                />
              </div>
              <label className="reset-name">{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResetSystem;
