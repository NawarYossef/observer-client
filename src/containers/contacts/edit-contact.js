import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editContact, getSingleContact } from "../../actions/contacts";

import "./styles/edit-contact.css";

export class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contactTitle: "",
      companyName: "",
      email: "",
      notes: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.contact["name"],
      contactTitle: nextProps.contact["type"],
      companyName: nextProps.contact["companyName"],
      email: nextProps.contact["email"],
      notes: nextProps.contact["notes"]
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getContact(params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const contact = this.state;
    const { match: { params } } = this.props;
    this.props.editContact(contact, params.id);
    this.props.history.push("/contacts");
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleContactTitleChange = e => {
    this.setState({ contactTitle: e.target.value });
  };

  handleCompanyNameChange = e => {
    this.setState({ companyName: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleNotesChange = e => {
    this.setState({ notes: e.target.value });
  };

  render() {
    return (
      <section className="contact-container">
        <div className="h2-wrapper">
          <h2>Edit Contact</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="details-container">
            <label htmlFor="name">
              Name
            <input type="text"
                name="name"
                value={this.state.name || ""}
                onChange={this.handleNameChange}
              />
            </label>
            <label htmlFor="contact-title">
              Contact Title
            <input type="text"
                name="contactTitle"
                value={this.state.contactTitle || ""}
                onChange={this.handleContactTitleChange}
              />
            </label>
            <label htmlFor="company-name">
              Company Name
            <input type="text"
                name="companyName"
                value={this.state.companyName || ""}
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label htmlFor="email">
              Email
            <input type="email"
                name="email"
                value={this.state.email || ""}
                onChange={this.handleEmailChange}
              />
            </label>
            <label htmlFor="notes">
              Notes
              <textarea rows="4" cols="50" 
              value={this.state.notes || ""}
              onChange={this.handleNotesChange} />
            </label>
          </div>
          <div className="buttons-wrapper">
            <input type="submit" value="Save" />
            <Link to="/contacts">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getContact: (id) => dispatch(getSingleContact(id)),
  editContact: (contact, id) => dispatch(editContact(contact, id))
});

const mapStateToProps = state => ({
  contact: state.contacts.singleContact
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
