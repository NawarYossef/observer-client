import React from "react";
import { shallow } from "enzyme";

import { NewJob } from "../new-job";

describe("<NewJob />", () => {
  it("Renders without crashing", () => {
    shallow(<NewJob />);
  });
})