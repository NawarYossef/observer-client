import React from "react";
import { shallow } from "enzyme";

import { AddNewActivityButton } from "./add-new-activity-button";

describe("<AddNewActivityButton />", () => {
  it("Renders without crashing", () => {
    shallow(<AddNewActivityButton />);
  });
})