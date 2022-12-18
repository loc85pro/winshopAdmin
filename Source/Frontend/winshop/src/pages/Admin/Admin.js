import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminDashboard from "../../Components/Admin/AdminDashboard/AdminDashboard";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";
import AdminProfile from "../../Components/Admin/AdminProfile/AdminProfile";
import AdminSideBar from "../../Components/Admin/AdminSideBar/AdminSideBar";
import OrdersPage from "../../Components/Admin/OrdersPage/OrdersPage";
import ProductsPage from "../../Components/Admin/ProductsPage/ProductsPage";
import UsersPage from "../../Components/Admin/UsersPage/UsersPage";
import "./Admin.css";

const AdminPage = () => {
  return (
    <>
      <div className="adminpage">
        <AdminSideBar></AdminSideBar>
        <div className="headerAndContent">
          <AdminHeader></AdminHeader>
          <Switch>
            <Route exact path="/admin">
              <AdminDashboard />
            </Route>
            <Route path="/admin/users">
              <UsersPage></UsersPage>
            </Route>
            <Route path="/admin/products">
              <ProductsPage></ProductsPage>
            </Route>
            <Route path="/admin/orders">
              <OrdersPage></OrdersPage>
            </Route>
            <Route path="/admin/profile">
              <AdminProfile></AdminProfile>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
