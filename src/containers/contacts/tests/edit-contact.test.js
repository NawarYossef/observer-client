import React from "react";
import { shallow } from "enzyme";

import { EditContact } from "../edit-contact";

describe("<EditContact />", () => {
  it("Renders without crashing", () => {
    shallow(<EditContact />);
  });
})