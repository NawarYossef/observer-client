import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/activities.css";

export class Activities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="activities-container">
        <form>
          <label for="date">
            Date
            <input type="date" name="date-and-time" />
          </label>
          <label>
            Activity Type
            <select>
              <option value="networking">Networking Event</option>
              <option value="meetup">Meetup</option>
              <option value="mercedes">Tech Conference</option>
              <option value="outreach">Cold Outreach</option>
              <option value="hackathon">Hackathon</option>
              <option value="new-learning">New Learning</option>
              <option value="studying">
                Studying Data Structures And Algorithms
              </option>
              <option value="portfolio">Portfolio Improvement</option>
              <option value="portfolio">Other</option>
            </select>
          </label>
          <label for="name">
            Activity Name
            <input type="text" name="activity-name" />
          </label>

          <label for="topic">
            Activity Topic
            <input type="text" name="activity-topic" />
          </label>

          <label for="website">
            Activity Topic
            <input type="url" name="activity-website" />
          </label>
          <input type="submit" value="Add Activity" />
          <input type="submit" value="Cancel" />
        </form>
      </section>
    );
  }
}
