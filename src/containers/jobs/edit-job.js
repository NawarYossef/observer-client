import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      companyName: nextProps.job["companyName"],
      companyLocation: nextProps.job["companyLocation"],
      positionTitle: nextProps.job["positionTitle"],
      companyType: nextProps.job["companyType"],
      salary: nextProps.job["salary"],
      companyWebsite: nextProps.job["companyWebsite"],
      linkJobDescription: nextProps.job["linkJobDescription"],
      jobStatus: nextProps.job["jobStatus"],
      notes: nextProps.job["notes"]
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getJob(params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const job = this.state;
    const { match: { params } } = this.props;
    this.props.editJob(job, params.id);
    this.props.history.push("/jobs");
    console.log(this.props.job)
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
                onChange={(e) => this.setState({ companyName: e.target.value })}
              />
            </label>
            <label htmlFor="company-location">
              Location
              <input
                type="text"
                name="companyLocation"
                value={this.state.companyLocation || ""}
                onChange={(e) => this.setState({ companyLocation: e.target.value })}
              />
            </label>
            <label htmlFor="position">
              Position Title
              <input
                type="text"
                name="positionTitle"
                value={this.state.positionTitle || ""}
                onChange={(e) => this.setState({ positionTitle:  e.target.value })}
              />
            </label>

            <label htmlFor="companyType">
              Company Type
              <select value={this.state.companyType} onChange={(e) => this.setState({ companyType: e.target.value })}>
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
                value={this.state.salary || ""}
                onChange={(e) => this.setState({ salary: e.target.value })}
              />
            </label>
            <label htmlFor="website">
              Company Website
              <input
                type="url"
                name="companyWebsite"
                value={this.state.companyWebsite || ""}
                onChange={(e) => this.setState({ companyWebsite: e.target.value })}
              />
            </label>
            <label htmlFor="description">
              Link to Job Description
              <input
                type="url"
                name="linkJobDescription"
                value={this.state.linkJobDescription || ""}
                onChange={(e) => this.setState({ linkJobDescription: e.target.value })}
              />
            </label>

            <label htmlFor="jobStatus">
              Job Status
              <select value={this.state.jobStatus} onChange={(e) => this.setState({ jobStatus: e.target.value })}>
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
              <textarea rows="4" cols="50" value={this.state.notes || ""} onChange={(e) => this.setState({ notes: e.target.value })} />
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
  editJob: (job, id) => dispatch(editJob(job, id))
});

const mapStateToProps = state => ({
  job: state.jobs.singleJob
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
