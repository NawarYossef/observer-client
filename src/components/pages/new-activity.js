import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/new-activity.css";
import "./styles/helper.css";

export default function NewActivity() {
  return (
    <section className="new-activity-container">
      <div className="h2-wrapper">
        <h2>New Activity</h2>
      </div>
      <form>
        <div className="details-container">
          <label for="date">
            Date
            <input type="date" name="date-and-time" />
          </label>
          <label>
             Type
            <select>
              <option value="networking">Networking Event</option>
              <option value="meetup">Meetup</option>
              <option value="mercedes">Tech Conference</option>
              <option value="hackathon">Hackathon</option>
              <option value="outreach">Cold Outreach</option>
              <option value="portfolio">Other</option>
            </select>
          </label>
          <label for="name">
             Name
            <input type="text" name="activity-name" />
          </label>

          <label for="topic">
             Topic
            <input type="text" name="activity-topic" />
          </label>

          <label for="website">
             Website
            <input type="url" name="activity-website" />
          </label>
        </div>
        <div className="buttons-wrapper">
          <input type="submit" value="Add Activity" />
          <Link to="/activities">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </form>
    </section>
  );
}
