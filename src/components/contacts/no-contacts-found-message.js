import React from "react";

export default function NoContactsFoundMessage(props) {
  return (
    <div className="no-results-wrapper">
      <h6 className="no-results-message"> * No {props.field} Found</h6>
    </div>
  );
}
