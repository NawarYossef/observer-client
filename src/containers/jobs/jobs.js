import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getJobs, deleteJob } from "../../actions/jobs";
import AddNewJob from "../../components/jobs/add-new-job";
import SingleJob from "../../components/jobs/single-job";
import SearchBar from "../../components/search-bar";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(getJobs());
  }

  handleJobDelete(job, id) {
    this.props.dispatch(deleteJob(job, id))
    this.props.history.push(`/jobs`);
  }

  // searchTermIsValid() {
  //   return this.props.jobs.filter((job, idx) => {
  //     job["companyName"].toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
  //   })
  // }

  render() {
    
    if (this.state.searchTerm === "") {
      return (
        <section className="jobs-section">
          <SearchBar onChange={searchTerm => this.setState({ searchTerm })} />
          {
            this.props.jobs.map((job, k) => {
              return <SingleJob key={k} job={job} onClick={() => this.handleJobDelete(job, job.id)} />;
            })
          }
          <AddNewJob />
        </section>
      )
    } else {
      const selectedJobs = this.props.jobs.filter(job  =>  job.companyName === "HP" )
      console.log(selectedJobs)
      return (
        <section className="jobs-section">
          <SearchBar onChange={searchTerm => this.setState({ searchTerm })} />
          {
            this.props.jobs.map((job, k) => {
              return <SingleJob key={k} job={job} onClick={() => this.handleJobDelete(job, job.id)} />;
            })
          }
          <AddNewJob />
        </section>
      )
    }
    // } else {
    //   return (
    //     <section className="jobs-section">
    //       <SearchBar onChange={searchTerm => this.setState({ searchTerm })} />
    //       <h4>Not Found</h4>
    //     </section>
    //   )
    // }
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Jobs);
