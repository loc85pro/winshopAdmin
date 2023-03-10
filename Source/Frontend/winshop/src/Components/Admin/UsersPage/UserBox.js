import React, { useState, useEffect } from "react";
import UserIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import "./UserBox.css";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "../../../services/axios";
import axiosClient from "../../../services/axiosClient";
import { useDispatch } from "react-redux";

const UserBox = (props) => {
  const [state, setState] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const url = `/api/user/admin/${props._id}`;
    const method = "put";
    const data = {
      username: username || props.username,
      email: email || props.email,
      phone: phone || props.phone,
      isAdmin: role || props.isAdmin,
    };
    const headers = {
      "Content-Type": "application/json",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM3ZjIzMTliNTZhMGE0NmFhOWUwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTM1MTMxNCwiZXhwIjoxNjcxNDM3NzE0fQ.s92q5kZqPY1qain9X2LDLZ60hwyN3yIUyOgmjAYTh8Y",
    };
    await axios({ url, method, data, headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    const fetchUsers = async () => {
      const data = await axiosClient.get("/api/user/admin");
      dispatch({ type: "USER_UPDATE", payload: data.data });
    };
    fetchUsers();
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
            className="UserBox-update-button"
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
            className="UpdateUser-Model-cancel-button"
            onClick={() => setState(0)}
          >
            <CancelIcon></CancelIcon>
          </div>
          <div className="UpdateUser-Modal-layout"></div>
          <form onSubmit={handleSubmitUpdate} className="UpdateUser-Form">
            <span>Username: </span>
            <input
              type="text"
              name="username"
              placeholder={props.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Email:</span>
            <input
              type="email"
              value={email}
              placeholder={props.email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Phone:</span>
            <input
              type="text"
              name="phone"
              placeholder={props.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span>Role</span>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="true">Admin</option>
              <option value="false">User</option>
            </select>
            <div></div>
            <button className="UpdateUser-Modal-Submit-Button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserBox;
