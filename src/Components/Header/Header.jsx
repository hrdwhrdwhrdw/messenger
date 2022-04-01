import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

export default function Header(props) {
  return (
    <header className="header">
        <img
          src="http://www.alokatalog.com/Resimler/image/lova-hotel-logo_type_design_11.jpg"
          alt=""
        />
        <div className="header__login">
          {!props.isAuth ? <Link to="/login">Login</Link> : `${props.login}`}
          {props.isAuth ? <button to="/login" onClick={props.logout}>Logout</button> : null}
        </div>
      </header>
  )
}
