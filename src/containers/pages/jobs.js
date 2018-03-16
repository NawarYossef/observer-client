import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getJobs, deleteJob } from "../../actions/action";
import AddNewJob from "../../components/add-new-job";
import SingleJob from "../../components/single-job";

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
  jobs: state.app.jobs
});

export default connect(mapStateToProps)(Jobs);
