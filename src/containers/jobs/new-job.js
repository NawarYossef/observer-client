import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewJob } from "../../actions/jobs";

import "./styles/new-job.css";

export class NewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyLocation: "",
      positionTitle: "",
      companyType: "",
      salary: "",
      companyWebsite: "",
      linkJobDescription: "",
      jobStatus: "",
      notes: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newJob = this.state;
    this.props.createNewJob(newJob);
    this.props.history.push("/jobs");
  };

  handleCompanyNameChange = e => {
    this.setState({ companyName: e.target.value });
  };

  handleCompanyLocationChange = e => {
    this.setState({ CompanyLocation: e.target.value });
  };

  handlePositionTitleChange = e => {
    this.setState({ positionTitle: e.target.value });
  };

  handleCompanyTypeChange = e => {
    this.setState({ companyType: e.target.value });
  };

  handleSalaryChange = e => {
    this.setState({ salary: e.target.value });
  };

  handleCompanyWebsiteChange = e => {
    this.setState({ companyWebsite: e.target.value });
  };

  handleJobLinkChange = e => {
    this.setState({ linkJobDescription: e.target.value });
  };

  handleJobStatusChange = e => {
    this.setState({ jobStatus: e.target.value });
  };

  handleNotesChange = e => {
    this.setState({ notes: e.target.value });
  };

  render() {
    return (
      <section className="new-job-container">
        <div className="h2-wrapper">
          <h2>New Job</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="company-info-section">
            <label htmlFor="company-name">
              Company Name
              <input
                type="text"
                name="companyName"
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label htmlFor="company-location">
              Location
              <input
                type="text"
                name="companyLocation"
                onChange={this.handleCompanyLocationChange}
              />
            </label>
            <label htmlFor="position">
              Position Title
              <input
                type="text"
                name="position"
                onChange={this.handlePositionTitleChange}
              />
            </label>

            <label htmlFor="companyType">
              Company Type
              <select onChange={this.handleCompanyTypeChange}>
                <option value="Startup" name="companyType">
                  Startup
                </option>
                <option value="Nonprofit" name="companyType">
                  Nonprofit
                </option>
                <option value="Corporation" name="companyType">
                  Corporation
                </option>
              </select>
            </label>
            <label htmlFor="salary">
              Salary
              <input
                type="number"
                name="salary"
                onChange={this.handleSalaryChange}
              />
            </label>
            <label htmlFor="website">
              Company Website
              <input
                type="url"
                name="companyWebsite"
                onChange={this.handleCompanyWebsiteChange}
              />
            </label>
            <label htmlFor="description">
              Link to Job Description
              <input
                type="url"
                name="linkJobDescription"
                onChange={this.handleJobLinkChange}
              />
            </label>

            <label htmlFor="jobStatus">
              Job Status
              <select onChange={this.handleJobStatusChange}>
                <option value="Applied" name="jobStatus">
                  Applied
                </option>
                <option value="Interview" name="jobStatus">
                  Interview
                </option>
                <option value="Interested" name="jobStatus">
                  Interested
                </option>
                <option value="Negotiate" name="jobStatus">
                  Negotiate
                </option>
              </select>
            </label>
            <label htmlFor="notes">
              Notes
              <textarea rows="4" cols="50" onChange={this.handleNotesChange} />
            </label>
          </div>

          <div className="buttons-wrapper">
            <input type="submit" value="Add Job" />
            <Link to="/jobs">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewJob: newJob => dispatch(createNewJob(newJob))
});

export default connect(null, mapDispatchToProps)(NewJob);
