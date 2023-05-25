import React from "react";
import "./BlockingUser.scss";
const BlockingUser = () => {
  return (
    <div className="block-section">
      <div class=" block-part">
        <div className="custom-card mid-section">
          <div className="title-content">Blocking User</div>

          <div class="usage-section search-box">
            <input
              type="text"
              class="form-control input-text"
              aria-label="Recipient's username"
              placeholder="Search Here"
              aria-describedby="basic-addon2"
            />
            <div className="image-eyeglass">
              <img src={require("../../images/eyeglass.png")} alt="Vector" />
            </div>
          </div>

          <div className="wrapper">
            <div className="school">
              <div className="school-image">
                <img
                  src={require("../../images/vidyasagar.png")}
                  alt="Vector"
                />
              </div>
              <div className="school-details">
                <p className="school-name">
                  Vidya Sagar Eng. Sec. school
                  <div className="close-right-icon">
                    <img src={require("../../images/close.png")} alt="Vector" />
                  </div>
                </p>
                <div className="location">
                  <p>Banepa, Kavre</p>
                </div>
                <button className="btn-second">Unblock Domain</button>
              </div>
            </div>

            <div className="school">
              <div className="school-image">
                <img src={require("../../images/orchid.png")} alt="Vector" />
              </div>
              <div className="school-details">
                <p className="school-name">
                  Vidya Sagar Eng. Sec. school
                  <div className="close-right-icon">
                    <img src={require("../../images/right.png")} alt="Vector" />
                  </div>
                </p>
                <div className="location">
                  <p>Banepa, Kavre</p>
                </div>
                <button className="btn-primary">Unblock Domain</button>
              </div>
            </div>

            <div className="school">
              <div className="school-image">
                <img src={require("../../images/axios.png")} alt="Vector" />
              </div>
              <div className="school-details">
                <p className="school-name">
                  Vidya Sagar Eng. Sec. school
                  <div className="close-right-icon">
                    <img src={require("../../images/right.png")} alt="Vector" />
                  </div>
                </p>
                <div className="location">
                  <p>Banepa, Kavre</p>
                </div>
                <button className="btn-primary">Unblock Domain</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlockingUser;
