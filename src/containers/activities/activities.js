import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getActivities, deleteActivity } from "../../actions/activities";
import AddNewActivity from "../../components/activities/add-new-activity";
import SingleActivity from "../../components/activities/single-activity";

import "./styles/helper.css";


export class Activities extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(getActivities());
  }

  handleActivityDelete(activity, id) {
    // this.props.dispatch(deleteActivity(activity, id))
    this.props.history.push(`/activities`);
  } 

  render() {
    return (
      <section className="Activities-section">
       {/*this.props.activities.map((activity, k) => {
          return <SingleActivity key={k} activity={activity} onClick={() => this.handleActivityDelete(activity, activity.id)}/>;
        })*/}
        <AddNewActivity />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.activities
});

export default connect(mapStateToProps)(Activities);
