import React from "react";
import { Link } from "react-router-dom";

import "../styles/add-new-button.css";

export default function AddNewJobButton() {
  return (
    <div className="btn-wrapper">
      <Link to="/jobs/new">
        <button className="w3-button w3-xlarge w3-circle w3-black ">+</button>
      </Link>
    </div>
  );
}

