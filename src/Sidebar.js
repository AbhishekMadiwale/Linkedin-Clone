import Avatar from "@mui/material/Avatar";
import React from "react";
import BackgroundImage from "./Images/bg.jpg";
import "./Sidebar.css";

function Sidebar() {
  function recentItem(topic) {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={BackgroundImage} alt=""></img>
        <Avatar className="sidebar__avatar" />
        <h2>Abhishek Madiwlae</h2>
        <h4>abhishek.madiwale@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">300</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">243</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        <p>{recentItem("reactjs")}</p>
        {recentItem("programming")}
        {recentItem("software Engineering")}
        {recentItem("ML Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
