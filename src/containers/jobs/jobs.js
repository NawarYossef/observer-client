import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs, deleteJob } from "../../actions/jobs";
import AddNewJobButton from "../../components/jobs/add-new-job-button";
import SingleJob from "../../components/jobs/single-job";
import JobCountMessage from "../../components/jobs/job-count-message";
import NoJobsFoundMessage from "../../components/jobs/no-jobs-found-message";
import SearchBar from "../../components/search-bar";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      field: 'jobs',
      placeholder: "Enter company name or job status"
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
      let regexForSearchInput = new RegExp('^' + this.state.searchQuery.toLocaleLowerCase(), 'g');
      selectedJobs = this.props.jobs.filter(job =>
        job.companyName.toLowerCase().match(regexForSearchInput) !== null ||
        job.jobStatus.toLowerCase().match(regexForSearchInput) !== null
      )
    }
    return (
      <section className="jobs-section">
        <SearchBar onChange={searchQuery => this.setState({ searchQuery })} placeholder={this.state.placeholder} />
        {
          selectedJobs.length ?
            <JobCountMessage /> &&
            (selectedJobs.map((job, idx) => {
              return <SingleJob key={idx} job={job} onClick={() => this.handleJobDelete(job, job.id)} />;
            })) :
            <NoJobsFoundMessage field={this.state.field} />
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
