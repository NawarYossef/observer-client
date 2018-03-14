import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewJob } from "../../actions/action";

import "./styles/new-job.css";

export class NewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobType: ""
    };
  }

  handleChange = e => {
    this.setState({ jobType: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newJob = {
      dateDiscovered: e.target.dateDiscovered.value || "",
      jobType: this.state.jobType || "",
      companyName: e.target.companyName.value || "",
      companyLocation: e.target.companyLocation.value || "",
      position: e.target.position.value || "",
      salary: e.target.salary.value || "",
      companyWebsite: e.target.companyWebsite.value || "",
      companySize: e.target.companySize.value || "",
      linkJobDescription: e.target.linkJobDescription.value || "",
      dateApplied: e.target.dateApplied.value || "",
      contactName: e.target.contactName.value || "",
      contactEmail: e.target.contactEmail.value || "",
      codingChallengeDate: e.target.codingChallengeDate.value || "",
      techChallengeDate: e.target.techChallengeDate.value || ""
    };
    console.log(newJob);

    this.props.createNewJob(newJob);
  };

  render() {
    return (
      <section className="new-job-container">
        <div className="h2-wrapper">
          <h2>New Job</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="company-info-section">
            <label for="name">
              Company Name
              <input type="text" name="companyName" />
            </label>
            <label for="name">
              Location
              <input type="text" name="companyLocation" />
            </label>
            <label for="position">
              Position Title
              <input type="text" name="position" />
            </label>
            <label for="salary">
              Salary
              <input type="number" name="salary" />
            </label>
            <label for="website">
              Company Website
              <input type="url" name="companyWebsite" />
            </label>
            <label for="description">
              Link to Job Description
              <input type="url" name="linkJobDescription" />
            </label>
            <label>
              Job Status
              <select onChange={this.handleChange}>
                <option value="applied" name="jobStatus">
                  Applied
                </option>
                <option value="interview" name="jobStatus">
                  Interview
                </option>
                <option value="interested" name="jobStatus">
                  Interested
                </option>
                <option value="new-lead" name="jobStatus">
                  Negotiate
                </option>
              </select>
            </label>
            <label for="comments">
              Notes
              <textarea rows="4" cols="50" />
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
