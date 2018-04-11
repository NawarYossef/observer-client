import React, { Component } from "react";
import { connect } from "react-redux";

import { getActivities, deleteActivity } from "../../actions/activities";
import AddNewActivity from "../../components/activities/add-new-activity";
import SingleActivity from "../../components/activities/single-activity";
import CalendarSection from '../../components/activities/calendar-section';

import "./styles/helper.css";
import "./styles/activities.css";


export class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.props.dispatch(getActivities());
  }

  handleActivityDelete(activity, id) {
    this.props.dispatch(deleteActivity(activity, id))
    this.props.history.push(`/activities`);
  }

  handleCalendarDateChange(currentDate) {
    this.setState({ date: currentDate })
  }

  displayCurrentCalendarDate() {
    const currDate = this.formatCalendarDate();
    return currDate;
  }

  formatCalendarDate() {
    return (this.state.date).toDateString().split(" ").map((v, idx) => idx === 1 ? v + "," : v).join(" ");
  }

  parseActivityDate(IsoDate) {
    return new Date(IsoDate).toLocaleString().split(",")[0]
  }

  render() {
    let selectedActivities = this.props.activities.filter(activity => activity.date === new Date(this.state.date).toISOString());
    if (selectedActivities.length === 0) {
      selectedActivities = this.props.activities
    }

    return (
      <section className="activities-wrapper col-12">
        {selectedActivities.map((activity, idx) =>
          <SingleActivity key={idx} activity={activity} onClick={() => this.handleActivityDelete(activity, activity.id)} parseDate={this.parseActivityDate} />
        )}
        <AddNewActivity />
        <CalendarSection onChange={this.handleCalendarDateChange.bind(this)} currDate={this.state.date} />
        <h2>{this.displayCurrentCalendarDate()}</h2>
        { selectedActivities.length === this.props.activities.length ? <h3>No Result Found</h3> : null }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.activities
});

export default connect(mapStateToProps)(Activities);
