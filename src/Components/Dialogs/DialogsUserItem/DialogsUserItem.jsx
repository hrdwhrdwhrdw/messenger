import React from "react";
import { NavLink } from "react-router-dom";

const DialogsUserItem = (props) => {
  return (
    <li className="dialogs__useritem">
      <NavLink to={props.id + ""}>{props.name}</NavLink>
    </li>
  );
};

export default DialogsUserItem