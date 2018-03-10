import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/new-job.css";

export class NewJob extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="new-job-container">
        <div className="h2-wrapper">
          <h2>New Job</h2>
        </div>
        <form>
          <div className="general-info-section">
            <label for="apply-discovered">
              Date Discovered
              <input type="date" name="discover-date" />
            </label>
            <label>
              Job Type
              <select>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="interested">Interested</option>
                <option value="new-lead">Negotiate</option>
              </select>
            </label>
          </div>
          <div className="company-info-section">
            <label for="name">
              Company Name
              <input type="text" name="company-name" />
            </label>
            <label for="position">
              Position
              <input type="text" name="company-position" />
            </label>
            <label for="salary">
              Salary
              <input type="number" name="company-salary" />
            </label>
            <label for="website">
              Company Website
              <input type="url" name="company-website" />
            </label>
            <label for="size">
              Company Size
              <input type="url" name="company-size" />
            </label>
            <label for="description">
              Link to Job Description
              <input type="url" name="company-description" />
            </label>
          </div>

          <div className="contact-info-section">
            <label for="apply-date">
              Date Applied
              <input type="date" name="apply-date" />
            </label>
            <label for="contact">
              Contact Name
              <input type="text" name="company-contact" />
            </label>
            <label for="email">
              Contact Email
              <input type="email" name="company-email" />
            </label>
            <label for="coding-challenge-date">
              Coding Challenge Date
              <input type="date" name="intervnew-date" />
            </label>
            <label for="interview-date">
              Technical Interview Date
              <input type="date" name="intervnew-date" />
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
