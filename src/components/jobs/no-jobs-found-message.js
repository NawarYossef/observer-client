import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default function NoJobsFoundMessage(props) {
  return (
    <div className="no-results-wrapper">
      <h6 className="no-results-message"> * No {props.field} Found</h6>
    </div>
  );
}
