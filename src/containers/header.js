import React, { Component } from "react";

import NavigationMenu from "../components/navigation-menu";
import HamburgerButton from "../components/hamburger-button";


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hamburgerState: "not-active",
      headerStyles: ""
    }
  }

  handleHamburgerClick() {
    this.state.hamburgerState === "not-active" ?
      this.setState({
        hamburgerState: "is-active",
        headerStyles: "show-header"
      }) :
      this.setState({
        hamburgerState: "not-active",
        headerStyles: "none"
      })
  }

  render() {
    return (
      <div className="navbar-hamburger-wrapper">
        <HamburgerButton hamburgerState={this.state.hamburgerState} onClick={this.handleHamburgerClick.bind(this)} />
        <NavigationMenu hamburgerState={this.state.hamburgerState} headerStyles={this.state.headerStyles} />
      </div>
    );
  }
}

