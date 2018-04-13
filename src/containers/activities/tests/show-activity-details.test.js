import React from "react";
import { shallow } from "enzyme";

import { ShowActivityDetails } from "../show-activity-details";

describe("<ShowActivityDetails />", () => {
  it("Renders without crashing", () => {
    shallow(<ShowActivityDetails />);
  });
})