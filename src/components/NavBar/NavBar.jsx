import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../Coffe-img/logo.png";
import "../../css/navBar.css";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div>
          <img src={logo} alt="portada1" className="logo" />
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
};
