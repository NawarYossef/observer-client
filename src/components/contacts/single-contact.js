import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function SingleActivity(props) {
  return (
    <section className="activity">
      <h2>{props.activity["name"]}</h2>
      <p>{props.activity["contactTitle"]}</p>
      <p>{props.activity["companyName"]}</p>
      <p>{props.activity["email"]}</p>
      <p>{props.activity["notes"]}</p>

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
