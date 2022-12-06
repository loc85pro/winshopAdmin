import React, { useState, useEffect } from "react";
import UserIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import "./UserBox.css";
import axiosClient from "../../../services/axiosClient";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";
import CancelIcon from "@mui/icons-material/Cancel";

const UserBox = (props) => {
  console.log(props);
  const [state, setState] = useState(0);
  const [data, setData] = useState({
    userId: props._id,
    username: props.username,
    email: props.email,
    phone: props.phone,
  });
  console.log(data);
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const fecthData = async () => {
      const updatedData = await axiosClient.put(
        `/api/user/admin/${props._id}`,
        data
      );
      console.log(updatedData);
    };
    fecthData();
    setState(0);
  };
  return (
    <>
      <div className="UserBox-container">
        <div className="UserBox-left">
          <p
            className="isAdmin"
            style={{ color: props.isAdmin ? "green" : "blue" }}
          >
            {props.isAdmin ? "Admin" : "User"}
          </p>
          <img
            className="UserBox-avatar-img"
            src={props.avatar}
            alt="avatar"
          ></img>
        </div>
        <div className="UserBox-content">
          <div className="UserBox-content-username">
            <UserIcon></UserIcon>
            <span className="UserBox-email">{props.username}</span>
          </div>
          <div className="UserBox-content-email">
            <EmailIcon></EmailIcon>
            <span className="UserBox-email">{props.email}</span>
          </div>
          <button
            onClick={() => {
              state ? setState(0) : setState(1);
            }}
          >
            UPDATE
          </button>
        </div>
        {/* ----------------------------------------------- */}
        <div
          className="UpdateUser-Model"
          style={{ display: state ? "block" : "none" }}
        >
          <div
            className="UpdateUserr-Model-cancel-button"
            onClick={() => setState(0)}
          >
            <CancelIcon></CancelIcon>
          </div>
          <div className="UpdateUser-Modal-layout"></div>
          <form className="UpdateUser-Form" onSubmit={handleSubmitUpdate}>
            <span>Username: </span>
            <input
              defaultValue={props.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <span>Email:</span>
            <input
              defaultValue={props.email}
              name="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <span>Phone:</span>
            <input
              defaultValue={props.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <span>Role</span>
            <select defaultValue={props.isAdmin ? "Admin" : "User"}>
              <option>User</option>
              <option>Admin</option>
            </select>
            <div></div>
            <input className="UpdateUser-Modal-Submit-Button" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserBox;
