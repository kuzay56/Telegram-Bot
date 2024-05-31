import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  HomePage
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  LoginPage
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  RegisterPage
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
