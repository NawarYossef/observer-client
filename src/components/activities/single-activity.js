import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function SingleActivity(props) {
  return (
    <section className="activity">
      <h2>{props.activity["title"]}</h2>
      <p>{props.activity["type"]}</p>
      <p>{props.activity["date"]}</p>
      <p>{props.activity["topic"]}</p>
      <p>{props.activity["job"]}</p>

      <Link to={`/edit-job/${props.job.id}`}>
        <button>Edit Details</button>
      </Link>
      <Link to="/job-details">
        <button onClick={props.onClick}>Delete activity</button>
      </Link>
    </section>
  );
}

export default connect()(SingleActivity);
