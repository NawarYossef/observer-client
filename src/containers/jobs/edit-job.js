import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editJob, getSingleJob } from "../../actions/jobs";

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

      <section className="form-wrapper">
        <div className="h2-wrapper">
          <h2>Edit Job</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="company-info-section">
            <label htmlFor="company-name">
              <div className={"field-text"}>Company Name</div>
              <input
                type="text"
                name="companyName"
                placeholder={"Facebook"}
                value={this.state.companyName || ""}
                onChange={(e) => this.setState({ companyName: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="company-location">
              <div className={"field-text"}>Location</div>
              <input
                type="text"
                name="companyLocation"
                placeholder={"1200 university Ave"}
                value={this.state.companyLocation || ""}
                onChange={(e) => this.setState({ companyLocation: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="position">
              <div className={"field-text"}>Position Title</div>
              <input
                type="text"
                name="positionTitle"
                placeholder={"Software Developer"}
                value={this.state.positionTitle || ""}
                onChange={(e) => this.setState({ positionTitle: e.target.value })}
                className={"input-text style2"}
              />
            </label>

            <label htmlFor="companyType">
              <div className={"field-text"}>Company Type</div>
              <select value={this.state.companyType} onChange={(e) => this.setState({ companyType: e.target.value })}
              className={"input-text style2"}>
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
              <div className={"field-text"}>Salary</div>
              <input
                type="number"
                name="salary"
                value={this.state.salary || ""}
                onChange={(e) => this.setState({ salary: e.target.value })}
                lassName={"input-text style2"}
                placeholder={"$90000"}
              />
            </label>
            <label htmlFor="website">
              <div className={"field-text"}>Company Website</div>
              <input
                type="url"
                name="companyWebsite"
                value={this.state.companyWebsite || ""}
                onChange={(e) => this.setState({ companyWebsite: e.target.value })}
                className={"input-text style2"}
                placeholder={"www.facebook.com"}
              />
            </label>
            <label htmlFor="description">
              <div className={"field-text"}>Job Description Link</div>
              <input
                type="url"
                name="linkJobDescription"
                value={this.state.linkJobDescription || ""}
                onChange={(e) => this.setState({ linkJobDescription: e.target.value })}
                className={"input-text style2"}
                placeholder={"http://job.description"}
              />
            </label>

            <label htmlFor="jobStatus">
              <div className={"field-text"}>Job Status</div>
              <select value={this.state.jobStatus} onChange={(e) => this.setState({ jobStatus: e.target.value })}
              className={"input-text style2"}>
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
              <div className={"field-text textarea-field"}>Notes</div>
              <textarea rows="4" cols="50" value={this.state.notes || ""} onChange={(e) => this.setState({ notes: e.target.value })}
                className={"input-text style2 textarea"}
                placeholder={"I applied for this job two weeks ago..."}
              />
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
