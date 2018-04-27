import React from "react";

export default function ContactCountMessage(props) {
  return (
    <div className="list-text-wrapper">
    <span className="list-text">You have {props.contacts.length} {props.field} saved</span>
  </div>
  );
}
