import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { API_BASE_URL } from "../config";
import HeaderNavbar from "../components/header-navbar";
import LandingPage from "./landing-page";
import { Contacts } from "./contacts/contacts";
import Jobs from "./jobs/jobs";
import NewJob from "./jobs/new-job";
import EditJob from "./jobs/edit-job";
import { Activities } from "./activities/activities";
import NewActivity from "./activities/new-activity";
import EditActivity from "./activities/edit-activity";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNavbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/new-activity" component={NewActivity} />
          <Route  path="/edit-activity/:id" component={EditActivity} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/new-job" component={NewJob} />
          <Route  path="/edit-job/:id" component={EditJob} />
        </div>
      </Router>
    );
  }
}

export default App;
