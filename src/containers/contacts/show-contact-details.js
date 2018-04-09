import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getSingleContact } from "../../actions/contacts";

import "./styles/show-contact-details.css";

export class ShowContactsDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getSingleContact(params.id);
  }

  render() {
    return (
      <section className="contact-wrapper">
        <h2>{this.props.contact.name}</h2>
        <p>{this.props.contact.contactTitle}</p>
        <p>{this.props.contact.companyName}</p>
        <p>{this.props.contact.email}</p>
        <p>{this.props.contact.notes}</p>

        <Link to="/contacts">
          <button>Back to Contacts</button>
        </Link>
        <Link to={`/contact/edit/${this.props.contact.id}`}>
          <button>Edit Details</button>
        </Link>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleContact: (id) => dispatch(getSingleContact(id)),
});

const mapStateToProps = state => ({
  contact: state.contacts.singleContact
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowContactsDetails);
