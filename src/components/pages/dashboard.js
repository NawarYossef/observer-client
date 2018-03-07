import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/dashboard.css"
export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="dashboard-container">
        <h1>Dashboard</h1>
      </section>
    );
  }
}
