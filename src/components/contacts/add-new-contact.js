import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function AddNewContact() {
  return (
    <div>
      <Link to="/contacts/new">
        <button className="w3-button w3-xlarge w3-circle w3-black">+</button>
      </Link>
    </div>
  );
}

