import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
        <li className='navbar__item'>
          <NavLink to="profile" className='navbar__link'>Profile</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="dialogs" className='navbar__link'>Dialogs</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="users" className='navbar__link'>Users</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="music" className='navbar__link'>Music</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="settings" className='navbar__link'>Settings</NavLink>
        </li>
      </nav>
  )
}
