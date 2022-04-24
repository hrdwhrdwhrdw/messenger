import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../common/Button/Button";
import "./Header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__login">
        <span>
          {!props.isAuth ? <Link to="/login">Login</Link> : `${props.login}`}
        </span>
        {props.isAuth ? (
          <CustomButton to="/login" onClick={props.logout}>Logout</CustomButton>
        ) : null}
      </div>
    </header>
  );
}
