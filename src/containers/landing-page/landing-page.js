import React, { Component } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { Helmet } from 'react-helmet';

import HeaderContent from "./header-content";
import MainSection from "./main-section";
import Footer from "./footer";

import ".././styles/landing-page.css";

export default class LandingPage extends Component {

  scrollToMain() {
    scroll.scrollTo(570);
  }

  backToTop() {
    scroll.scrollToTop(570);
  }

  handleHeaderBoxShadow() {
    window.scrollY > 92 ?
      document.querySelector('header').style.boxShadow = "0 0px 20px rgba(255, 255, 255, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23)" :
      document.querySelector('header').style.boxShadow = "none";
  }

  handleBackToTopBtn() {
    window.scrollY > 400 ?
      document.getElementsByClassName('back-to-top-btn')[0].style.display = "initial" :
      document.getElementsByClassName('back-to-top-btn')[0].style.display = "none";
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderBoxShadow);
    window.addEventListener('scroll', this.handleBackToTopBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHeaderBoxShadow);
    window.removeEventListener('scroll', this.handleBackToTopBtn);
  }

  render() {
    return (
      <div className="landing-page-wrapper">
        <Helmet>
          <style>{'#root { background-color: #ffffff; } header { box-shadow: none; background-color: #ffffffdb;} '}</style>
        </Helmet>
        <HeaderContent onClick={this.scrollToMain} />
        <MainSection backToTop={this.backToTop} />
        <Footer />
      </div>
    )
  }
}
