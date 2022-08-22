// import Avatar from "@mui/material/Avatar";
// import postAvatar from "./Images/avatar.jpg"

import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  console.log("inside post")
    return (
    <div className="post">
      <div className="post__header">
        {/* <Avatar className="sidebar__avatar" /> */}
        <Avatar/>
        <div className="post__info">
          <h2>Abhishek</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>Message here</p>
      </div>
    </div>
  );
}

export default Post;
