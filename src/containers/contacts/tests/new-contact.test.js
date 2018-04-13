import React from "react";
import { shallow } from "enzyme";

import { NewContact } from "../new-contact";

describe("<NewContact />", () => {
  it("Renders without crashing", () => {
    shallow(<NewContact />);
  });
})