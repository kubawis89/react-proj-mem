import React from "react";
import { NavLink } from "react-router-dom";
import "./scss/Header.scss";

function Header() {
  return (
    <header>
      <h1 className="logo">MEM serwis</h1>
      <nav id="topnav">
        <ul className="menu">
          <li>
            <NavLink to="/memes">Home</NavLink>
          </li>
          <li>
            <NavLink to="/hot">Hot</NavLink>
          </li>
          <li>
            <NavLink to="/regular">Regular</NavLink>
          </li>
          <li>
            <NavLink to="/poor">Poor</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search...</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
