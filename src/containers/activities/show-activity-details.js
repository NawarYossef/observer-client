import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleActivity } from "../../actions/activities";

// import "./styles/new-job.css";

export class ShowActivityDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getActivity(params.id);
  }

  render() {
    return (
      <section className="activity">
        <h2>{this.props.activity.title}</h2>
        <p>{this.props.activity.type}</p>
        <p>{this.props.activity.date}</p>
        <p>{this.props.activity.topic}</p>
        <p>{this.props.activity.job}</p>

        <Link to={`/activities`}>
          <button>Back to activities</button>
        </Link>
        <Link to={`/activities/edit/${this.props.job.id}`}>
          <button>Edit Details</button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getActivity: (id) => dispatch(getSingleActivity(id)),
});

const mapStateToProps = state => ({
  activity: state.activities.singleActivity
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowActivityDetails);
