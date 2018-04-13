import React from "react";
import { shallow } from "enzyme";

import { NewActivity } from "../new-activity";

describe("<NewActivity />", () => {
  it("Renders without crashing", () => {
    shallow(<NewActivity />);
  });
})