import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getJobs, deleteJob } from "../../actions/jobs";
import AddNewJob from "../../components/jobs/add-new-job";
import SingleJob from "../../components/jobs/single-job";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getJobs());
  }

  handleJobDelete(job, id) {
    this.props.dispatch(deleteJob(job, id))
    this.props.history.push(`/jobs`);
  } 

  render() {
    return (
      <section className="jobs-section">
        {this.props.jobs.map((job, k) => {
          return <SingleJob key={k} job={job} onClick={() => this.handleJobDelete(job, job.id)}/>;
        })}
        <AddNewJob />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Jobs);
