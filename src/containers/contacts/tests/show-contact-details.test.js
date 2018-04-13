import React from "react";
import { shallow } from "enzyme";

import { ShowContactDetails } from "../show-contact-details";

describe("<ShowContactDetails />", () => {
  it("Renders without crashing", () => {
    shallow(<ShowContactDetails />);
  });
})