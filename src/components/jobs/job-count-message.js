import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default function JobCountMessage(props) {
  return (
    <div className="list-text-wrapper">
    <span className="list-text">You have {props.jobs.length} {props.field} saved</span>
  </div>
  );
}
