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

  render() {
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
                placeholder={"David Coulter"}
                onChange={(e) => this.setState({ name: e.target.value })}
                className={"input-text style2"}
              />
            </label>

            <label htmlFor="contact-title">
              <div className={"field-text"}>Contact Title</div>
              <input type="text"
                name="contactTitle"
                placeholder={"IT Recruiter"}
                onChange={(e) => this.setState({ contactTitle: e.target.value })}
                className={"input-text style2"}
              />
            </label>

            <label htmlFor="company-name">
              <div className={"field-text"}>Company Name</div>
              <input type="text"
                name="companyName"
                placeholder={"Uber"}
                onChange={(e) => this.setState({ companyName: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="email">
              <div className={"field-text"}>Email</div>
              <input type="email"
                name="email"
                placeholder={"david.it@gmail.com"}
                onChange={(e) => this.setState({ email: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="notes">
              <div className={"field-text"}>Notes</div>
              <textarea rows="4" cols="50" onChange={(e) => this.setState({ notes: e.target.value })}
                className={"input-text style2 textarea"}
                placeholder={"I met David at a meetup..."} />
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
