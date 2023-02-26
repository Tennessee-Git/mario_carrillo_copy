import React from "react";
import "../styles/Menu.css";

export const Menu = () => {
  return (
    <div className="MenuMain">
      <div className="MenuIcon">
        <img src="src\assets\react.svg"></img>
      </div>
      <nav className="MenuNav">
        <li className="MenuNavItem">
          <a className="Link">About</a>
        </li>
        <li className="MenuNavItem">
          <a className="Link">Projects</a>
        </li>
        <li className="MenuNavItem">
          <a className="Link">Contact</a>
        </li>
      </nav>
    </div>
  );
};
