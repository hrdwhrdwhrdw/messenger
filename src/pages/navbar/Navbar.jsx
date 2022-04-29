import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar(props) {
  const shrinkNav = (e) => {
    e.stopPropagation();
    props.shrinkNav();
  };
  return (
    <nav className={"navbar" + (props.isNavExpanded ? " expand" : "")}>
      <li className="navbar__item">
        <NavLink
          to="profile"
          className="navbar__link"
          onClick={(e) => shrinkNav(e)}
        >
          <HomeIcon />
          <span>Profile</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="dialogs"
          className="navbar__link"
          onClick={(e) => shrinkNav(e)}
        >
          <CommentIcon />
          <span>Messages</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="users"
          className="navbar__link"
          onClick={(e) => shrinkNav(e)}
        >
          <PeopleIcon />
          <span>Users</span>
        </NavLink>
      </li>
    </nav>
  );
}
