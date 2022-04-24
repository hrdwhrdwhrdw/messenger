import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
  return (
    <nav className="navbar">
      <li className="navbar__item">
        <NavLink to="profile" className="navbar__link">
          <HomeIcon />
          <span>Profile</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="dialogs" className="navbar__link">
          <CommentIcon />
          <span>Messages</span>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="users" className="navbar__link">
          <PeopleIcon />
          <span>Users</span>
        </NavLink>
      </li>
      {/* <li className='navbar__item'>
          <NavLink to="music" className='navbar__link'>Music</NavLink>
        </li> */}
      <li className="navbar__item">
        <NavLink to="settings" className="navbar__link">
          <SettingsIcon />
          <span>Settings</span>
        </NavLink>
      </li>
    </nav>
  );
}
