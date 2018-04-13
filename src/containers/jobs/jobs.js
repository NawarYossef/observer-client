import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs, deleteJob } from "../../actions/jobs";
import AddNewJobButton from "../../components/jobs/add-new-job-button";
import SingleJob from "../../components/jobs/single-job";
import SearchBar from "../../components/search-bar";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
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
        {
          selectedJobs.length ? (selectedJobs.map((job, idx) => {
            return <SingleJob key={idx} job={job} onClick={() => this.handleJobDelete(job, job.id)} />;
          })) :
            <h3>No Result Found</h3>
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
