import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

import "./styles/navigation-menu.css";

import headerIcon from "../images/header-icon.png"

export default function NavigationMenu(props) {
  let animation = "hide-nav"
  
  const links = [
    <Link to="/jobs" onClick={animation = "slideOutRight"}>
      JOBS
    </Link>,
    <Link to="/activities" onClick={animation = "slideOutRight"}>
      ACTIVITIES
    </Link>,
    <Link to="/contacts" onClick={animation = "slideOutRight"}>
      CONTACTS
    </Link>
  ];

  if (window.innerWidth < 681 && props.hamburgerState === "is-active") {
    animation = "show-nav slideInRight"
  } else if (window.innerWidth < 681 && props.hamburgerState === "not-active" && animation === "slideInRight") {
    animation = "slideOutRight"
  } else if (window.innerWidth > 681) {
    animation = "show-nav"
  }

  return (
    <header className={`app-title-wrapper`}>
      <img src={headerIcon} alt="logo" />
      <h1 className="App-title">OBSERVER</h1>
      <nav className={`animated ${animation}`}>
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
