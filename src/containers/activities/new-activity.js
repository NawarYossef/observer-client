import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';
import { connect } from "react-redux";
import { createNewActivity } from "../../actions/activities";

// import "./styles/new-job.css";

export class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      date: new Date(),
      topic: "",
      website: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newActivity = this.state;
    this.props.createNewActivity(newActivity);
    this.props.history.push("/activities");
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleTypeChange = e => {
    this.setState({ type: e.target.value });
  };

  handleDateChange = date => {
    this.setState({ date })
  };

  handleTopicChange = e => {
    this.setState({ topic: e.target.value });
  };

  handleWebsiteChange = e => {
    this.setState({ website: e.target.value });
  };

  render() {
    console.log('------------------------------------');
    console.log(this.state.date);
    console.log('------------------------------------');
    return (
      <section className="activity-container">
        <div className="h2-wrapper">
          <h2>Edit Activity</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="details-container">
            <label htmlFor="title">
              Title
            <input type="text"
                name="title"
                onChange={this.handleTitleChange}
              />
            </label>
            <label htmlFor="type">
              Type
            <select onChange={this.handleTypeChange}>
                <option value="Networking" name="type">Networking</option>
                <option value="Meetup" name="type">Meetup</option>
                <option value="Conference" name="type">Conference</option>
                <option value="Study" name="type">Study</option>
                <option value="Other" name="type">Other</option>
              </select>
            </label>
            <label htmlFor="date">
              Date
              <DatePicker
                onChange={this.handleDateChange}
                value={this.state.date}
              />
            </label>
            <label htmlFor="topic">
              Topic
            <input type="text" name="topic"
                onChange={this.handleTopicChange} />
            </label>

            <label htmlFor="website">
              Website
            <input type="url" name="website" onChange={this.handleWebsiteChange} />
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
