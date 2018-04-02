import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function AddNewJob() {
  return (
    <div>
      <Link to="/new-job">
        <button className="w3-button w3-xlarge w3-circle w3-black">+</button>
      </Link>
    </div>
  );
}

