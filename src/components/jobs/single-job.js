import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/single-job.css";

function SingleJob(props) {
  return (
    <section className="job">
      <h2>{props.job.companyName}</h2>
      <p className="position-title">{props.job.positionTitle}</p>
      <p className="job-status">{props.job.jobStatus}</p>

      <div className="btns-wrapper">
        <Link to={`/jobs/${props.job.id}`}>
          <button className="first-btn"><p className="btn-text">Job details</p></button>
        </Link>
        <Link to={`/jobs/edit/${props.job.id}`}>
          <button className="second-btn"><p className="btn-text">Edit</p></button>
        </Link>
        <Link to={"/jobs"}>
          <button onClick={props.onClick} className="third-btn"><p className="btn-text">Delete</p></button>
        </Link>
      </div>
    </section>
  );
}

export default connect()(SingleJob);
