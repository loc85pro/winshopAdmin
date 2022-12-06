import React, { useEffect, useState } from "react";
import "./NotificationDropdown.css";

const NotificationDropdown = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getNotification = async () => {
      await fetch("./Notification.json")
        .then((value) => value.json())
        .then((value1) => setData([...value1.data]));
    };
    getNotification();
    console.log("ok");
  }, []);
  return (
    <>
      <div className="container-noti-dropdown">
        {data.map((value, index) => (
          <div className="dropdownnotification-item" key={"notice-" + index}>
            <span className="title-dropdown-noti">{value.title}</span>
            <span className="time-dropdown-noti">{value.time}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationDropdown;
