import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/Button";
import "./Header.scss";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <header className={"header" + (props.isNavExpanded ? "" : " hidden")}>
      <div className="header__login">
        {props.isAuth ? (
          <>
            <span className="header__login-name">{props.login}</span>
            <CustomButton
              to="/login"
              onClick={props.logout}
              className="header__logout"
            >
              Logout
              <LogoutIcon sx={{ fontSize: "10px", marginLeft: "3px" }} />
            </CustomButton>
          </>
        ) : (
          <CustomButton>
            <Link
              to="/login"
              style={style}
            >
              Login
              <LoginIcon sx={{ fontSize: "10px", marginLeft: "3px" }} />
            </Link>
          </CustomButton>
        )}
      </div>
    </header>
  );
}
