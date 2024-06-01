import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to="/">HomePage</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/login">LoginPage</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/register">RegisterPage</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
