import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getJobs } from "../../actions/action";

import "./styles/jobs.css";
import "./styles/helper.css";

export class Jobs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getJobs())
  }

  render() {
    console.table(this.props.jobs)
    return (
      <section className="jobs-container">
        <Link to="/new-job">
          <button className="w3-button w3-xlarge w3-circle w3-black">+</button>
        </Link>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  jobs: state.app.jobs
})


export default connect(mapStateToProps)(Jobs);
