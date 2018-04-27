import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewContact } from "../../actions/contacts";

// import "./styles/new-job.css";

export class NewContact extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    const newContact = this.state;
    this.props.createNewContact(newContact);
    this.props.history.push("/contacts");
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleContactTitleChange = e => {
    this.setState({ contactTile: e.target.value });
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
                onChange={this.handleNameChange}
              />
            </label>
            <label htmlFor="contact-title">
              Contact Title
            <input type="text"
                name="contactTitle"
                onChange={this.handleContactTitleChange}
              />
            </label>
            <label htmlFor="company-name">
              Company Name
            <input type="text"
                name="companyName"
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label htmlFor="email">
              Email
            <input type="email"
                name="email"
                onChange={this.handleEmailChange}
              />
            </label>
            <label htmlFor="notes">
              Notes
              <textarea rows="4" cols="50" onChange={this.handleNotesChange} />
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
  createNewContact: newContact => dispatch(createNewContact(newContact))
});

export default connect(null, mapDispatchToProps)(NewContact);
