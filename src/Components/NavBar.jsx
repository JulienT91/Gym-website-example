import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
      <div className="title_search">
        <NavLink to="/" activeClassName="active">
          <h1 className="main_title">G.W.E</h1>
        </NavLink>
      </div>
      <nav>
        <ul className="menu_ul">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
