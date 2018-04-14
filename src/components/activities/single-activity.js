import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SingleActivity(props) {
  return (
    <section className="activity">
      <h2>{props.activity.title}</h2>
      <p>{props.activity.type}</p>
      <p>{props.parseDate(props.activity.date)}</p>
      <p>{props.activity.topic}</p>
      <p>{props.activity.website}</p>

      <Link to={`/activities/${props.activity.id}`}>
        <button>Activities details</button>
      </Link>
      <Link to={`/activities/edit/${props.activity.id}`}>
        <button>Edit Details</button>
      </Link>
      <Link to="/activities">
        <button onClick={props.onClick}>Delete activity</button>
      </Link>
    </section>
  );
}

export default connect()(SingleActivity);
