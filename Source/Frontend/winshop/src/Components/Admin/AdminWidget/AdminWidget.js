import React from "react";
import "./AdminWidget.css";
import { Link } from "react-router-dom";

const AdminWidget = (props) => {
  /*  Replace counter by REDUX */
  return (
    <>
      <div className="adminCard">
        <div className="left">
          <span className="titleCard">{props.title}</span>
          <span className="countercard">{props.value}</span>
          <Link
            className="viewall"
            to={props.url}
            style={{ textDecoration: "none" }}
          >
            {props.detail}
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default AdminWidget;
