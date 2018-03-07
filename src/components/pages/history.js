import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/history.css"

export class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="history-container">
        <h1>History</h1>
      </section>
    );
  }
}
