import axiosClient from "./axiosClient";

const productApi = {
  getOrders: () => {
    return axiosClient.get("/api/order/admin");
  },
  getDetailOrder: (orderId) => {
    const params = {
      maDonHang: orderId,
    };
    return axiosClient.get("/api/order/" + params.maDonHang);
  },
};

export default productApi;
