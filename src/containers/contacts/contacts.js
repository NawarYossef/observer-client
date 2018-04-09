import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getContacts, deleteContact } from "../../actions/contacts";
import AddNewContact from "../../components/contacts/add-new-contact";
import SingleContact from "../../components/contacts/single-contact";

import "./styles/contacts.css";
import "./styles/helper.css";

export class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getContacts());
  }

  handleContactDelete(contact, id) {
    this.props.dispatch(deleteContact(contact, id))
    this.props.history.push(`/contacts`);
  }

  render() {
    return (
      <section className="contacts-section">
        {this.props.contacts.map((contact, k) =>
          <SingleContact key={k} contact={contact} onClick={() => this.handleContactDelete(contact, contact.id)} />
        )}
        <AddNewContact />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

export default connect(mapStateToProps)(Contacts);
