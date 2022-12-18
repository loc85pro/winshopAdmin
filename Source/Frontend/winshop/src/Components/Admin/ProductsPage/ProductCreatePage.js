import React from "react";
import axiosClient from "../../../services/axiosClient";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ProductCreatePage = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    //--------------
    const url = `/api/product/admin`;
    const method = "post";
    const headers = {
      "Content-Type": "application/json",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM3ZjIzMTliNTZhMGE0NmFhOWUwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTM1MTMxNCwiZXhwIjoxNjcxNDM3NzE0fQ.s92q5kZqPY1qain9X2LDLZ60hwyN3yIUyOgmjAYTh8Y",
    };
    const data = {
      name: e.target[0].value,
      description: e.target[1].value,
      category: e.target[2].value,
      brand: e.target[3].value,
      price: e.target[4].value,
      countInStock: e.target[5].value,
      image: e.target[6].value,
      user: "637047847e7d1eabd3d32fb7",
    };
    axios({ url, method, data, headers })
      .then((response) => {
        history.push("/admin/products");
      })
      .catch((e) => {
        console.log(e);
        history.push("/admin/products");
      });
  };
  return (
    <div>
      <h1>Create product</h1>
      <form className="Admin-ProductDetailForm" onSubmit={handleSubmit}>
        <span>Name: </span>
        <textarea className="ProductDetail-input-name"></textarea>
        <span>Description: </span>
        <textarea className="ProductDetail-input-description"></textarea>
        <span>Category: </span>
        <input className="ProductDetail-input-category"></input>
        <span>Brand: </span>
        <input className="ProductDetail-input-name-brand"></input>
        <span>Price:</span>
        <input type="number" className="ProductDetail-input-price"></input>
        <span>Numbers of remain: </span>
        <input type="number" className="ProductDetail-input-reamin"></input>
        <span>Image: </span>
        <input className="ProductDetail-input-image"></input>
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

export default ProductCreatePage;
