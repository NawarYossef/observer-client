import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/new-job.css";

export default function NewJob() {
  return (
    <div className="applications-container">
      <form>
        <label for="date">
          Date
          <input type="date" name="date-and-time" />
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
          <input type="text" name="name" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
