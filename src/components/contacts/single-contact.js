import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/single-contact.css";
import "../styles/add-new-button.css";

export function SingleContact(props) {
  return (
    <section className="contact">
      <h2>{props.contact["name"]}</h2>
      <p className="contact-title">{props.contact.contactTitle}</p>
      <p className="company-name">{props.contact.companyName}</p>
      <p className="contact-email">{props.contact.email}</p>
      <p className="contact-notes">{props.contact.notes}</p>

      <div className="btns-wrapper">
        <Link to={`/contacts/edit/${props.contact.id}`}>
          <button className="first-btn"><p className="btn-text">Edit</p></button>
        </Link>
        <Link to="/contacts">
          <button onClick={props.onClick} className="second-btn"><p className="btn-text">Delete</p></button>
        </Link>
      </div>
    </section>
  );
}

export default connect()(SingleContact);
