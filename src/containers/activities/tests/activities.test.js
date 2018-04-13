import React from "react";
import { shallow } from "enzyme";

import { Activities } from "../activities";

describe("<Activities />", () => {
  it("Renders without crashing", () => {
    shallow(<Activities />);
  });
})