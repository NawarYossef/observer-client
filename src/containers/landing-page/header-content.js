import React from "react";
import { Link } from "react-router-dom";

import ".././styles/landing-page.css";

export default function HeaderContent(props) {

  return (
    <section className="header-content-section">
      <aside>
        <h4>Manage your job search and professional contacts effectively.</h4>
        <h3>Finding  Job Can Be Simple With Observer</h3>
        <div className="links-wrapper">
          <button className="link-to-signup">
            <Link to="/signup">
              Get started for free!
            </Link>
          </button>
          <p onClick={props.onClick}>How it works?</p>
        </div>
      </aside>
      <div className="header-img-wrapper">
        <div className="img"></div>
      </div>
    </section>
  )
}
