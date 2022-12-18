import React, { useEffect, useState } from "react";
import axiosClient from "../../../services/axiosClient";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await axiosClient
        .get("/api/user/63737f2319b56a0a46aa9e0d")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="AdminProfilePage">
        <div className="AdminProfilePage-avatar">
          <img src={data.profilePic} alt="profilePic"></img>
        </div>
        <div className="AdminPro"></div>
      </div>
    </>
  );
};

export default AdminProfile;
