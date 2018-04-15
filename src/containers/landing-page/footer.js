import React from "react";
import FontAwesome from 'react-fontawesome';

import headerIconBlack from "../../images/header-icon-black.png";
import ".././styles/landing-page.css";

export default function Footer(props) {

  return (
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
  )
}
