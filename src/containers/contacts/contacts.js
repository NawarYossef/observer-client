import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/contacts.css"
export class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="dashboard-container">
        <h1>Contacts</h1>
      </section>
    );
  }
}
