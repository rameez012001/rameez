import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { backendURL, navigations } from "../assets/data/data";
import { AuthContext } from "../../Authprotocol";
function Navigation() {
  const {isAuthenticated,logout} = useContext(AuthContext);
  return (
    <nav className="navigation">
      <ul className="nav-links">
        {navigations.map((navlink, index) => (
          <li key={index}>
            <NavLink to={`/${navlink.toLowerCase()}`} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {navlink}
            </NavLink>
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <div className="nav-actions">
          <button id="logoutButton" onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
