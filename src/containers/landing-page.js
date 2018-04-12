import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/landing-page.css";

export default class LandingPage extends Component {

  render() {
    return (
      <div>
        <section className="header-content-section">
          <aside>
            <h2>Manage your job search and professional contacts effectively.</h2>
            <h3>Finding  Job Can Be Simple With Observer</h3>
            <div className="links-wrapper">
              <button className="link-to-signup">
                <Link to="/signup">
                  Get started for free!
                </Link>
              </button>
              <p  >How it works?</p>
            </div>
          </aside>
          <div className="img-wrapper">
            <div className="img"></div>
          </div>
        </section>
        <main>
          <section className="about">
            <h2>This is how it works!</h2>
            <div className="jobs-text text">
              <h3>Save jobs details</h3>
              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
