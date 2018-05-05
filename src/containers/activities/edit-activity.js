import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DatePicker from 'react-date-picker';
import { editActivity, getSingleActivity } from "../../actions/activities";

// import "./styles/edit-job.css";

export class EditActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      date: "",
      topic: "",
      website: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.activity.title,
      type: nextProps.activity.type,
      date: new Date(nextProps.activity.date),
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
                value={this.state.title || ""}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </label>
            <label htmlFor="type">
              Type
            <select value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                <option value="Networking" name="type">Networking</option>
                <option value="Meetup" name="type">Meetup</option>
                <option value="Conference" name="type">Conference</option>
                <option value="study" name="type">Study</option>
                <option value="Other" name="type">Other</option>
              </select>
            </label>
            <label htmlFor="date">
              Date
              <DatePicker
                onChange={(e) => this.setState({ date: e.target.value })}
                value={this.state.date}
              />
            </label>
            <label htmlFor="topic">
              Topic
            <input type="text" name="topic"
                value={this.state.topic || ""} onChange={(e) => this.setState({ topic: e.target.value })} />
            </label>

            <label htmlFor="website">
              Website
            <input type="url" name="website" value={this.state.website || ""} onChange={(e) => this.setState({ website: e.target.value })} />
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
