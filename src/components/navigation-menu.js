import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

import "./styles/navigation-menu.css";

import headerIcon from "../images/header-icon.png"

export default function NavigationMenu(props) {
  const links = [
    <Link to="/jobs">
      JOBS
    </Link>,
    <Link to="/activities">
      ACTIVITIES
    </Link>,
    <Link to="/contacts">
      CONTACTS
    </Link>
  ];
  let animation = props.hamburgerState === "is-active" ? "slideInRight" : "slideOutRight"
  window.innerWidth > 680 ? animation = "" : null; 
  return (
    <header className={`app-title-wrapper animated ${animation}`}>
      <img src={headerIcon} alt="logo" />
      <h1 className="App-title">OBSERVER</h1>
      <nav>
        <ul>
          {links.map((link, idx) => {
            return (
              <li key={idx.toString()} className="link">
                {link}
                <hr />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
