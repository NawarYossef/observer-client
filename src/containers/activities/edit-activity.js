import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editJob, getSingleJob } from "../../actions/jobs";

// import "./styles/edit-job.css";

export class EditActivity extends Component {
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
    // console.log(this.props.job)
  }

  handleSubmit = e => {
    e.preventDefault();
    const job = this.state;
    const { match: { params } } = this.props;
    this.props.editJob(job, params.id);
    this.props.history.push("/jobs");
    console.log(this.props.job)
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

      <section className="activity-container">
        <div className="h2-wrapper">
          <h2>Edit Activity</h2>
        </div>
        <form>
          <div className="details-container">
            <label htmlFor="title">
              Title
            <input type="text"
                name="title"
                value=""
              />
            </label>
            <label htmlFor="type">
              Type
            <select>
                <option value="networking" name="type">Networking Event</option>
                <option value="meetup" name="type">Meetup</option>
                <option value="mercedes" name="type">Tech Conference</option>
                <option value="hackathon" name="type">Hackathon</option>
                <option value="outreach" name="type">Learning</option>
                <option value="portfolio" name="type">Other</option>
              </select>
            </label>
            <label htmlFor="date">
              Date
            <input type="date"
                name="date"
                value="" />
            </label>
            <label htmlFor="topic">
              Topic
            <input type="text" name="topic" value="" />
            </label>

            <label htmlFor="website">
              Website
            <input type="url" name="website" value="" />
            </label>
          </div>
          <div className="buttons-wrapper">
            <input type="submit" value="Save" />
            <Link to="/activities">
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

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity);
