import React from "react";
import "./HeaderOptions.css";
import {Avatar} from '@mui/material';

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} alt="Not found" />}
      <h3 className="headoption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
