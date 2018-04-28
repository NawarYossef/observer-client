import React from "react";
import { shallow } from "enzyme";

import NoContactsFoundMessage  from "./no-contacts-found-message";

describe("<NoContactsFoundMessage />", () => {
  it("Renders without crashing", () => {
    shallow(<NoContactsFoundMessage />);
  });
})