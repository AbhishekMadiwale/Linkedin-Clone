import React from "react";
import "./HeaderOptions.css";
// import {Avatar} from "material-ui"

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* {avatar && <Avatar className="headerOption__icon" src=
      {avatar} />} */}
      <h3 className="headoption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
