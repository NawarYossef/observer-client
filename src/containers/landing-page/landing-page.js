import React, { Component } from "react";
import { animateScroll as scroll } from 'react-scroll';
import HeaderContent from "./header-content";
import MainSection from "./main-section";
import Footer from "./footer";

import ".././styles/landing-page.css";

export default class LandingPage extends Component {

  scrollTo() {
    scroll.scrollTo(570);
  }

  showBackToTopBtn() {
  // console.log(window.scrollY)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showBackToTopBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showBackToTopBtn);
  }

  render() {
    return (
      <div>
        <HeaderContent onClick={this.scrollTo}/>
        <MainSection />
        <Footer />
      </div>
    )
  }
}
