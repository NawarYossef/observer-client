import React from "react";
import { shallow } from "enzyme";

import { Jobs } from "../jobs";

describe("<Jobs />", () => {
  it("Renders without crashing", () => {
    shallow(<Jobs />);
  });
})