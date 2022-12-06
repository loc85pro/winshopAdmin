import React from "react";
import "./ProductBox.css";

const ProductBox = (props) => {
  return (
    <>
      <div className="ProductBox-container">
        <img src={props.img}></img>
        <span>Brand: {props.name}</span>
      </div>
    </>
  );
};

export default ProductBox;
