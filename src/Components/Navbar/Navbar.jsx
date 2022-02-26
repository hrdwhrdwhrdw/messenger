import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
        <li className='navbar__item'>
          <a href="#Profile" className='navbar__link'>Profile</a>
        </li>
        <li className='navbar__item'>
          <a href="#Dialogs" className='navbar__link'>Dialogs</a>
        </li>
        <li className='navbar__item'>
          <a href="#Music" className='navbar__link'>Music</a>
        </li>
        <li className='navbar__item'>
          <a href="#Settings" className='navbar__link'>Settings</a>
        </li>
      </nav>
  )
}
