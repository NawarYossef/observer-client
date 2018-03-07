import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./header-navbar.css";

export default function HeaderNavbar() {
  const links = [
    <Link to="/dashboard" className="">
      DASHBOARD
    </Link>,
    <Link to="/expenses" className="">
      EXPENSES
    </Link>,
    <Link to="/history" className="">
      HISTORY
    </Link>,
    <Link to="/budget" className="">
      BUDGET
    </Link>
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">OBSERVER</h1>
        <nav>
          <ul>
            {links.map(link => {
              return <li className="link">{link}</li>;
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
