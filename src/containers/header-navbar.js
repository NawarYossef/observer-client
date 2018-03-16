import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./header-navbar.css";

export default function HeaderNavbar() {
  const links = [
    <Link to="/job-search" className="">
      SEARCH
    </Link>,
    <Link to="/jobs" className="">
      JOBS
    </Link>,
    <Link to="/activities" className="">
      ACTIVITIES
    </Link>,
    <Link to="/contacts" className="">
      CONTACTS
    </Link>
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">OBSERVER</h1>
        <nav>
          <ul>
            {links.map((link, idx) => {
              return (
                <li key={idx.toString()} className="link">
                  {link}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
