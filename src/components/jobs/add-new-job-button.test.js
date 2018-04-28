import React from "react";
import { shallow } from "enzyme";

import AddNewJobButton from "./add-new-job-button";

describe("<AddNewJobButton />", () => {
  it("Renders without crashing", () => {
    shallow(<AddNewJobButton />);
  });
})