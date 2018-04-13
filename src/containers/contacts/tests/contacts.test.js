import React from "react";
import { shallow } from "enzyme";

import { Contacts } from "../contacts";

describe("<Contacts />", () => {
  it("Renders without crashing", () => {
    shallow(<Contacts />);
  });
})