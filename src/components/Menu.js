// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Menu.css';

const Menu = () => {

    const navItems = [
        {title: "Home", path: "/"},
        {title: "Login", path: "/login"},
        {title: "Register", path: "/register"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
    ]
  return (
    <div id="mymenu">
      <ul>
        {
            navItems.map(e => <li key={e.title}><Link to={e.path} >{e.title}</Link></li>)
        }
      </ul>
    </div>
  );
};

export default Menu;
