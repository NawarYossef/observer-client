import React, { Component } from "react";
import { Link } from "react-router-dom";

import JobIcon from "../images/job-icon.png"
import LaptopIcon from "../images/laptop-icon.png"
import BagIcon from "../images/bag-icon.png"
import CalendarImg from "../images/calendar-img.png"
import PaperImg from "../images/paper-icon.png"
import headerIconBlack from "../images/header-icon-black.png"

import "./styles/landing-page.css";
import FontAwesome from 'react-fontawesome'

export default class LandingPage extends Component {

  render() {
    return (
      <div>
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
            <div className="text-wrapper right">
              <p className="join-us-text">Join us today and enjoy preparing and planning for your next job. </p>
              <button className="link-to-signup with-border">
                <Link to="/signup">
                  Get started for free!
                </Link>
              </button>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-title-wrapper">
            <img src={headerIconBlack} alt="icon" />
            <h1 className="App-title">OBSERVER</h1>
          </div>
          <div className="contacts col-12">
            <ul className="">
              <li className="">
                <a href="https://www.linkedin.com/in/nawar-yossef-78924211a/" target="_blank" rel="noopener noreferrer" name="linkedin" role="presentation">
                  <FontAwesome name="linkedin" />
                </a>
              </li>
              <li className="">
                <a href="https://github.com/NawarYossef" target="_blank" rel="noopener noreferrer" name="github">
                  <FontAwesome name="github" />
                </a>
              </li>
              <li className="">
                <a href="http://www.nawaryossef.com/" rel="noopener noreferrer" name="personal-website">
                  <FontAwesome name="shopping-bag" />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            <FontAwesome name="copyright" />
            <span>2018</span> Nawar Yossef
          </p>
        </footer>
      </div>
    )
  }
}
