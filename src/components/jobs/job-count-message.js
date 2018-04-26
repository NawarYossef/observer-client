import React from "react";

export default function JobCountMessage(props) {
  return (
    <div className="list-text-wrapper">
    <span className="list-text">You have {props.jobs.length} {props.field} saved</span>
  </div>
  );
}
