import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewJob } from "../../actions/action";

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
    
    this.props.createNewJob( this.state);
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
    this.setState({ companyTitle: e.target.value });
  };

  handleSalaryChange = e => {
    this.setState({ jobsStatus: e.target.value });
  };

  handleCompanyWebsiteChange = e => {
    this.setState({ jobsStatus: e.target.value });
  };

  handleJobLinkChange = e => {
    this.setState({ jobsStatus: e.target.value });
  };

  handleJobStatusChange = e => {
    this.setState({ jobsStatus: e.target.value });
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
            <label for="company-name">
              Company Name
              <input
                type="text"
                name="companyName"
                value={this.state.companyName}
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label for="company-location">
              Location
              <input
                type="text"
                name="companyLocation"
                value={this.state.companyLocation}
                onChange={this.handleCompanyLocationChange}
              />
            </label>
            <label for="position">
              Position Title
              <input
                type="text"
                name="position"
                value={this.state.positionTitle}
                onChange={this.handlePositionTitleChange}
              />
            </label>

            <label>
              Company Type
              <select onChange={this.handleCompanyTypeChange}>
                <option value="startup" name="companyType">
                  Startup
                </option>
                <option value="nonprofit" name="companyType">
                  Nonprofit
                </option>
                <option value="corporation" name="companyType">
                  Corporation
                </option>
              </select>
            </label>
            <label for="salary">
              Salary
              <input
                type="number"
                name="salary"
                value={this.state.salary}
                onChange={this.handleSalaryChange}
              />
            </label>
            <label for="website">
              Company Website
              <input
                type="url"
                name="companyWebsite"
                value={this.state.companyWebsite}
                onChange={this.handleCompanyWebsiteChange}
              />
            </label>
            <label for="description">
              Link to Job Description
              <input
                type="url"
                name="linkJobDescription"
                value={this.state.linkJobDescription}
                onChange={this.handleJobLinkChange}
              />
            </label>

            <label>
              Job Status
              <select onChange={this.handleJobStatusChange}>
                <option value="applied" name="jobStatus">
                  Applied
                </option>
                <option value="interview" name="jobStatus">
                  Interview
                </option>
                <option value="interested" name="jobStatus">
                  Interested
                </option>
                <option value="negotiate" name="jobStatus">
                  Negotiate
                </option>
              </select>
            </label>
            <label for="notes">
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
