import React from "react";
import OrderBox from "./OrderBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosClient from "../../../services/axiosClient";
import "./OrdersPage.css";
import { Switch, Route } from "react-router-dom";
import OrderBoxDetail from "./OrderDetail";
import OrderDetail from "./OrderDetail";
const OrdersPage = () => {
  const dataOrders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get("/api/order/admin");
      dispatch({ type: "ORDER_UPDATE", payload: data.data.orders });
    };
    fetchData();
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/admin/orders/:id">
          <OrderDetail></OrderDetail>
        </Route>
        <Route path="/">
          <div className="admin-orderspage">
            {dataOrders.map((data, index) => (
              <OrderBox
                price={dataOrders[index].itemsPrice}
                status={dataOrders[index].orderStatus}
                time={dataOrders[index].createAt}
                nums_Of_Product={dataOrders[index].cart.length}
                id={dataOrders[index]._id}
                user_id={dataOrders[index].user}
                key={"orderBox-" + index}
              ></OrderBox>
            ))}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default OrdersPage;
