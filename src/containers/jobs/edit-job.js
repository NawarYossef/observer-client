import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editJob, getSingleJob } from "../../actions/jobs";

import "./styles/edit-job.css";

export class EditJob extends Component {
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

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getJob(params.id);
    // console.log(this.props.job)
    this.setState({
      companyName: this.props.job["companyName"],
      companyLocation: this.props.job["companyLocation"],
      positionTitle: this.props.job["positionTitle"],
      companyType: this.props.job["companyType"],
      salary: this.props.job["salary"],
      companyWebsite: this.props.job["companyWebsite"],
      linkJobDescription: this.props.job["linkJobDescription"],
      jobStatus: this.props.job["jobStatus"],
      notes: this.props.job["notes"],
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    const job = this.state;
    const { match: { params } } = this.props;
    this.props.editJob(job, params.id);
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
            <label htmlFor="company-name">
              Company Name
              <input
                type="text"
                name="companyName"
                value={this.state.companyName || ""}
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label htmlFor="company-location">
              Location
              <input
                type="text"
                name="companyLocation"
                value={this.state.companyLocation || ""}
                onChange={this.handleCompanyLocationChange}
              />
            </label>
            <label htmlFor="position">
              Position Title
              <input
                type="text"
                name="position"
                value={this.state.positionTitle || ""}
                onChange={this.handlePositionTitleChange}
              />
            </label>

            <label htmlFor="companyType">
              Company Type
              <select value={this.state.companyType} onChange={this.handleCompanyTypeChange}>
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
            <label htmlFor="salary">
              Salary
              <input
                type="number"
                name="salary"
                value={this.state.salary || ""}
                onChange={this.handleSalaryChange}
              />
            </label>
            <label htmlFor="website">
              Company Website
              <input
                type="url"
                name="companyWebsite"
                value={this.state.companyWebsite || ""}
                onChange={this.handleCompanyWebsiteChange}
              />
            </label>
            <label htmlFor="description">
              Link to Job Description
              <input
                type="url"
                name="linkJobDescription"
                value={this.state.linkJobDescription || ""}
                onChange={this.handleJobLinkChange}
              />
            </label>

            <label htmlFor="jobStatus">
              Job Status
              <select value={this.state.jobStatus} onChange={this.handleJobStatusChange}>
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
            <label htmlFor="notes">
              Notes
              <textarea rows="4" cols="50" value={this.state.notes || ""} onChange={this.handleNotesChange} />
            </label>
          </div>

          <div className="buttons-wrapper">
            <input type="submit" value="Save" />
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
  getJob: (id) => dispatch(getSingleJob(id)),
  editJob: (id) => dispatch(editJob(id))
});

const mapStateToProps = state => ({
  job: state.jobs.singleJob
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
