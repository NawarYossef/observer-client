import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { API_BASE_URL } from "../config";
import HeaderNavbar from "../components/header-navbar";
import LandingPage from "./landing-page";
import Contacts from "./contacts/contacts";
import NewContact from "./contacts/new-contact";
import EditContact from "./contacts/edit-contact";
import ShowContactDetails from "./contacts/show-contact-details";
import Jobs from "./jobs/jobs";
import NewJob from "./jobs/new-job";
import EditJob from "./jobs/edit-job";
import ShowJobDetails from "./jobs/show-job-details";
import Activities from "./activities/activities";
import NewActivity from "./activities/new-activity";
import EditActivity from "./activities/edit-activity";
import ShowActivityDetails from "./activities/show-activity-details";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNavbar />
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/activities" component={Activities} />
          <Route exact path="/activities/edit/:id" component={EditActivity} />
          <Route exact path="/activities/new" component={NewActivity} />
          <Route exact path="/activities/:id" component={ShowActivityDetails} />

          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/edit/:id" component={EditJob} />
          <Route exact path="/jobs/new" component={NewJob} />
          <Route exact path="/jobs/:id" component={ShowJobDetails} />

          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
          <Route exact path="/contacts/new" component={NewContact} />
          <Route exact path="/contacts/:id" component={ShowContactDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
