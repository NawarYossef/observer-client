import React, { Component } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { Helmet } from 'react-helmet';

import HeaderContent from "./header-content";
import MainSection from "./main-section";
import Footer from "./footer";

import ".././styles/landing-page.css";

export default class LandingPage extends Component {

  scrollTo() {
    scroll.scrollTo(570);
  }

  showBackToTopBtn() {

  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.showBackToTopBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showBackToTopBtn);
  }

  render() {
    return (
      <div className="landing-page-wrapper" onScroll={this.ss}>
        <Helmet>
          <style>{'#root { background-color: #ffffff; } header { box-shadow: none; background-color: #ffffffdb;} '}</style>
        </Helmet>
        <HeaderContent onClick={this.scrollTo} />
        <MainSection />
        <Footer />
      </div>
    )
  }
}
