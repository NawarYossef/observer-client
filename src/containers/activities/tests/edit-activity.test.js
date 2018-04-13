import React from "react";
import { shallow } from "enzyme";

import { EditActivity } from "../edit-activity";

describe("<EditActivity />", () => {
  it("Renders without crashing", () => {
    shallow(<EditActivity />);
  });
})