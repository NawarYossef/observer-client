import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/single-job.css";

function SingleJob(props) {
  return (
    <section className="job">
      <h2>{props.job["companyName"]}</h2>
      <p>{props.job["positionTitle"]}</p>
      <p>{props.job["companyType"]}</p>
      <p>{props.job["jobStatus"]}</p>

      <Link to={`/edit-job/${props.job.id}`}>
        <button>Edit Details</button>
      </Link>
      <Link to="/job-details">
        <button onClick={props.onClick}>Delete Job</button>
      </Link>
    </section>
  );
}

export default connect()(SingleJob);
