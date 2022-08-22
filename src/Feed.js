import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./inputOptions";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOPtions">
          <InputOptions Icon = {ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon = {SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOptions Icon = {EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions Icon = {CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>
      <Post name={"Abhishek Madiwale"} description={"TEst"} message={"wow this works"}/>
    </div>
  );
}

export default Feed;
