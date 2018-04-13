import React from "react";
import { shallow } from "enzyme";

import { SingleJob } from "./single-job";

describe("<SingleJob />", () => {
  it("Renders without crashing", () => {
    shallow(<SingleJob />);
  });
})