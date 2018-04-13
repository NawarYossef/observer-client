import React from "react";
import { shallow } from "enzyme";

import { SingleContact } from "./single-contact";

describe("<SingleContact />", () => {
  it("Renders without crashing", () => {
    shallow(<SingleContact />);
  });
})