import React, { useEffect } from "react";
import ProductBox from "./ProductBox";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../../services/axiosClient";
import "./ProductsPage.css";
import AddIcon from "@mui/icons-material/Add";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import ProductCreatePage from "./ProductCreatePage";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get("/api/product");
      dispatch({ type: "PRODUCT_UPDATE", payload: data.data });
    };
    fetchData();
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/admin/products/create">
          <ProductCreatePage></ProductCreatePage>
        </Route>
        <Route exact path="/admin/products/:id">
          <ProductDetailPage></ProductDetailPage>
        </Route>
        <Route exact path="/admin/products">
          <div className="ProductsPage-container">
            <Link
              to="/admin/products/create"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="ProductPage-addButton">
                <AddIcon></AddIcon>
                <span>Add product</span>
              </div>
            </Link>
            <div className="ProductsPage">
              {productsData.map((ele, index) => (
                <ProductBox
                  brand={ele.brand}
                  remain={ele.countInStock}
                  desc={ele.description}
                  img={ele.image}
                  name={ele.name}
                  price={ele.price}
                  rating={ele.ratings}
                  id={ele._id}
                  key={index}
                ></ProductBox>
              ))}
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default ProductsPage;
