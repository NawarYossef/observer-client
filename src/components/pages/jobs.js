import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="jobs-container">
        <Link to="/new-job">
          <button className="w3-button w3-xlarge w3-circle w3-black">+</button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
