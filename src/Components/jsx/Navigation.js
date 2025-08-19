import React from "react";
import { NavLink } from "react-router-dom";
import { navigations } from "../assets/data/data";
function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        {navigations.map(navlink => (
          <li>
            <NavLink to={`/${navlink.toLowerCase()}`} className={({isActive})=>(isActive?"active":undefined)}>
            {navlink}
            </NavLink>
          </li>
        ))} 
      </ul>
    </nav>
  );
}

export default Navigation;
