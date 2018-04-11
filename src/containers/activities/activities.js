import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

  handleDateChange(currentDate) {
    this.setState({date: currentDate})
  }

  displayCurrentDate() {
    const currDate = this.formatDate();
    return currDate;
  }

  formatDate() {
    return (this.state.date).toDateString().split(" ").map((v, idx) => idx === 1 ? v + "," : v).join(" ");
  }

  render() {
    return (
      
      <section className="activities-wrapper col-12">
        {this.props.activities.map((activity, idx) => 
           <SingleActivity key={idx} activity={activity} onClick={() => this.handleActivityDelete(activity, activity.id)}/>
        )}
        <AddNewActivity />
        <CalendarSection onChange={this.handleDateChange.bind(this)} currDate={this.state.date}/>
        <h2>{this.displayCurrentDate()}</h2>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.activities
});

export default connect(mapStateToProps)(Activities);
