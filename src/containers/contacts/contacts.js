import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts, deleteContact } from "../../actions/contacts";
import AddNewContactButton from "../../components/contacts/add-new-contact-button";
import SingleContact from "../../components/contacts/single-contact";
import ContactCountMessage from "../../components/contacts/contact-count-message";
import NoContactsFoundMessage from "../../components/contacts/no-contacts-found-message";
import SearchBar from "../../components/search-bar";

import "./styles/contacts.css";
import "./styles/helper.css";

export class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      field: 'contacts',
      placeholder: "Enter contact name"
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
      let regexForSearchInput = new RegExp('^' + this.state.searchQuery.toLocaleLowerCase(), 'g');
      selectedContacts = this.props.contacts.filter(contact =>
        contact.name.toLowerCase().match(regexForSearchInput) !== null
      )
    }
    return (
      <section className="entries-section">
        <SearchBar onChange={searchQuery => this.setState({ searchQuery })} category={this.state.field} placeholder={this.state.placeholder}/>
        {
          selectedContacts.length ?
            <ContactCountMessage /> &&
            (selectedContacts.map((contact, idx) => {
              return <SingleContact key={idx} contact={contact} onClick={() => this.handleContactDelete(contact, contact.id)} />;
            })) :
            <NoContactsFoundMessage field={this.state.field} />
        }
        <AddNewContactButton />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

export default connect(mapStateToProps)(Contacts);
