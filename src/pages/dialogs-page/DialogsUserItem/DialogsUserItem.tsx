import React from "react";
import { NavLink } from "react-router-dom";
import { DialogType } from '../../../redux/reducers/dialogsReducer';

const DialogsUserItem: React.FC<DialogType> = (props) => {
  return (
    <li className="dialogs__useritem">
      <NavLink to={props.id + ""} className="useritem__link">
        <img
          className="useritem__image"
          src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"
          alt=""
        />
        <span className="useritem__name">{props.name}</span>
      </NavLink>
    </li>
  );
};

export default DialogsUserItem;
