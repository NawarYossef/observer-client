import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { editActivity, getSingleActivity } from "../../actions/activities";

import 'react-datepicker/dist/react-datepicker.css';

export class EditActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      date: moment(),
      topic: "",
      website: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.activity.title,
      type: nextProps.activity.type,
      date: moment(nextProps.activity.date),
      topic: nextProps.activity.topic,
      website: nextProps.activity.website
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getActivity(params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const activity = this.state;
    const { match: { params } } = this.props;
    this.props.editActivity(activity, params.id);
    this.props.history.push("/activities");
  };

  render() {
    console.log('------------------------------------');
    console.log(typeof this.state.date.format());
    console.log('------------------------------------');
    return (
      <section className="new-item-wrapper">
        <div className="h2-wrapper">
          <h2>Edit Activity</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="details-container">
            <label htmlFor="title">
              <div className={"field-text"}>Title</div>
              <input type="text"
                name="title"
                value={this.state.title}
                placeholder={"The Atlanta Node.js Meetup"}
                onChange={(e) => this.setState({ title: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="type">
              <div className={"field-text"}>Type</div>
              <select value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}
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
                selected={moment(this.state.date)}
                onChange={(date) => this.setState({ date: moment(date) })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="topic">
              <div className={"field-text"}>Topic</div>
              <input type="text" name="topic"
                placeholder={"GraphQL and Apollo"}
                onChange={(e) => this.setState({ topic: e.target.value })}
                className={"input-text style2"}
                value={this.state.topic} />
            </label>
            <label htmlFor="website">
              <div className={"field-text"}>Website</div>
              <input type="url" name="website" onChange={(e) => this.setState({ website: e.target.value })}
                placeholder={"www.event/meetup.com"}
                className={"input-text style2"}
                value={this.state.website} />
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
  getActivity: (id) => dispatch(getSingleActivity(id)),
  editActivity: (activity, id) => dispatch(editActivity(activity, id))
});

const mapStateToProps = state => ({
  activity: state.activities.singleActivity
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity);
