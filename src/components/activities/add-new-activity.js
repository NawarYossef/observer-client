import React from "react";
import { Link } from "react-router-dom";

export default function AddNewActivity() {
  return (
    <div>
      <Link to="/activities/new">
        <button className="w3-button w3-xlarge w3-circle w3-black">+</button>
      </Link>
    </div>
  );
}

