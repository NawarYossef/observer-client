import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/budget.css";

export default function Budget() {
  return (
    <section className="budget-container">
      <label for="budget">Enter Your Budget</label>
      <input type="number" name="name" placeholder="Enter your amount" />
    </section>
  );
}
