import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosClient from "../../../services/axiosClient";
import AdminWidget from "../AdminWidget/AdminWidget";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const orders = useSelector((state) => state.order);
  const users = useSelector((state) => state.user);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get("/api/order/admin");
      dispatch({ type: "ORDER_UPDATE", payload: data.data.orders });
      const dataUser = await axiosClient.get("/api/user/admin");
      dispatch({ type: "USER_UPDATE", payload: dataUser.data });
      const dataProduct = await axiosClient.get("/api/product");
      dispatch({ type: "PRODUCT_UPDATE", payload: dataProduct.data });
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="widget">
          <AdminWidget
            title="USERS"
            value={users.length}
            detail="See all users"
            url="admin/users"
          ></AdminWidget>
          <AdminWidget
            title="ORDERS"
            value={orders.length}
            detail="See all orders"
            url="admin/orders"
          ></AdminWidget>
          <AdminWidget
            title="PRODUCTS"
            value={products.length}
            detail="See all products"
            url="admin/products"
          ></AdminWidget>
        </div>
        <div className="totalRevenue">{orders.length * 50}</div>
      </div>
    </>
  );
};

export default AdminDashboard;
