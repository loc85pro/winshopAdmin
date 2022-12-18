import React, { useState } from "react";
import "./AdminHeader.css";
import NotificationDropdown from "./NotificationDropdown/NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import SettingDropdown from "./SeetingDropdown/SettingDropdown";

const AdminHeader = () => {
  const [isActive, setStatus] = useState("none");
  const handleAvatarClick = () => {
    if (isActive !== "avatar") setStatus("avatar");
    else setStatus("none");
  };
  const handleNotificationClick = () => {
    console.log(isActive);
    if (isActive !== "notification") setStatus("notification");
    else setStatus("none");
  };
  const handleSettingClick = () => {
    if (isActive !== "setting") setStatus("setting");
    else setStatus("none");
  };
  return (
    <>
      <div className="adminHeader">
        <div className="searchAreaHeader">
          <input placeholder="Search..."></input>
          <ion-icon className="searchIcon" name="search-outline"></ion-icon>
        </div>
        <div className="mainAreaHeader">
          <div className="itemAdminHeader">
            <ion-icon name="moon-outline"></ion-icon>
          </div>
          <div className="itemAdminHeader" onClick={handleNotificationClick}>
            <ion-icon name="notifications-outline"></ion-icon>
            <div className="counter">1</div>
            <div
              className="notificationdropdown"
              style={{
                display: isActive === "notification" ? "block" : "none",
              }}
            >
              <NotificationDropdown> </NotificationDropdown>
            </div>
          </div>
          <div className="itemAdminHeader avatarContainer">
            <img
              onClick={handleAvatarClick}
              className="avatar"
              alt="avatar"
              src={
                "https://images.unsplash.com/photo-1669172460356-1080d53199e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
              }
            ></img>
            <div
              className="profiledropdown"
              style={{ display: isActive === "avatar" ? "block" : "none" }}
            >
              <ProfileDropdown
                clickHandle={handleAvatarClick}
              ></ProfileDropdown>
            </div>
          </div>
          <div className="itemAdminHeader" onClick={handleSettingClick}>
            <ion-icon name="settings-outline"></ion-icon>
            <div
              className="settingdropdown"
              style={{ display: isActive === "setting" ? "block" : "none" }}
            >
              <SettingDropdown></SettingDropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
