import React from "react";
import { shallow } from "enzyme";

import { ShowJobDetails } from "../show-job-details";

describe("<ShowJobDetails />", () => {
  it("Renders without crashing", () => {
    shallow(<ShowJobDetails />);
  });
})