import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/single-activity.css";

export function SingleActivity(props) {
  return (
    <section className="activity">
      <h2>{props.activity.title}</h2>
      <p className="activity-date">{props.parseDate(props.activity.date)}</p>
      <p className="activity-type">{props.activity.type}</p>
      <p className="activity-topic">{props.activity.topic}</p>
      <p className="activity-website"><a href={`${props.activity.website}`} target="_blank" className={"website-anchor"}>{props.activity.website}</a></p>

      <div className="btns-wrapper">
        <Link to={`/activities/edit/${props.activity.id}`}>
          <button className="first-btn"><p className="btn-text">Edit</p></button>
        </Link>
        <Link to="/activities">
          <button className="second-btn" onClick={props.onClick}><p className="btn-text">Delete</p></button>
        </Link>
      </div>
    </section>
  );
}

export default connect()(SingleActivity);
