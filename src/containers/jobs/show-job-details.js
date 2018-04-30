import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleJob } from "../../actions/jobs";

import "./styles/show-job-details.css";

export class ShowJobDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getSingleJob(params.id);
  }

  render() {
    return (
      <section className="job-details">
        <h2>{this.props.job.companyName}</h2>
        <p className="position-title title"><span>Position</span>: {this.props.job.positionTitle}</p>
        <p className="title"><span>Company Type:</span> {this.props.job.companyType}</p>
        <p className="title"><span>Salary:</span> ${this.props.job.salary}</p>
        <p className="job-status title"><span>Job Status:</span> {this.props.job.jobStatus}</p>
        <p className="title"><span>Company Website:</span> <a href={this.props.job.companyWebsite} target="_blank" className={"website-anchor"}>{this.props.job.companyWebsite} </a></p>
        <p className="title"><span>Job Description:</span> <a href={this.props.job.linkJobDescription} target="_blank" className={"website-anchor"}>{this.props.job.linkJobDescription}</a></p>
        <p className="title"><span>Location</span>: {this.props.job.companyLocation}</p>
        <p className="title notes"><span>Notes:</span><span>"{this.props.job.notes}"</span></p>

        <div className="btns-wrapper">
          <Link to={`/jobs`}>
            <button className="first-btn"><p className="btn-text">Back to Jobs</p></button>
          </Link>
          <Link to={`/jobs/edit/${this.props.job.id}`}>
            <button className="second-btn"><p className="btn-text">Edit information</p></button>
          </Link>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleJob: (id) => dispatch(getSingleJob(id)),
});

const mapStateToProps = state => ({
  job: state.jobs.singleJob
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowJobDetails);
