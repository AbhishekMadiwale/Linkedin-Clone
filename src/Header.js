import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedinLOGO from "./Images/linkedinLogo.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Profile_Photo from "./Images/profile_photo.JPG";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedinLOGO} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type=""></input>
        </div>
      </div>

      {/* using reusable component */}
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions avatar="Profile_Photo" title="Me" />
      </div>
    </div>
  );
}

export default Header;
