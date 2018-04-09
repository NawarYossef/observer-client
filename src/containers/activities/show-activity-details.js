import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleActivity } from "../../actions/activities";

// import "./styles/new-job.css";

export class ShowActivityDetails extends Component {
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
      title: nextProps.activity["title"],
      type: nextProps.activity["type"],
      date: nextProps.activity["date"],
      topic: nextProps.activity["topic"],
      website: nextProps.activity["website"]
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getActivity(params.id);
  }

  render() {
    return (
      <section className="activity">
        <h2>{this.props.activity["title"]}</h2>
        <p>{this.props.activity["type"]}</p>
        <p>{this.props.activity["date"]}</p>
        <p>{this.props.activity["topic"]}</p>
        <p>{this.props.activity["job"]}</p>

        <Link to={`/activities`}>
          <button>Back to activities</button>
        </Link>
        <Link to={`/edit-job/${this.props.job.id}`}>
          <button>Edit Details</button>
        </Link>
        <Link to="/job-details">
          <button onClick={this.props.onClick}>Delete activity</button>
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
