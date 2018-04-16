import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs, deleteJob } from "../../actions/jobs";
import AddNewJobButton from "../../components/jobs/add-new-job-button";
import SingleJob from "../../components/jobs/single-job";
import SearchBar from "../../components/search-bar";

import "./styles/jobs.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      field: 'jobs'
    }
  }

  componentDidMount() {
    this.props.dispatch(getJobs());
  }

  handleJobDelete(job, id) {
    this.props.dispatch(deleteJob(job, id));
    this.props.history.push("/jobs")
  }

  render() {
    let selectedJobs = this.props.jobs
    if (this.state.searchQuery !== "") {
      selectedJobs = this.props.jobs.filter(job =>
        job.companyName.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
        job.jobStatus.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    }
    return (
      <section className="jobs-section">
        <SearchBar onChange={searchQuery => this.setState({ searchQuery })} />
        <div className="list-text-wrapper">
          <span className="list-text">You have {this.props.jobs.length} {this.state.field} saved</span>
        </div>
        {
          selectedJobs.length ? (selectedJobs.map((job, idx) => {
            return <SingleJob key={idx} job={job} onClick={() => this.handleJobDelete(job, job.id)} />;
          })) :
            <div className="no-results-wrapper">
              <h6 className="no-results-message"> * No {this.state.field} Found</h6>
            </div>
        }
        <AddNewJobButton />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Jobs);
