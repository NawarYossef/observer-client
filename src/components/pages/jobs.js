import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/jobs.css";

export default function Jobs() {
  return (
    <section className="jobs-container">
      <form>
        <label for="date">
          Date
          <input type="date" name="date-and-time" />
        </label>

        <label for="jobs-status">
          <h3>Job Status</h3>

          <label>
            <input type="radio" name="applied" />
            <span>Applied</span>
          </label>

          <label>
            <span>interview</span>
            <input type="radio" name="interview" />
          </label>

          <label>
            <span>Interested</span>
            <input type="radio" name="interested" />
          </label>

          <label>
            <span>Offer</span>
            <input type="radio" name="offer" />
          </label>
        </label>

        <label for="name">
          Company Name
          <input type="text" name="company-name" />
        </label>

        <label for="website">
          Company Website
          <input type="url" name="company-website" />
        </label>

        <label for="position">
          Position Title
          <input type="text" name="company-position" />
        </label>

        <label for="contact">
          Company Contact Title
          <input type="text" name="company-contact" />
        </label>

        <label for="email">
          Company Contact Email
          <input type="email" name="company-email" />
        </label>

        <label for="description">
          Description
          <textarea rows="4" cols="50" >
          </textarea>
        </label>

        <input type="submit" value="Add Job" />
        <input type="submit" value="Cancel" />
      </form>
    </section>
  );
}
