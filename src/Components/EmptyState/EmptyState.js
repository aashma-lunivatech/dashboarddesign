import React from "react";
import "./EmptyState.scss";
export const EmptyState = () => {
  return (
    <div className="empty-state-part">
      <div className="empty-state">
        <img src={require("../../images/emptystate.png")} alt="profile" />
      </div>
      <div className="main-content">
        <div className="content-section">
          <h1 className="title">Search Domain here</h1>
        </div>
        <div className="content-section">
          <p className="paragraph">You can view usage conditions from here</p>
        </div>
      </div>
    </div>
  );
};
