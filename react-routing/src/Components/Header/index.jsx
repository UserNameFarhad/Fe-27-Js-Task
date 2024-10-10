import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { id: 0, to: "/home", title: "Home" },
    { id: 1, to: "/about", title: "About" },
    { id: 2, to: "/contact", title: "Contact" },
  ];
  return (
    <header>
      <nav>
        <div className="logo">./Logo</div>
        <div className="links">
          {links.map(({ id, to, title }) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link activeLink" : "link"
                }
                to="/home"
              >
                Home
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
