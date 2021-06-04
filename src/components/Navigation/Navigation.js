import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="sticky">
      <nav className="topnav">
        <ul className="menu">
          <NavLink to="/memes">
            <li>Home</li>
          </NavLink>
          <NavLink to="/hot">
            <li>Hot</li>
          </NavLink>
          <NavLink to="/regular">
            <li>Regular</li>
          </NavLink>
          <NavLink to="/poor">
            <li>Poor</li>
          </NavLink>
          <NavLink to="/favorite">
            <li>Favorite</li>
          </NavLink>
          <NavLink to="/add">
            <li>Add</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
