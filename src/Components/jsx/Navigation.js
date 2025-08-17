import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activities"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Activities
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
