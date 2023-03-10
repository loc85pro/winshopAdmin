import React from "react";
import "./ProductBox.css";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ProductBox = (props) => {
  return (
    <>
      <div className="ProductBox-container">
        <div className="ProductBox-img-container">
          <img src={props.img}></img>
          <Link
            to={"/admin/products/" + props.id}
            className="ProductBox-editIcon"
          >
            <EditIcon></EditIcon>
          </Link>
        </div>
        <div className="ProductBox-info">
          <div className="ProductBox-first">
            <span className="ProductBox-price">${props.price}</span>
          </div>
          <div className="ProductBox-second">
            <span className="ProductBox-name">{props.name}</span>
          </div>
          <div className="ProductBox-third">
            <div className="ProductBox-rating">
              <StarIcon></StarIcon>
              <span>{props.rating}</span>
            </div>
            <span className="ProductBox-remain">{props.remain} remain</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
