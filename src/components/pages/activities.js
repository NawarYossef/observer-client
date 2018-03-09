import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/activities.css";
import "./styles/helper.css";

export class Activities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="activities-container">
        <button class="w3-button w3-xlarge w3-circle w3-black">+</button>
      </section>
    );
  }
}
