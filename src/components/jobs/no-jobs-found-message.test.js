import React from "react";
import { shallow } from "enzyme";

import NoJobsFoundMessage from "./no-jobs-found-message";

describe("<NoJobsFoundMessage />", () => {
  it("Renders without crashing", () => {
    shallow(<NoJobsFoundMessage />);
  });
})