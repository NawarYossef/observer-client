import React, { Component } from "react";
import { Link } from "react-router-dom";
import "animate.css";

import "./styles/navigation-menu.css";
import { Helmet } from 'react-helmet';

import headerIcon from "../images/header-icon.png"

export default class NavigationMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationClass: ""
    }
  }

  handleSlideAnimation() {
    if (window.innerWidth < 681 && this.props.hamburgerState === "is-active") {
      return "animated slideInRight"

    } else if (window.innerWidth < 681 && this.props.hamburgerState === "not-active") {
      return  "hide-nav"
    } else if (window.innerWidth > 681) {
      return "show-nav"
    }
  }

  render() {
    const links = [
      <Link to="/jobs" onClick={this.handleSlideAnimation}>
        JOBS
      </Link>,
      <Link to="/activities" onClick={this.handleSlideAnimation}>
        ACTIVITIES
      </Link>,
      <Link to="/contacts" onClick={this.handleSlideAnimation}>
        CONTACTS
      </Link>
    ];

    return (
      <header className={`app-title-wrapper ${this.props.headerStyles}`}>
        <Helmet>
          <style>{'#root { background-color: #ffffff; } header{ background-color: #ffffff;}'}</style>
        </Helmet>
        <img src={headerIcon} alt="logo" />
        <h1 className="App-title">OBSERVER</h1>
        <nav className={this.handleSlideAnimation()}>
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
}
