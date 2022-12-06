import React from "react";
import "./AdminWidget.css";

const AdminWidget = (props) => {
  /*  Replace counter by REDUX */
  return (
    <>
      <div className="adminCard">
        <div className="left">
          <span className="titleCard">{props.title}</span>
          <span className="countercard">{props.value}</span>
          <span className="viewall">{props.detail}</span>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default AdminWidget;
