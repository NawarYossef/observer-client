import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function SingleContact(props) {
  return (
    <section className="contact">
      <h2>{props.contact["name"]}</h2>
      <p>{props.contact["contactTitle"]}</p>
      <p>{props.contact["companyName"]}</p>
      <p>{props.contact["email"]}</p>
      <p>{props.contact["notes"]}</p>

      <Link to={`/contacts/${props.contact.id}`}>
        <button>Contact details</button>
      </Link>
      <Link to={`/contacts/edit/${props.contact.id}`}>
        <button>Edit Details</button>
      </Link>
      <Link to="/contacts">
        <button onClick={props.onClick}>Delete contact</button>
      </Link>
    </section>
  );
}

export default connect()(SingleContact);
