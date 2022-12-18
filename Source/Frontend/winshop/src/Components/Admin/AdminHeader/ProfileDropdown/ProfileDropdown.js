import React from "react";
import "./ProfileDropdown.css";
import { Link } from "react-router-dom";
const ProfileDropdown = (props) => {
  return (
    <>
      <div className="dropdown-avatar">
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/profile"
            onClick={props.clickHandle}
          >
            Profile
          </Link>
        </div>
        <div>Log out</div>
      </div>
    </>
  );
};

export default ProfileDropdown;
