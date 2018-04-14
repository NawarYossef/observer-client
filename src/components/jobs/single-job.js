import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/single-job.css";

function SingleJob(props) {
  return (
    <section className="job">
      <h2>{props.job["companyName"]}</h2>
      <p>{props.job["positionTitle"]}</p>
      <p>{props.job["jobStatus"]}</p>

      <Link to={`/jobs/${props.job.id}`}>
        <button>Job details</button>
      </Link>
      <Link to={`/jobs/edit/${props.job.id}`}>
        <button>Edit information</button>
      </Link>
      <Link to={"/jobs"}>
        <button onClick={props.onClick}>Delete Job</button>
      </Link>
    </section>
  );
}

export default connect()(SingleJob);
