import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { connect } from "react-redux";
import moment from 'moment';
import { createNewActivity } from "../../actions/activities";

import 'react-datepicker/dist/react-datepicker.css';

export class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      topic: "",
      website: "",
      date: moment()
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newActivity = this.state;
    this.props.createNewActivity(newActivity);
    this.props.history.push("/activities");
  };

  render() {
    return (
      <section className=" new-item-wrapper">
        <div className="h2-wrapper">
          <h2>New Activity</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="details-container">
            <label htmlFor="title">
              <div className={"field-text"}>Title</div>
              <input type="text"
                name="title"
                placeholder={"The Atlanta Node.js Meetup"}
                onChange={(e) => this.setState({ title: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="type">
              <div className={"field-text"}>Type</div>
              <select onChange={(e) => this.setState({ type: e.target.value })}
                className={"input-text style2"}>
                <option value="Networking" name="type">Networking</option>
                <option value="Meetup" name="type">Meetup</option>
                <option value="Conference" name="type">Conference</option>
                <option value="Study" name="type">Study</option>
                <option value="Other" name="type">Other</option>
              </select>
            </label>
            <label htmlFor="date">
              <div className={"field-text"}>Date</div>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState({ date: date.format("MM-DD-YYYY") })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="topic">
              <div className={"field-text"}>Topic</div>
              <input type="text" name="topic"
                placeholder={"GraphQL and Apollo"}
                onChange={(e) => this.setState({ topic: e.target.value })}
                className={"input-text style2"} />
            </label>

            <label htmlFor="website">
              <div className={"field-text"}>Website</div>
              <input type="url" name="website" onChange={(e) => this.setState({ website: e.target.value })}
                placeholder={"www.event/meetup.com"}
                className={"input-text style2"} />
            </label>
          </div>
          <div className="buttons-wrapper">
            <input type="submit" value="Save" />
            <Link to="/activities">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewActivity: newActivity => dispatch(createNewActivity(newActivity))
});

export default connect(null, mapDispatchToProps)(NewActivity);
