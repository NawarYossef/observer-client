import React from "react";
import { shallow } from "enzyme";

import { SingleActivity } from "./single-activity";

describe("<SingleActivity />", () => {
  it("Renders without crashing", () => {
    shallow(<SingleActivity />);
  });
})