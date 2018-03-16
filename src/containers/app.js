import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { API_BASE_URL } from "../config";
import HeaderNavbar from "./header-navbar";
import LandingPage from "./pages/landing-page";
import { Dashboard } from "./pages/dashboard";
import Jobs from "./pages/jobs";
import NewJob from "./pages/new-job";
import EditJob from "./pages/edit-job";
import { Activities } from "./pages/activities";
import NewActivity from "./pages/new-activity";
import { JobSearch } from "./pages/job-search";

import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNavbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/new-activity" component={NewActivity} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/new-job" component={NewJob} />
          <Route exact path="/job-search" component={JobSearch} />
          <Route exact path="/edit-job" component={EditJob} />
        </div>
      </Router>
    );
  }
}

export default App;
