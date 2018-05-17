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
      name: nextProps.contact.name,
      contactTitle: nextProps.contact.contactTitle,
      companyName: nextProps.contact.companyName,
      email: nextProps.contact.email,
      notes: nextProps.contact.notes
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

  render() {
    console.log('------------------------------------');
    console.log(this.state);
    console.log('------------------------------------');
    return (
      <section className="form-wrapper">
        <div className="h2-wrapper">
          <h2>Edit Contact</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="details-container">
            <label htmlFor="name">
              <div className={"field-text"}>Name</div>
              <input type="text"
                name="name"
                value={this.state.name || ""}
                placeholder={"David Coulter"}
                onChange={(e) => this.setState({ name: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="contact-title">
              <div className={"field-text"}>Contact Title</div>
              <input type="text"
                name="contactTitle"
                value={this.state.contactTitle || ""}
                placeholder={"IT Recruiter"}
                onChange={(e) => this.setState({ contactTitle: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="company-name">
              <div className={"field-text"}>Company Name</div>
              <input type="text"
                name="companyName"
                value={this.state.companyName || ""}
                placeholder={"Uber"}
                onChange={(e) => this.setState({ companyName: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="email">
              <div className={"field-text"}>Email</div>
              <input type="email"
                name="email"
                value={this.state.email || ""}
                placeholder={"david.it@gmail.com"}
                onChange={(e) => this.setState({ email: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="notes">
              <div className={"field-text"}>Notes</div>
              <textarea rows="4" cols="50" onChange={(e) => this.setState({ notes: e.target.value })}
                className={"input-text style2 textarea"}
                placeholder={"I met David at a meetup..."} 
                value={this.state.notes || ""}/>
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
