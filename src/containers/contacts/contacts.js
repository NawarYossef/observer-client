import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getContacts, deleteContact } from "../../actions/contacts";
import AddNewContact from "../../components/contacts/add-new-contact";
import SingleContact from "../../components/contacts/single-contact";
import SearchBar from "../../components/search-bar";

import "./styles/contacts.css";
import "./styles/helper.css";

export class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(getContacts());
  }

  handleContactDelete(contact, id) {
    this.props.dispatch(deleteContact(contact, id))
    this.props.history.push(`/contacts`);
  }

  render() {
    let selectedContacts = this.props.contacts
    if (this.state.searchQuery !== "") {
      selectedContacts = this.props.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
        contact.contactTitle.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    }
    return (
      <section className="contacts-section">
        <SearchBar onChange={searchQuery => this.setState({ searchQuery })} />
        {
          selectedContacts.length ? (selectedContacts.map((contact, idx) => {
            return <SingleContact key={idx} contact={contact} onClick={() => this.handleContactDelete(contact, contact.id)} />;
          })) :
            <h3>No Result Found</h3>
        }
        <AddNewContact />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

export default connect(mapStateToProps)(Contacts);
