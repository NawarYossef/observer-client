import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { API_BASE_URL } from "../config";
import HeaderNavbar from "../components/header-navbar";
import LandingPage from "./landing-page";
import { Contacts } from "./contacts/contacts";
import NewContact from "./contacts/new-contact";
import EditContact from "./contacts/edit-contact";
import ShowContactDetails from "./contacts/show-contact-details"; 
import Jobs from "./jobs/jobs";
import NewJob from "./jobs/new-job";
import EditJob from "./jobs/edit-job";
import ShowJobDetails from "./jobs/show-job-details";
import { Activities } from "./activities/activities";
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
          <Route exact path="/new-activity" component={NewActivity} />
          <Route  path="/edit-activity/:id" component={EditActivity} />
          <Route  path="/show-activity/:id" component={ShowActivityDetails} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/new-job" component={NewJob} />
          <Route  path="/edit-job/:id" component={EditJob} />
          <Route  path="/show-job/:id" component={ShowJobDetails} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/new-contact" component={NewContact} />
          <Route  path="/edit-contact/:id" component={EditContact} />
          <Route  path="/show-contact/:id" component={ShowContactDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
