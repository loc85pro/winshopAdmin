import axiosClient from "../services/axiosClient";
const initOrders = [{ orderStatus: "", itemsPrice: "0" }];

const OrdersReducer = (state = initOrders, action) => {
  switch (action.type) {
    case "ORDER_UPDATE":
      return [...action.payload];
    case "ORDER_DETELE":
      return state;
    case "ORDER_ADD":
      return state;
  }
  return state;
};

export default OrdersReducer;
