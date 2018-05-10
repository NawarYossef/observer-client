import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewJob } from "../../actions/jobs";

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

  render() {
    return (
      <section className=" form-wrapper">
        <div className="h2-wrapper">
          <h2>New Job</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="company-info-section">
           
            <label htmlFor="company-name">
             <div className={"field-text"}>Company Name</div>
              <input
                type="text"
                name="companyName"
                placeholder={"Facebook"}
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
                onChange={(e) => this.setState({ CompanyLocation: e.target.value })}
                className={"input-text style2"}
              />
            </label>
            <label htmlFor="position">
            <div className={"field-text"}>Position Title</div>
              <input
                type="text"
                name="positionTitle"
                placeholder={"Software Developer"}
                onChange={(e) => this.setState({ positionTitle: e.target.value })}
                className={"input-text style2"}
              />
            </label>

            <label htmlFor="companyType">
            <div className={"field-text"}>Company Type</div>
              <select onChange={(e) => this.setState({ companyType: e.target.value })}
                className={"input-text style2"}
              >
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
                onChange={(e) => this.setState({ salary: e.target.value })}
                className={"input-text style2"}
                placeholder={"$90000"}
              />
            </label>
            <label htmlFor="website">
            <div className={"field-text"}>Company Website</div>
              <input
                type="url"
                name="companyWebsite"
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
                onChange={(e) => this.setState({ linkJobDescription: e.target.value })}
                className={"input-text style2"}
                placeholder={"http://job.description"}
              />
            </label>

            <label htmlFor="jobStatus">
            <div className={"field-text"}>Job Status</div>
              <select onChange={(e) => this.setState({ jobStatus: e.target.value })}
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
              <textarea rows="4" cols="50" onChange={(e) => this.setState({ notes: e.target.value })}
                className={"input-text style2 textarea"}
                placeholder={"I applied for this job two weeks ago..."} />
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
