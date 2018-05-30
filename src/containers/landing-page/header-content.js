import React from "react";
import { Link } from "react-router-dom";

import ".././styles/landing-page.css";

export default function HeaderContent(props) {

  return (
    <section className="header-content-section">
      <aside>
        <div className={"aside-content-wrapper"}>
          <h4>Manage your job search and professional contacts effectively.</h4>
          <h3>Finding a job can be simple with observer</h3>
          <div className="links-wrapper">
            <button className="link-to-signup" >
              <Link to="/">
                Get started for free!
            </Link>
            </button>
            <p onClick={props.onClick}>How it works?</p>
          </div>
        </div>
      </aside>
      <div className="header-img-wrapper">
        <div className="img"></div>
      </div>
    </section>
  )
}
