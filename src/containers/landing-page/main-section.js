// main-section
import React from "react";
import { Link } from "react-router-dom";

import JobIcon from "../../images/job-icon.png"
import LaptopIcon from "../../images/laptop-icon.png"
import BagIcon from "../../images/bag-icon.png"
import CalendarImg from "../../images/calendar-img.png"
// import JobsImg from "../../images/smart-phone-img.jpeg"
import PaperImg from "../../images/paper-icon.png"

import ".././styles/landing-page.css";

export default function MainSection(props) {

  return (
    <main>
      <section className="about">
        <h2>This is how it works!</h2>

        <div className="description">
          <div className="img-wrapper">
            <img src={JobIcon} alt="icon" />
            <h5>Keep track of your contacts</h5>
          </div>
          <div className="img-wrapper">
            <img src={BagIcon} alt="icon" />
            <h5>Save your job information</h5>
          </div>
          <div className="img-wrapper">
            <img src={LaptopIcon} alt="icon" />
            <h5>Manage your activities</h5>
          </div>
        </div>

        <section className="description-section">
          <button onClick={props.backToTop} className={"back-to-top-btn"}>
            <i className={"fa fa-angle-up"}></i>
          </button>
          <div className="text-wrapper left">
            <h6>Manage your activities</h6>
            <p className="calendar-text">Use our calendar to save and access all your activities on any giving day</p>
          </div>
          <div className="img-wrapper right">
            <img src={CalendarImg} className="calendar-img" alt="icon" />
          </div>
        </section>
      </section>

      <section className="description-section join-us">
        <div className="img-wrapper left">
          <img src={PaperImg} alt="icon" />
        </div>
        <div className="sign-up-text right">
          <p className="join-us-text">Join us today and enjoy preparing and planning for your next job. </p>
          <button className="link-to-signup with-border">
            <Link to="/signup">
              Get started for free!
                </Link>
          </button>
        </div>
      </section>
    </main>
  )
}