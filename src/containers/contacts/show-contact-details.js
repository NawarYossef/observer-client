import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getSingleContact } from "../../actions/contacts";

import "./styles/show-contact-details.css";

export class ShowContactsDetails extends Component {
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
    console.log('------------------------------------');
    console.log(this.props.contact);
    console.log('------------------------------------');
  }

  render() {
    return (
      <section className="contact">
        <h2>{this.props.contact["title"]}</h2>
        <p>{this.props.contact["type"]}</p>
        <p>{this.props.contact["date"]}</p>
        <p>{this.props.contact["topic"]}</p>
        <p>{this.props.contact["job"]}</p>

        <Link to={`/show-contact/${this.props.contact.id}`}>
          <button>Contacts details</button>
        </Link>
        <Link to={`/edit-contact/${this.props.contact.id}`}>
          <button>Edit Details</button>
        </Link>
        <Link to="/contacts">
          <button onClick={this.props.onClick}>Delete contact</button>
        </Link>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getContact: (id) => dispatch(getSingleContact(id)),
});

const mapStateToProps = state => ({
  contact: state.contacts.singleContact
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowContactsDetails);
