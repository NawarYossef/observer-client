import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { refreshAuthToken } from "../actions/auth";

import Header from "./header"
import LandingPage from "./landing-page/landing-page";
import Contacts from "./contacts/contacts";
import NewContact from "./contacts/new-contact";
import EditContact from "./contacts/edit-contact";
import Jobs from "./jobs/jobs";
import NewJob from "./jobs/new-job";
import EditJob from "./jobs/edit-job";
import ShowJobDetails from "./jobs/show-job-details";
import Activities from "./activities/activities";
import NewActivity from "./activities/new-activity";
import EditActivity from "./activities/edit-activity";
import ShowActivityDetails from "./activities/show-activity-details";
import RegistrationPage from "./registration-page";

import "./styles/app.css";

class AppRouter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hamburgerState: "not-active",
      headerStyles: ""
    }
  }

  handleHamburgerClick() {
    this.state.hamburgerState === "not-active" ?
      this.setState({
        hamburgerState: "is-active",
        headerStyles: "show-header"
      }) :
      this.setState({
        hamburgerState: "not-active",
        headerStyles: "none"
      })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/activities" component={Activities} />
            <Route path="/activities/new" component={NewActivity} />
            <Route path="/activities/edit/:id" component={EditActivity} />
            <Route path="/activities/:id" component={ShowActivityDetails} />

            <Route exact path="/jobs" component={Jobs} />
            <Route path="/jobs/new" component={NewJob} />
            <Route path="/jobs/edit/:id" component={EditJob} />
            <Route path="/jobs/:id" component={ShowJobDetails} />

            <Route exact path="/contacts" component={Contacts} />
            <Route path="/contacts/new" component={NewContact} />
            <Route path="/contacts/edit/:id" component={EditContact} />
            <Route exact path="/register" component={RegistrationPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
