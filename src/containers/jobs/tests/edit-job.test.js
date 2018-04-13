import React from "react";
import { shallow } from "enzyme";

import { EditJob } from "../edit-job";

describe("<EditJob />", () => {
  it("Renders without crashing", () => {
    shallow(<EditJob />);
  });
})