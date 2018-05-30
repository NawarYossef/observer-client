import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { getActivities, deleteActivity } from "../../actions/activities";
import AddNewActivityButton from "../../components/activities/add-new-activity-button";
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
    this.changeFooterPosition();
    this.props.dispatch(getActivities());
  }

  changeFooterPosition() {
    document.querySelector("footer").setAttribute("style", "position:absolute; bottom:0;");
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
    let selectedActivities = this.props.activities.filter(activity => moment(activity.date).format('YYYY-MM-DD') === moment(new Date(this.state.date).toISOString()).format('YYYY-MM-DD'));
    if (selectedActivities.length === 0) {
      selectedActivities = this.props.activities
    }
    
   
    return (
      <section className="main-wrapper">
        <h2 className={"current-date"}>{this.displayCurrentCalendarDate()}</h2>
        <div className={"calendar-activities-wrapper"}>
          <CalendarSection onChange={this.handleCalendarDateChange.bind(this)} currDate={this.state.date} activitiesCount={selectedActivities} activities={this.props.activities} />
          <div className={"activities-wrapper"}>
            {selectedActivities.map((activity, idx) =>
              <SingleActivity key={idx} activity={activity} onClick={() => this.handleActivityDelete(activity, activity.id)} parseDate={this.parseActivityDate} />
            )}
          </div>
        </div>
        <AddNewActivityButton />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.activities
});

export default connect(mapStateToProps)(Activities);
